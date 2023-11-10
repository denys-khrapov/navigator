// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


jQuery(document).ready(function ($) {
   initSwiper();
	initSubmenu();
	closeSubmenu();
	initSearch();

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
         spaceBetween: 0,
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
               spaceBetween: 0,
            },
         },
      });

		let swiperCases = new Swiper(".slider-cases", {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: false,
	      speed: 500,
			autoHeight: true,
			 navigation: {
				nextEl: ".cases-button-next",
				prevEl: ".cases-button-prev",
			 },
			 pagination: {
				el: ".cases-swiper-pagination",
				clickable: true
			},
         breakpoints: {
            1280: {
					// direction: "vertical",
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
						el: ".news-podcast-swiper-pagination",
						clickable: true
					}
				});
			} else {
				
		}
   }

	function initSubmenu() {
		$(".spollers__title").click(function () {
		if ($(window).width() >= 1280){
			if ($(".submenu").hasClass("show")) {
				$(".submenu").removeClass("show");
			}
			else {
				$(".submenu").addClass("show");
			}
		}else{}

			$(this).toggleClass("active");
		});
	}

	function closeSubmenu() {
		$(".submenu__close").click(function () {
				$(".submenu").removeClass("show");
				$(".spollers__title").removeClass("active");
		});
	}
	

	function initSearch() {

		$(".search-btn").click(function() {
			$(".bar").toggleClass("active");
			$(".header__menu").toggleClass("hide");
			$(".header__buttons").toggleClass("active");
			if ($(".bar").hasClass("active")) {
			  $(".bar input").removeAttr("disabled");
			  $(this).removeClass("_icon-MagnifyingGlass-1");
			  $(this).addClass("_icon-X");
			} else {
			  $(".bar input").attr("disabled", "disabled");
			  $(this).addClass("_icon-MagnifyingGlass-1");
			  $(this).removeClass("_icon-X");
			}
			if($(window).width() <=1279){
				$(".header__logo").toggleClass("hide");
			}
		 });

		$(".search-btn-mobile").click(function() {
		
		$(".bar-mobile").toggleClass("active");
		$(".menu__close").toggleClass("hide");
		$(".header__buttons").toggleClass("active");
			if ($(".bar-mobile").hasClass("active")) {
	  		$(".bar-mobile input").removeAttr("disabled");
			  $(this).removeClass("_icon-MagnifyingGlass-1");
			  $(this).addClass("_icon-X");
			} else {
	  	$(".bar-mobile input").attr("disabled", "disabled");
		  $(this).addClass("_icon-MagnifyingGlass-1");
		  $(this).removeClass("_icon-X");
		}
 	});
 
	}
	 

});

document.addEventListener('DOMContentLoaded', function() {

	document.querySelector('.clear-search-mobile').addEventListener('click', function() {
	  document.querySelector('.search-input-mobile').value = '';
	});
	document.querySelector('.clear-search').addEventListener('click', function() {
	  document.querySelector('.search-input').value = '';
	});
 });
 
 

document.addEventListener('DOMContentLoaded', function() {
	let players = document.querySelectorAll('.audioPlayer');
 
	function pauseAllOtherAudios(currentAudio) {
	  players.forEach(function(player) {
		 let audio = player.querySelector('.audioElement');
		 if (audio !== currentAudio) {
			audio.pause();
			audio.closest('.audioPlayer').querySelector('.playPauseButton').classList.add("_icon-Play");
			audio.closest('.audioPlayer').querySelector('.playPauseButton').classList.remove("_icon-Pause");
		 }
	  });
	}
 
	players.forEach(function(player) {
	  let durationDisplay = player.querySelector('.durationDisplay');
	  let audio = player.querySelector('.audioElement');
	  let playPauseButton = player.querySelector('.playPauseButton');
	 
	  if (durationDisplay && audio && playPauseButton) {
		 function formatTime(seconds) {
			let hours = Math.floor(seconds / 3600);
			let minutes = Math.floor((seconds % 3600) / 60);
			let secs = Math.floor(seconds % 60);
	  
			return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
		 }
	  
		 function updateDurationDisplay() {
			if (!audio.paused) {
			  durationDisplay.textContent = formatTime(audio.currentTime);
			} else {
			  durationDisplay.textContent = formatTime(audio.duration);
			}
		 }
	  
		 if (audio.readyState > 0) {
			updateDurationDisplay();
		 } else {
			audio.onloadedmetadata = updateDurationDisplay;
		 }
	  
		 audio.addEventListener('timeupdate', updateDurationDisplay);
	  
		 playPauseButton.onclick = function() {
			if (audio.paused) {
			  pauseAllOtherAudios(audio); // Пауза всех других аудио перед воспроизведением
			  audio.play().catch(e => console.error('Play failed:', e));
			  this.classList.remove("_icon-Play");
			  this.classList.add("_icon-Pause");
			} else {
			  audio.pause();
			  this.classList.add("_icon-Play");
			  this.classList.remove("_icon-Pause");
			}
		 };
	  }
	});




	// let messageBlock = document.querySelector('.message');
	// let messageBtnClose = document.querySelector('.close');


	// let isMessageClosed = sessionStorage.getItem('messageClosed');
	// if (!isMessageClosed) {
	//  messageBlock.classList.add('show');
	// }else{
	// }

	// messageBtnClose.addEventListener('click', function(e) {
	// 	e.preventDefault();
	// 	messageBlock.classList.remove('show');
	// 	sessionStorage.setItem('messageClosed', true);
	//  });





	let messageBlock = document.querySelector('.message');
	let messageBtnClose = document.querySelector('.close');
	let fixedHeader = document.querySelector('.fixed-header');
	let sidebar = document.querySelector('.sidebar');


	let isMessageClosed = sessionStorage.getItem('messageClosed');
	if (!isMessageClosed) {
	 messageBlock.classList.add('show');
	}else{
	}

	function updateSidebarTop() {
		let headerHeight = fixedHeader.offsetHeight; // Получаем высоту .fixed-header
		sidebar.style.top = headerHeight + "px"; // Применяем высоту к top .sidebar
  }
  updateSidebarTop();
  window.addEventListener('resize', updateSidebarTop); 

	messageBtnClose.addEventListener('click', function(e) {
		e.preventDefault();
		messageBlock.classList.remove('show');
		sessionStorage.setItem('messageClosed', true);
		updateSidebarTop();
	 });













	// let fixedHeader = document.querySelector('.fixed-header');
	// let messageBtnClose = document.querySelector('.close');
	// let sidebar = document.querySelector('.sidebar');

	// function updateSidebarTop() {
	// 	 let headerHeight = fixedHeader.offsetHeight; // Получаем высоту .fixed-header
	// 	 sidebar.style.top = headerHeight + "px"; // Применяем высоту к top .sidebar
	// }

	// updateSidebarTop(); // Вызываем функцию при загрузке страницы

	// window.addEventListener('resize', updateSidebarTop); // Обновляем top при изменении размеров окна

	// messageBtnClose.addEventListener('click', function(e) {
	// 	 e.preventDefault();
	// 	 sessionStorage.setItem('messageClosed', true);
	// 	 updateSidebarTop(); // Обновляем top при закрытии сообщения
	// });
	 
 });
 


// Меню бургер
const iconMenu = document.querySelector('.menu__button');
const menuBody = document.querySelector('.menu__body');
const closeMenuButton = document.querySelector('.menu__close');
const overlay = document.querySelector('.overlay');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

if (closeMenuButton) {
	closeMenuButton.addEventListener("click", function (e) {
	  menuBody.classList.remove('_active');
	  document.body.classList.remove('_lock'); 
	  iconMenu.classList.remove('_active'); 
	});
 }

if (overlay) {
	overlay.addEventListener("click", function (e) {
	  menuBody.classList.remove('_active');
	  document.body.classList.remove('_lock');
	  iconMenu.classList.remove('_active');
	});
 }




 let rating = document.getElementsByName('rating');
 rating.forEach((e)=>{
	  e.addEventListener('click',function(){
	  console.log(e.value);
	  })
 })