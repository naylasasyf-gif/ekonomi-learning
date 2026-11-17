// =====================================================
// ECONOMY LEARNING - script.js
// =====================================================

// Alamat Google Apps Script. Diisi di Tahap 4. Biarkan kosong dulu.
const URL_GOOGLE_SHEETS = "https://script.google.com/macros/s/AKfycbzpifEFnmbw6LEGBIX5mpZYP1ewwRXNDZRyH-zClgNoUn1wnsejHlhv27iWfRKsWl4U/exec";

const HURUF = ["A", "B", "C", "D", "E"];

// Data yang diingat website selama siswa mengerjakan
let siswa = {};        // nama, kelas, absen
let jawaban = [];      // jawaban siswa tiap soal, misalnya ["B", null, "A"]
let noSoal = 0;        // nomor soal yang sedang tampil (mulai dari 0)
let hasil = {};        // hasil akhir (benar, salah, nilai)

// ---------- Alat bantu kecil ----------
function $(id) {
  return document.getElementById(id);
}

// Mengamankan teks supaya tampil apa adanya di halaman
function aman(teks) {
  const el = document.createElement("div");
  el.textContent = teks;
  return el.innerHTML;
}

// Menampilkan satu halaman dan menyembunyikan yang lain
function tampilkanLayar(id) {
  document.querySelectorAll(".layar").forEach(function (l) {
    l.classList.remove("aktif");
  });
  $(id).classList.add("aktif");
  window.scrollTo(0, 0);
}

// ---------- Beranda dan Identitas ----------
$("tombolMulaiLatihan").addEventListener("click", function () {
  tampilkanLayar("identitas");
});

$("formIdentitas").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = $("inputNama").value.trim();
  const kelas = $("inputKelas").value.trim();
  const absen = $("inputAbsen").value.trim();

  if (nama === "" || kelas === "" || absen === "") {
    $("galatIdentitas").textContent = "Nama, kelas, dan nomor absen wajib diisi ya.";
    return;
  }
  if (Number(absen) < 1) {
    $("galatIdentitas").textContent = "Nomor absen harus angka 1 atau lebih.";
    return;
  }

  $("galatIdentitas").textContent = "";
  siswa = { nama: nama, kelas: kelas, absen: absen };
  mulaiPengerjaan();
});

// ---------- Mengerjakan soal ----------
function mulaiPengerjaan() {
  jawaban = new Array(DATA_SOAL.length).fill(null);
  noSoal = 0;
  $("namaDiLatihan").textContent = siswa.nama;
  tampilkanSoal();
  tampilkanLayar("latihan");
}

function jumlahTerjawab() {
  return jawaban.filter(function (j) { return j !== null; }).length;
}

function tampilkanSoal() {
  const s = DATA_SOAL[noSoal];
  const total = DATA_SOAL.length;

  $("nomorSoal").textContent = "Soal " + (noSoal + 1) + " dari " + total;
  $("teksSoal").textContent = s.soal;
  $("peringatan").textContent = "";

  // Pilihan jawaban
  let html = "";
  s.pilihan.forEach(function (isi, i) {
    const huruf = HURUF[i];
    const dipilih = jawaban[noSoal] === huruf ? " dipilih" : "";
    html += '<button type="button" class="pilihan' + dipilih + '" data-huruf="' + huruf + '">' +
            '<span class="huruf">' + huruf + '</span><span>' + aman(isi) + '</span></button>';
  });
  $("daftarPilihan").innerHTML = html;

  // Progres
  const terjawab = jumlahTerjawab();
  $("teksProgres").textContent = terjawab + " dari " + total + " soal terjawab";
  $("barIsi").style.width = (terjawab / total * 100) + "%";

  // Tombol navigasi
  $("tombolSebelumnya").disabled = (noSoal === 0);
  const terakhir = (noSoal === total - 1);
  $("tombolSelanjutnya").style.display = terakhir ? "none" : "inline-block";
  $("tombolSelesai").style.display = terakhir ? "inline-block" : "none";

  // Peta nomor soal
  let peta = "";
  for (let i = 0; i < total; i++) {
    let kelas = "";
    if (jawaban[i] !== null) kelas += " terjawab";
    if (i === noSoal) kelas += " sekarang";
    peta += '<button type="button" class="' + kelas.trim() + '" data-no="' + i + '">' + (i + 1) + '</button>';
  }
  $("petaSoal").innerHTML = peta;
}

// Klik pilihan jawaban
$("daftarPilihan").addEventListener("click", function (e) {
  const tombol = e.target.closest(".pilihan");
  if (!tombol) return;
  jawaban[noSoal] = tombol.getAttribute("data-huruf");
  tampilkanSoal();
});

// Klik nomor di peta soal
$("petaSoal").addEventListener("click", function (e) {
  const tombol = e.target.closest("button");
  if (!tombol) return;
  noSoal = Number(tombol.getAttribute("data-no"));
  tampilkanSoal();
});

$("tombolSebelumnya").addEventListener("click", function () {
  if (noSoal > 0) { noSoal--; tampilkanSoal(); }
});

$("tombolSelanjutnya").addEventListener("click", function () {
  if (noSoal < DATA_SOAL.length - 1) { noSoal++; tampilkanSoal(); }
});

// ---------- Menyelesaikan latihan ----------
$("tombolSelesai").addEventListener("click", function () {
  const kosong = [];
  jawaban.forEach(function (j, i) {
    if (j === null) kosong.push(i + 1);
  });

  if (kosong.length > 0) {
    $("peringatan").textContent =
      "Masih ada soal yang belum dijawab: nomor " + kosong.join(", ") +
      ". Jawab semua soal dulu ya.";
    return;
  }

  if (!confirm("Yakin ingin mengumpulkan jawaban? Jawaban tidak bisa diubah lagi.")) return;
  hitungDanTampilkanHasil();
});

function hitungDanTampilkanHasil() {
  const total = DATA_SOAL.length;
  let benar = 0;
  DATA_SOAL.forEach(function (s, i) {
    if (jawaban[i] === s.kunci) benar++;
  });
  const salah = total - benar;
  const nilai = Math.round(benar / total * 100);

  hasil = { total: total, benar: benar, salah: salah, nilai: nilai };

  $("nilaiAkhir").textContent = nilai;
  $("hasilTotal").textContent = total;
  $("hasilBenar").textContent = benar;
  $("hasilSalah").textContent = salah;
  $("hasilNama").textContent = siswa.nama;
  $("hasilKelas").textContent = siswa.kelas;
  $("hasilAbsen").textContent = siswa.absen;

  tampilkanLayar("hasil");
  kirimKeGoogleSheets();
}

// ---------- Mengirim hasil ke Google Sheets ----------
function kirimKeGoogleSheets() {
  const status = $("statusKirim");

  if (URL_GOOGLE_SHEETS === "") {
    status.textContent = "Mode uji coba: hasil belum dikirim ke Google Sheets (akan diaktifkan di Tahap 4).";
    return;
  }

  status.textContent = "Mengirim hasil ke guru...";

  const data = {
    waktu: new Date().toLocaleString("id-ID"),
    nama: siswa.nama,
    kelas: siswa.kelas,
    absen: siswa.absen,
    total: hasil.total,
    benar: hasil.benar,
    salah: hasil.salah,
    nilai: hasil.nilai,
    jawaban: jawaban
  };

  fetch(URL_GOOGLE_SHEETS, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data)
  })
    .then(function () {
      status.textContent = "✔ Hasil sudah dikirim ke guru.";
    })
    .catch(function () {
      status.textContent = "Hasil belum terkirim. Periksa koneksi internet, lalu kabari gurumu.";
    });
}

// ---------- Pembahasan ----------
$("tombolLihatPembahasan").addEventListener("click", function () {
  let html = "";
  DATA_SOAL.forEach(function (s, i) {
    const benar = jawaban[i] === s.kunci;

    html += '<div class="kartu bahas ' + (benar ? "benar" : "salah") + '">';
    html += '<div class="nomor-soal">Soal ' + (i + 1) + '</div>';
    html += '<div class="teks-soal">' + aman(s.soal) + '</div>';
    html += '<div class="status ' + (benar ? "benar" : "salah") + '">' +
            (benar ? "Benar!" : "Jawaban Kurang Tepat") + '</div>';

    s.pilihan.forEach(function (isi, k) {
      const huruf = HURUF[k];
      let kelas = "opsi-bahas";
      let tanda = "";
      if (huruf === s.kunci) { kelas += " kunci"; tanda = " ✔ (jawaban benar)"; }
      else if (huruf === jawaban[i]) { kelas += " pilih-salah"; tanda = " ✘ (jawabanmu)"; }
      html += '<div class="' + kelas + '">' + huruf + '. ' + aman(isi) + tanda + '</div>';
    });

    if (benar) {
      html += '<div class="opsi-bahas" style="border:none;padding-left:0">Jawabanmu: <b>' + jawaban[i] + '</b></div>';
    }
    html += '<div class="kotak-bahas"><b>Pembahasan:</b> ' + aman(s.pembahasan) + '</div>';
    html += '</div>';
  });

  $("daftarPembahasan").innerHTML = html;
  tampilkanLayar("pembahasan");
});

$("tombolKembaliHasil").addEventListener("click", function () {
  tampilkanLayar("hasil");
});

// ---------- Kerjakan kembali ----------
function kerjakanKembali() {
  mulaiPengerjaan();
}
$("tombolKerjakanKembali").addEventListener("click", kerjakanKembali);
$("tombolKerjakanKembali2").addEventListener("click", kerjakanKembali);