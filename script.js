// Memanggil fungsi saat DOM telah dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Mengambil semua tautan navbar
  const navLinks = document.querySelectorAll("nav ul li a");

  // Iterasi setiap tautan navbar
  navLinks.forEach(function (navLink) {
    // Menambahkan event listener untuk setiap tautan navbar
    navLink.addEventListener("click", function (event) {
      // Mencegah perilaku default dari tautan
      event.preventDefault();

      // Mendapatkan ID tujuan dari atribut href
      const targetId = navLink.getAttribute("href").substring(1);

      // Mendapatkan elemen dengan ID tujuan
      const targetSection = document.getElementById(targetId);

      // Menentukan posisi elemen tujuan di halaman
      const offsetTop = targetSection.offsetTop;

      // Menggulir halaman ke posisi elemen tujuan
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Animasi guliran halus
      });
    });
  });
});