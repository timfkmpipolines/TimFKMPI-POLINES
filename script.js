const divisi = [
    { nama: "PSDA", tugas: "Mengelola sumber daya anggota dan kaderisasi." },
    { nama: "SOSMAS", tugas: "Mengadakan kegiatan sosial dan kemasyarakatan." },
    { nama: "P&K", tugas: "Mengembangkan potensi akademik dan keilmuan." },
    { nama: "KASTRAG", tugas: "Mengkaji isu strategis dan merumuskan advokasi." },
    { nama: "KOMINFO", tugas: "Menyebarkan informasi dan dokumentasi kegiatan." },
  ];
  
  const listDivisi = document.getElementById("daftar-divisi");
  
  divisi.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama}: ${item.tugas}`;
    listDivisi.appendChild(li);
  });
  