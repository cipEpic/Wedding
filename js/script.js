$(document).ready(function () {
  $(".example1").arctext({ radius: 200 });
});
// Ambil elemen-elemen yang dibutuhkan
var popup = document.getElementById("myPopup");
popupAudio.loop = true; // Mengaktifkan looping
var closeBtn = document.getElementsByClassName("close")[0];
var isAudioPlaying = true;
var logo = document.getElementById("logo");

// Fungsi untuk menampilkan popup
function showPopup() {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
  var popupAudio = document.getElementById("popupAudio");
  popupAudio.loop = true; // Mengaktifkan looping
  // setTimeout(function () {
  //   popup.style.transform = "translateY(0)";
  //   popup.style.opacity = 1;
  // }); // Tambahkan penundaan agar animasi berfungsi dengan baik
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
  var popupAudio = document.getElementById("popupAudio");
  popupAudio.play(); // Menghentikan audio
  popup.style.transform = "translateY(-100%)";
  document.body.style.overflow = "auto";
  popup.style.opacity = 0;
  setTimeout(function () {
    popup.style.display = "none";
    popup.style.opacity = 1;
    popup.style.transform = "translateY(0)"; // Reset transformasi saat popup disembunyikan
  }, 5000); // Waktu yang sesuai dengan durasi transisi
}
// Fungsi untuk toggle audio (mute/unmute)
function toggleAudio() {
  var popupAudio = document.getElementById("popupAudio");
  if (popupAudio.paused) {
    popupAudio.play();
    audioIcon.classList.remove("fa-play-circle");
    audioIcon.classList.add("fa-stop-circle");
  } else {
    popupAudio.pause();
    audioIcon.classList.remove("fa-stop-circle");
    audioIcon.classList.add("fa-play-circle");
  }
}

// Tambahkan event listener pada tombol tutup dan tombol audio control
closeBtn.addEventListener("click", hidePopup);
audioControl.addEventListener("click", toggleAudio);
// // Tampilkan popup setelah halaman dimuat
// window.onload = showPopup;

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen slide dan atur slide pertama sebagai aktif
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  slides[currentSlide].classList.add("active");

  // Fungsi untuk pindah ke slide berikutnya
  function nextSlide() {
    // Sembunyikan slide saat ini
    slides[currentSlide].classList.remove("active");

    // Pindah ke slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;

    // Tampilkan slide berikutnya
    slides[currentSlide].classList.add("active");
  }

  // Atur interval perpindahan slide
  setInterval(nextSlide, 5000);
});

// fitur Hitung Mundur
// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Nov 28, 2024 11:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Waktu telah habis!";
    return;
  }

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function showCardsSequentially() {
  cards.forEach((card, index) => {
    card.style.animation = `cardFadeIn 0.2s ease ${index * 0.2 + 0.2}s forwards`;
  });
}

function resetCardStyles() {
  cards.forEach((card) => {
    card.style.animation = "";
  });
}

function noUtsman() {
  var teks = document.getElementById("textSalin").textContent;
  var teksTanpaTanda = teks.replace(/-/g, "");

  var textarea = document.createElement("textarea");
  textarea.value = teksTanpaTanda;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  toastr["success"]("No Dana Berhasil Disalin", "Success");
}
function noYani() {
  var teks = document.getElementById("textSalin2").textContent;
  var teksTanpaTanda = teks.replace(/-/g, "");

  var textarea = document.createElement("textarea");
  textarea.value = teksTanpaTanda;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  toastr["success"]("No Dana Berhasil Disalin", "Success");
}
