// =====================================================
// BANK SOAL - ECONOMY LEARNING
// Materi: Pelaku Ekonomi 2 Sektor dan 4 Sektor (20 soal)
//
// Format satu soal:
// {
//   soal: "Teks pertanyaan",
//   pilihan: ["Jawaban A", "Jawaban B", "Jawaban C", "Jawaban D", "Jawaban E"],
//   kunci: "C",                 <-- huruf kunci jawaban (HURUF BESAR)
//   pembahasan: "Penjelasan kenapa jawabannya benar."
// },
// Perhatikan: setiap soal diakhiri tanda koma (,)
// =====================================================

const DATA_SOAL = [
  {
    soal: "Berikut ini yang bukan merupakan peran Rumah Tangga Konsumen (RTK) adalah ....",
    pilihan: [
      "Menghasilkan barang dan jasa untuk dijual",
      "Mengonsumsi barang dan jasa",
      "Menentukan permintaan pasar",
      "Menerima pendapatan dari perusahaan",
      "Menyediakan faktor produksi"
    ],
    kunci: "A",
    pembahasan: "Menghasilkan barang dan jasa merupakan peran Rumah Tangga Produsen (RTP), bukan RTK. RTK berperan menyediakan faktor produksi, mengonsumsi barang dan jasa, menerima pendapatan, membayar produk, serta menentukan permintaan pasar."
  },
  {
    soal: "Dalam perekonomian 2 sektor, terdapat dua pelaku ekonomi utama, yaitu ....",
    pilihan: [
      "Pemerintah dan RTP",
      "RTK dan RTP",
      "RTK dan pemerintah",
      "RTP dan masyarakat luar negeri",
      "Pemerintah dan masyarakat luar negeri"
    ],
    kunci: "B",
    pembahasan: "Perekonomian 2 sektor hanya melibatkan Rumah Tangga Konsumen (RTK) dan Rumah Tangga Produsen (RTP). Dalam model ini belum terdapat keterlibatan pemerintah maupun masyarakat luar negeri."
  },
  {
    soal: "Kegiatan ekonomi merupakan segala aktivitas yang dilakukan manusia untuk ....",
    pilihan: [
      "Memperoleh kekuasaan dalam masyarakat",
      "Meningkatkan jumlah penduduk",
      "Menghindari interaksi sosial",
      "Mengurangi kegiatan produksi",
      "Memenuhi kebutuhan hidupnya"
    ],
    kunci: "E",
    pembahasan: "Kegiatan ekonomi adalah segala aktivitas yang dilakukan manusia untuk memenuhi kebutuhan hidup. Contohnya adalah memproduksi barang, menyalurkan barang, dan membeli barang untuk dikonsumsi."
  },
  {
    soal: "Berikut ini yang termasuk tiga jenis kegiatan ekonomi adalah ....",
    pilihan: [
      "Distribusi, investasi, dan konsumsi",
      "Produksi, investasi, dan tabungan",
      "Produksi, pajak, dan subsidi",
      "Konsumsi, ekspor, dan impor",
      "Produksi, distribusi, dan konsumsi"
    ],
    kunci: "E",
    pembahasan: "Tiga kegiatan ekonomi utama adalah: Produksi: kegiatan menghasilkan barang dan jasa. Distribusi: kegiatan menyalurkan barang dan jasa. Konsumsi: kegiatan menggunakan barang dan jasa untuk memenuhi kebutuhan. Ketiganya saling berkaitan dalam kegiatan ekonomi."
  },
  {
    soal: "Suatu perusahaan Indonesia menjual produk furnitur ke Jepang. Dalam perekonomian 4 sektor, kegiatan tersebut termasuk ....",
    pilihan: [
      "Ekspor",
      "Produksi",
      "Impor",
      "Konsumsi",
      "Distribusi dalam negeri"
    ],
    kunci: "A",
    pembahasan: "Ekspor merupakan kegiatan menjual atau mengirim barang dari dalam negeri ke luar negeri. Karena perusahaan Indonesia menjual furnitur ke Jepang, kegiatan tersebut termasuk ekspor."
  },
  {
    soal: "Balas jasa yang diterima tenaga kerja atas faktor produksi yang diberikan kepada perusahaan adalah ....",
    pilihan: [
      "Pajak",
      "Bunga",
      "Sewa",
      "Keuntungan",
      "Upah atau gaji"
    ],
    kunci: "E",
    pembahasan: "Tenaga kerja memperoleh balas jasa berupa upah atau gaji. Sementara itu, tanah memperoleh sewa, modal memperoleh bunga, dan keahlian atau kewirausahaan memperoleh keuntungan."
  },
  {
    soal: "Perhatikan pernyataan berikut! (1) RTK menyediakan faktor produksi kepada RTP. (2) RTP membayar upah kepada RTK. (3) RTK membeli barang dan jasa dari RTP. (4) RTP menerima pembayaran dari RTK. Urutan kegiatan yang menggambarkan hubungan RTK dan RTP dalam pasar barang dan jasa adalah ....",
    pilihan: [
      "1 dan 4",
      "3 dan 4",
      "1 dan 3",
      "2 dan 3",
      "1 dan 2"
    ],
    kunci: "B",
    pembahasan: "Dalam pasar barang dan jasa, RTP menghasilkan dan menjual barang kepada RTK. Selanjutnya, RTK membeli barang tersebut dan memberikan pembayaran kepada RTP. Pernyataan 1 dan 2 menggambarkan hubungan dalam pasar faktor produksi."
  },
  {
    soal: "Hubungan antara RTK dan RTP dalam pasar faktor produksi ditunjukkan oleh kegiatan ....",
    pilihan: [
      "RTP melakukan ekspor barang ke luar negeri.",
      "RTK menyediakan faktor produksi kepada RTP dan menerima balas jasa.",
      "RTP menyediakan tenaga kerja kepada RTK.",
      "RTK membeli barang dari RTP.",
      "Pemerintah memberikan subsidi kepada masyarakat luar negeri."
    ],
    kunci: "B",
    pembahasan: "Dalam pasar faktor produksi, RTK menyediakan tenaga kerja, tanah, modal, dan keahlian kepada RTP. Sebagai imbalannya, RTP memberikan balas jasa berupa upah, sewa, bunga, dan keuntungan."
  },
  {
    soal: "Studi kasus: Kegiatan Perdagangan Internasional Sebuah perusahaan Indonesia membeli mesin produksi dari Jerman untuk meningkatkan kualitas produknya. Mesin tersebut kemudian digunakan dalam proses produksi di Indonesia. Berdasarkan kasus tersebut, kegiatan ekonomi yang dilakukan perusahaan adalah ....",
    pilihan: [
      "Subsidi karena menerima bantuan pemerintah.",
      "Impor karena membeli barang dari luar negeri.",
      "Konsumsi rumah tangga karena membeli barang.",
      "Distribusi karena menjual barang kepada masyarakat.",
      "Ekspor karena menjual mesin ke luar negeri."
    ],
    kunci: "B",
    pembahasan: "Impor merupakan kegiatan membeli barang dari luar negeri. Perusahaan Indonesia membeli mesin dari Jerman sehingga kegiatan tersebut termasuk impor."
  },
  {
    soal: "Dalam kegiatan produksi, perusahaan membutuhkan tanah, tenaga kerja, modal, dan keahlian. Balas jasa yang diterima pemilik tanah adalah ....",
    pilihan: [
      "Upah",
      "Dividen",
      "Bunga",
      "Keuntungan",
      "Sewa"
    ],
    kunci: "E",
    pembahasan: "Tanah merupakan salah satu faktor produksi. Pemilik tanah akan memperoleh balas jasa berupa sewa ketika tanahnya digunakan oleh perusahaan untuk kegiatan produksi."
  },
  {
    soal: "Dalam Circular Flow Diagram, arus riil menggambarkan ....",
    pilihan: [
      "Perpindahan pendapatan dari perusahaan ke konsumen.",
      "Pembayaran pajak kepada pemerintah.",
      "Perpindahan faktor produksi serta barang dan jasa.",
      "Perpindahan uang dari konsumen ke perusahaan.",
      "Kegiatan investasi dari luar negeri."
    ],
    kunci: "C",
    pembahasan: "Arus riil merupakan perpindahan faktor produksi dari RTK kepada RTP serta barang dan jasa dari RTP kepada RTK. Disebut arus riil karena yang berpindah adalah faktor produksi dan hasil produksi, bukan uang."
  },
  {
    soal: "Pemerintah memberikan subsidi kepada perusahaan agar biaya produksi menjadi lebih ringan. Berdasarkan kegiatan tersebut, peran pemerintah dalam perekonomian adalah ....",
    pilihan: [
      "Sebagai penghasil seluruh barang dan jasa",
      "Sebagai pihak yang melakukan impor",
      "Sebagai pemilik seluruh faktor produksi",
      "Sebagai konsumen saja",
      "Sebagai pengatur dan pemberi bantuan dalam kegiatan ekonomi"
    ],
    kunci: "E",
    pembahasan: "Pemerintah berperan mengatur kegiatan ekonomi, menyediakan fasilitas umum, memungut pajak, dan memberikan subsidi. Subsidi bertujuan membantu meringankan beban biaya produksi perusahaan."
  },
  {
    soal: "Perbedaan utama antara perekonomian 2 sektor dan 4 sektor adalah ....",
    pilihan: [
      "Perekonomian 2 sektor melibatkan RTK dan RTP, sedangkan 4 sektor juga melibatkan pemerintah dan masyarakat luar negeri.",
      "Perekonomian 2 sektor tidak memiliki konsumen.",
      "Perekonomian 4 sektor hanya melibatkan perusahaan dan pemerintah.",
      "Perekonomian 4 sektor tidak memiliki kegiatan konsumsi.",
      "Perekonomian 2 sektor melibatkan kegiatan ekspor dan impor."
    ],
    kunci: "A",
    pembahasan: "Perekonomian 2 sektor melibatkan RTK dan RTP. Sementara itu, perekonomian 4 sektor melibatkan empat pelaku ekonomi, yaitu RTK, RTP, pemerintah, dan masyarakat luar negeri."
  },
  {
    soal: "Studi kasus: Perusahaan Roti Sebuah perusahaan roti mempekerjakan 15 orang karyawan untuk memproduksi roti. Perusahaan membeli tepung, gula, dan bahan baku lainnya. Setelah roti selesai diproduksi, perusahaan menjualnya kepada masyarakat. Berdasarkan kasus tersebut, pihak yang berperan sebagai RTP adalah ....",
    pilihan: [
      "Perusahaan roti",
      "Masyarakat yang mengonsumsi roti",
      "Karyawan perusahaan",
      "Pembeli roti",
      "Pemilik rumah karyawan"
    ],
    kunci: "A",
    pembahasan: "Perusahaan roti merupakan RTP karena melakukan kegiatan produksi dengan menghasilkan roti untuk dijual kepada masyarakat. Perusahaan juga menggunakan faktor produksi berupa tenaga kerja, bahan baku, dan peralatan."
  },
  {
    soal: "Pernyataan yang tepat mengenai arus nominal dalam Circular Flow Diagram adalah ....",
    pilihan: [
      "Perpindahan barang dari RTP kepada RTK.",
      "Perpindahan tenaga kerja dari RTK kepada RTP.",
      "Perpindahan barang dan jasa dari luar negeri ke dalam negeri.",
      "Perpindahan uang berupa pendapatan dari RTP kepada RTK dan pembayaran konsumsi dari RTK kepada RTP.",
      "Perpindahan tanah dari RTK kepada RTP."
    ],
    kunci: "D",
    pembahasan: "Arus nominal merupakan perpindahan uang dalam kegiatan ekonomi. Contohnya, RTP memberikan pendapatan kepada RTK sebagai balas jasa faktor produksi. Sebaliknya, RTK membayar barang dan jasa yang dibeli kepada RTP."
  },
  {
    soal: "Studi kasus: Hubungan Timbal Balik Sebuah perusahaan membutuhkan tenaga kerja untuk menjalankan produksinya. Perusahaan kemudian merekrut masyarakat sebagai karyawan dan memberikan gaji setiap bulan. Setelah menerima gaji, masyarakat menggunakan uang tersebut untuk membeli produk perusahaan. Kesimpulan paling tepat dari kasus tersebut adalah ....",
    pilihan: [
      "RTK dan RTP tidak memiliki hubungan ekonomi.",
      "Kegiatan ekonomi hanya dapat berjalan jika ada masyarakat luar negeri.",
      "RTK hanya berperan sebagai konsumen.",
      "RTK dan RTP memiliki hubungan saling membutuhkan melalui pasar faktor produksi dan pasar barang dan jasa.",
      "RTP hanya membutuhkan uang dari pemerintah."
    ],
    kunci: "D",
    pembahasan: "RTK menyediakan tenaga kerja kepada RTP dan menerima gaji. Selanjutnya, RTK menggunakan gaji tersebut untuk membeli barang yang dihasilkan RTP. Hal ini menunjukkan adanya hubungan timbal balik antara kedua pelaku ekonomi melalui pasar faktor produksi dan pasar barang dan jasa."
  },
  {
    soal: "Studi kasus: Pajak dan Fasilitas Umum Pemerintah memungut pajak dari masyarakat dan perusahaan. Dana yang terkumpul kemudian digunakan untuk membangun jalan raya, sekolah, dan fasilitas kesehatan. Hubungan pelaku ekonomi yang ditunjukkan dalam kasus tersebut adalah ....",
    pilihan: [
      "RTK dengan RTP saja",
      "RTK dengan masyarakat luar negeri",
      "RTP dengan distributor",
      "RTK dan pemerintah serta RTP dan pemerintah",
      "RTP dengan masyarakat luar negeri"
    ],
    kunci: "D",
    pembahasan: "RTK dan RTP memiliki hubungan dengan pemerintah melalui pembayaran pajak. Pemerintah kemudian menggunakan penerimaan tersebut untuk membiayai fasilitas umum dan pelayanan publik yang dapat dinikmati masyarakat."
  },
  {
    soal: "Studi kasus: Pendapatan Keluarga Pak Andi bekerja di sebuah perusahaan dan menerima gaji setiap bulan. Gaji tersebut digunakan untuk membeli kebutuhan sehari-hari, seperti makanan, pakaian, dan perlengkapan rumah tangga. Berdasarkan kasus tersebut, fungsi RTK yang ditunjukkan adalah ....",
    pilihan: [
      "Memberikan subsidi kepada perusahaan",
      "Melakukan kegiatan ekspor",
      "Memungut pajak dari perusahaan",
      "Mengonsumsi barang dan jasa serta menerima pendapatan",
      "Menghasilkan barang dan jasa"
    ],
    kunci: "D",
    pembahasan: "Pak Andi berperan sebagai RTK karena memperoleh pendapatan berupa gaji dari perusahaan dan menggunakan pendapatannya untuk membeli barang dan jasa guna memenuhi kebutuhan hidup."
  },
  {
    soal: "Seorang pengusaha menyewa tanah milik masyarakat untuk mendirikan pabrik. Sebagai imbalannya, pengusaha membayar sejumlah uang kepada pemilik tanah. Dalam kegiatan tersebut, uang yang diterima pemilik tanah disebut ....",
    pilihan: [
      "Sewa",
      "Upah",
      "Bunga",
      "Keuntungan",
      "Subsidi"
    ],
    kunci: "A",
    pembahasan: "Pemilik tanah memperoleh balas jasa berupa sewa ketika tanahnya digunakan oleh perusahaan. Hal tersebut termasuk hubungan RTK dan RTP dalam pasar faktor produksi."
  },
  {
    soal: "Pihak yang melakukan kegiatan konsumsi untuk memenuhi kebutuhan hidup disebut ....",
    pilihan: [
      "Rumah Tangga Produsen",
      "Distributor",
      "Pemerintah",
      "Rumah Tangga Konsumen",
      "Masyarakat luar negeri"
    ],
    kunci: "D",
    pembahasan: "Rumah Tangga Konsumen (RTK) merupakan individu atau kelompok masyarakat yang melakukan kegiatan konsumsi untuk memenuhi kebutuhan hidup. Selain sebagai konsumen, RTK juga berperan sebagai pemilik faktor produksi."
  }
];
