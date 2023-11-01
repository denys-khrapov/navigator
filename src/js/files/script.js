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

   }


});