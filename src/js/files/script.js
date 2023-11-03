// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


jQuery(document).ready(function ($) {
   initSwiper();

	function initSwiper() {
      let swiperClients = new Swiper(".slider-clients", {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: true,
			speed: 4000,
			autoplay: {
				delay: 300,
				disableOnInteraction: false,
			 },
			freeMode: true,
			breakpoints: {
            1280: {
               spaceBetween: 24,
            },
         },
      });

		let swiperTeam = new Swiper(".slider-team", {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			 },
			 navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			 },
         breakpoints: {
            1280: {
               spaceBetween: 48,
            },
         },
      });

		if ($(window).width() <= 1279) {
				let swiperNewsPodcast = new Swiper(".slider-news-podcast", {
					slidesPerView: 'auto',
					spaceBetween: 16,
					loop: false,
					navigation: {
						nextEl: ".news-podcast-button-next",
						prevEl: ".news-podcast-button-prev",
					},
					pagination: {
						el: ".swiper-pagination",
					}
				});
			} else {
				
		}
   }



});

document.addEventListener('DOMContentLoaded', function() {
	let durationDisplay = document.getElementById('durationDisplay');
	let audio = document.getElementById('audioElement');
	let playPauseButton = document.getElementById('playPauseButton');
	let Button = document.getElementsByClassName('playPauseButton');

	function updateDurationDisplay() {
		 let duration = audio.duration;
		 let hours = Math.floor(duration / 3600);
		 let minutes = Math.floor((duration % 3600) / 60);

		 let formattedDuration = "";
		 if (hours > 0) {
			  formattedDuration += hours + "hr ";
		 }
		 formattedDuration += minutes + "mins";

		 durationDisplay.textContent = formattedDuration;
	}

	if (audio.readyState > 0) {
		 // Метаданные уже загружены
		 updateDurationDisplay();
	} else {
		 // Метаданные еще не загружены, установите обработчик события
		 audio.onloadedmetadata = updateDurationDisplay;
	}

	playPauseButton.onclick = function() {
		 if (audio.paused) {
			  audio.play().catch(e => console.error('Play failed:', e));
			//   this.textContent = '⏸️';
			  this.classList.remove("_icon-Play");
			  this.classList.add("_icon-Plus");

		 } else {
			  audio.pause();
			//   this.textContent = '▶️';
			  this.classList.add("_icon-Play");
			  this.classList.remove("_icon-Plus");
		 }
	};
});
