// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


jQuery(document).ready(function ($) {
   initSwiper();
	initSubmenu();
	closeSubmenu();
	initSearch();
	initSocialWidget();


	 
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

		let swiperBenefits = new Swiper(".slider-benefits", {
         slidesPerView: 'auto',
         spaceBetween: 32,
         loop: false,
	      pagination: {
				el: ".benefits-swiper-pagination",
			 },
			 navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			 },

         breakpoints: {
            1280: {
               spaceBetween: 48,
					pagination: false,
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					 },
            }
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
		$(".header .spollers__title").click(function () {
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

	function initSocialWidget(){
		$('.social-widget__button').click(function(){
			$('.social-widget').toggleClass('active');
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
	 
   if ($('[data-fancybox=""]').length > 0) {
      $('[data-fancybox=""]').fancybox({
         autoFocus: false,
         touch: false,
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
	
	// let players = document.querySelectorAll('.audioPlayer');
 
	// function pauseAllOtherAudios(currentAudio) {
	//   players.forEach(function(player) {
	// 	 let audio = player.querySelector('.audioElement');
	// 	 if (audio !== currentAudio) {
	// 		audio.pause();
	// 		audio.closest('.audioPlayer').querySelector('.playPauseButton').classList.add("_icon-Play");
	// 		audio.closest('.audioPlayer').querySelector('.playPauseButton').classList.remove("_icon-Pause");
	// 	 }
	//   });
	// }
 
	// players.forEach(function(player) {
	//   let durationDisplay = player.querySelector('.durationDisplay');
	//   let audio = player.querySelector('.audioElement');
	//   let playPauseButton = player.querySelector('.playPauseButton');




	//   let progressBar = player.querySelector('.progress-bar');




	 
	//   if (durationDisplay && audio && playPauseButton) {
	// 	 function formatTime(seconds) {
	// 		let hours = Math.floor(seconds / 3600);
	// 		let minutes = Math.floor((seconds % 3600) / 60);
	// 		let secs = Math.floor(seconds % 60);
	  
	// 		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	// 	 }
	  
	// 	 function updateDurationDisplay() {
	// 		if (!audio.paused) {
	// 		  durationDisplay.textContent = formatTime(audio.currentTime);
	// 		} else {
	// 		  durationDisplay.textContent = formatTime(audio.duration);
	// 		}
	// 	 }
	  
	// 	 if (audio.readyState > 0) {
	// 		updateDurationDisplay();
	// 	 } else {
	// 		audio.onloadedmetadata = updateDurationDisplay;
	// 	 }
	  
	// 	 audio.addEventListener('timeupdate', updateDurationDisplay);
	  
	// 	 playPauseButton.onclick = function() {
	// 		if (audio.paused) {
	// 		  pauseAllOtherAudios(audio); // Пауза всех других аудио перед воспроизведением
	// 		  audio.play().catch(e => console.error('Play failed:', e));
	// 		  this.classList.remove("_icon-Play");
	// 		  this.classList.add("_icon-Pause");
	// 		} else {
	// 		  audio.pause();
	// 		  this.classList.add("_icon-Play");
	// 		  this.classList.remove("_icon-Pause");
	// 		}
	// 	 };
	//   }

	// //   audio.addEventListener('timeupdate', function() {
	// // 	let progress = (audio.currentTime / audio.duration) * 100;
	// // 	document.querySelector('.progress-bar').value = progress;
	// //  });

	// audio.addEventListener('timeupdate', function() {
	// 	let progress = (audio.currentTime / audio.duration) * 100;
	// 	progressBar.value = progress;
	//  });

	//  progressBar.addEventListener('click', function(e) {
	// 	// Рассчитываем новое время воспроизведения, исходя из места клика
	// 	let clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
	// 	let newTime = clickPosition * audio.duration;
  
	// 	// Устанавливаем новое время воспроизведения для аудио элемента
	// 	audio.currentTime = newTime;
	//  });





	//  document.querySelector('.mute-button').addEventListener('click', function() {
	// 	audio.muted = !audio.muted;
	// 	this.textContent = audio.muted ? 'Unmute' : 'Mute';
	//  });
	//  document.querySelector('.speed-button').addEventListener('click', function() {
	// 	let newPlaybackRate = audio.playbackRate == 1 ? 2 : 1;
	// 	audio.playbackRate = newPlaybackRate;
	// 	this.textContent = newPlaybackRate == 1 ? 'x2 Speed' : 'Normal Speed';
	//  });
	// });



	 
	 
	 
	// rating



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
		if(sidebar){
			let headerHeight = fixedHeader.offsetHeight;
			sidebar.style.top = headerHeight + "px";
		}
  }
  updateSidebarTop();
  window.addEventListener('resize', updateSidebarTop); 

	messageBtnClose.addEventListener('click', function(e) {
		e.preventDefault();
		messageBlock.classList.remove('show');
		sessionStorage.setItem('messageClosed', true);
		updateSidebarTop();
	 });

	  // Получаем все изображения в контейнере
var avatarsLinksImg = document.querySelectorAll('.avatars-links img');

// Устанавливаем z-index в обратном порядке их появления в DOM
for (var i = 0; i < avatarsLinksImg.length; i++) {
	avatarsLinksImg[i].style.zIndex = avatarsLinksImg.length - i;
}

 });
 


// Меню бургер
const iconMenu = document.querySelector('.menu__button');
const menuBody = document.querySelector('.menu__body');
const closeMenuButton = document.querySelector('.menu__close');
const overlay = document.querySelector('.overlay');
const contactBtnMobile = document.querySelector('.menu__footer-buttons .button--main');

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
if (contactBtnMobile) {
	contactBtnMobile.addEventListener("click", function (e) {
	  menuBody.classList.toggle('_active');
	  document.body.classList.toggle('_lock');
	  iconMenu.classList.toggle('_active');
	});
 }




 let rating = document.getElementsByName('rating');
 rating.forEach((e)=>{
	  e.addEventListener('click',function(){
	  })
 })







document.addEventListener('DOMContentLoaded', function() {


	const copyLinkButton = document.getElementById("copyLinkButton");

	if(copyLinkButton){
		copyLinkButton.addEventListener("click", (event) => {
			// Получение URL из data-атрибута
			const urlToCopy = event.currentTarget.getAttribute('data-href');
			
			// Создание временного input для копирования
			const sysInput = document.createElement('input');
			sysInput.value = urlToCopy;
			document.body.appendChild(sysInput);
			sysInput.select();
			document.execCommand("copy");
			document.body.removeChild(sysInput);
	  });
	  
	}









// Функция для проверки, находится ли элемент в середине экрана
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
	  rect.top < window.innerHeight * 0.20 &&
	  rect.bottom > window.innerHeight * 0.20
	);
}
 
 // Функция для обновления класса active
 function setActiveLink() {
	// Находим все заголовки в правой колонке
	const titles = document.querySelectorAll('.sidebar-content__right-col .sidebar-content__title');
	// Находим все ссылки в сайдбаре
	const links = document.querySelectorAll('.sidebar__links .sidebar__link');
 
	titles.forEach((title, index) => {
	  if (isElementInViewport(title)) {
		 // Удаляем класс active со всех ссылок
		 links.forEach(link => link.classList.remove('_active'));
		 // Добавляем класс active к соответствующей ссылке
		 links[index].classList.add('_active');
	  }
	});
 }
 
 // Добавляем обработчик события прокрутки
 window.addEventListener('scroll', setActiveLink);
 










// Функция для получения высоты шапки
function getHeaderHeight() {
	const header = document.querySelector('.fixed-header');
	return header ? header.offsetHeight : 0; // Возвращаем 0, если шапка не найдена
}

// Функция для плавного скроллинга с учетом высоты шапки
function scrollToAnchor(id) {
	// Проверяем, что ID существует и не равен просто '#'
	if (!id || id === '#') return; // Если ID не передан или недействителен, выходим из функции

	const headerHeight = getHeaderHeight(); // Получаем высоту шапки
	const anchor = document.querySelector(id);
	
	if (anchor) {
		 const anchorPosition = anchor.getBoundingClientRect().top + window.pageYOffset;
		 const offsetPosition = anchorPosition - headerHeight;
		 
		 window.scrollTo({
			  top: offsetPosition,
			  behavior: 'smooth'
		 });
	}
}

// Переопределение стандартного поведения при клике на ссылки якоря
document.querySelectorAll('.sidebar__link').forEach(link => {
	link.addEventListener('click', function(e) {
		 e.preventDefault();
		 const href = this.getAttribute('href');
		 // Проверяем, что href не пуст, начинается с # и содержит символы после #
		 if (href && href.startsWith('#') && href.length > 1) {
			  scrollToAnchor(href);
		 }
	});
});
































  
	let players = document.querySelectorAll('.audioPlayer');
	
	function pauseAllOtherAudios(currentAudio) {
	  players.forEach(function(player) {
		 let audio = player.querySelector('.audioElement');
		 if (audio !== currentAudio) {
			audio.pause();
			let playPauseButton = audio.closest('.audioPlayer').querySelector('.playPauseButton');
			if (playPauseButton) {
			  playPauseButton.classList.add("_icon-Play");
			  playPauseButton.classList.remove("_icon-Pause");
			}
		 }
	  });
	}
	
	players.forEach(function(player) {
	  let durationDisplay = player.querySelector('.durationDisplay');
	  let audio = player.querySelector('.audioElement');
	  let playPauseButton = player.querySelector('.playPauseButton');
	  let progressBar = player.querySelector('.progress-bar');
	  let muteButton = player.querySelector('.mute-button');
	  let speedButton = player.querySelector('.speed-button');
	  
	  if (audio) {
		 function formatTime(seconds) {
			let hours = Math.floor(seconds / 3600);
			let minutes = Math.floor((seconds % 3600) / 60);
			let secs = Math.floor(seconds % 60);
	  
			return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
		 }
	  
		 function updateDurationDisplay() {
			if (!audio.paused) {
			  if (durationDisplay) {
				 durationDisplay.textContent = formatTime(audio.currentTime);
			  }
			} else {
			  if (durationDisplay) {
				 durationDisplay.textContent = formatTime(audio.duration);
			  }
			}
		 }
	  
		 if (audio.readyState > 0) {
			updateDurationDisplay();
		 } else {
			audio.onloadedmetadata = updateDurationDisplay;
		 }
	  
		 audio.addEventListener('timeupdate', updateDurationDisplay);
	  
		 if (playPauseButton) {
			playPauseButton.onclick = function() {
			  if (audio.paused) {
				 pauseAllOtherAudios(audio);
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
	  
		 if (progressBar) {
			audio.addEventListener('timeupdate', function() {
			  let progress = (audio.currentTime / audio.duration) * 100;
			  progressBar.value = progress;
			});
			
			progressBar.addEventListener('click', function(e) {
			  let rect = this.getBoundingClientRect();
			  let clickPosition = (e.pageX - window.scrollX - rect.left) / rect.width;
			  audio.currentTime = clickPosition * audio.duration;
			});
		 }
	  
		 if (muteButton) {
			muteButton.addEventListener('click', function() {
			  audio.muted = !audio.muted;
			  this.textContent = audio.muted ? 'Unmute' : 'Mute';
			});
		 }
	  
		 if (speedButton) {
			speedButton.addEventListener('click', function() {
			  let newPlaybackRate = audio.playbackRate == 1 ? 2 : 1;
			  audio.playbackRate = newPlaybackRate;
			  this.textContent = newPlaybackRate == 1 ? 'x2 Speed' : 'Normal Speed';
			});
		 }
	  } else {
		 console.error('Audio element is not found in the player:', player);
	  }
	});
 });
 