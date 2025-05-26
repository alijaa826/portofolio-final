function ubahWarna() {
    const warnaLain = ['blue', 'green', 'orange', 'purple', 'black', 'red'];
    const stopSign = document.getElementById('stopSign');
  
    // Ambil warna saat ini
    const warnaSekarang = stopSign.style.backgroundColor;
  
    // Pilih warna baru yang berbeda dari warna saat ini
    let warnaBaru;
    do {
      warnaBaru = warnaLain[Math.floor(Math.random() * warnaLain.length)];
    } while (warnaBaru === warnaSekarang);
  
    // Terapkan warna baru
    stopSign.style.backgroundColor = warnaBaru;
  }
  