let lastId,topMenu=$("#header"),topMenuHeight=topMenu.outerHeight()+15,menuItems=topMenu.find(".site-nav__link"),scrollItems=menuItems.map((function(){let e=$($(this).attr("href"));if(e.length)return e}));menuItems.click((function(e){let t=$(this).attr("href"),n="#"===t?0:$(t).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:n},300),e.preventDefault()})),$(window).scroll((function(){let e=$(this).scrollTop()+topMenuHeight,t=scrollItems.map((function(){if($(this).offset().top<e)return this}));t=t[t.length-1];let n=t&&t.length?t[0].id:"";lastId!==n&&(lastId=n,console.log(menuItems),menuItems.parent().removeClass("site-nav__item--active").end().filter("[href='#"+n+"']").parent().addClass("site-nav__item--active"))})),new Glide("#glide-exponents",{autoplay:8500}).mount(),new Glide("#glide-past",{autoplay:5e3}).mount();let countDownDate=new Date("Mar 24, 2020 10:00:00").getTime(),x=setInterval((function(){let e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4);Math.floor(t%6e4/1e3);document.getElementById("countdown").innerHTML="Faltan "+n+"d "+i+"h "+o+"m ",t<0&&(clearInterval(x),document.getElementById("countdown").innerHTML="LLEGÓ EL DÍA")}),1e3);function scaleVideoContainer(){var e=$(window).height()-275,t=parseInt(e)+"px";$(".homepage-hero-module").css("height",t)}function initBannerVideoSize(e){$(e).each((function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())})),scaleBannerVideoSize(e)}function scaleBannerVideoSize(e){var t,n,i=$(window).width(),o=$(window).height()+5;$(e).each((function(){var e=$(this).data("height")/$(this).data("width");$(this).width(i),i<900&&(t=(n=o)/e,$(this).css({"margin-top":0,"margin-left":-(t-i)/2+"px"}),$(this).width(t).height(n)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")}))}$(document).ready((function(){scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",(function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")}))})),$("a#modal-participants").click((function(e){return $(this).modal({blockerClass:"modal-blocker",modalClass:"modal modal-participants",fadeDuration:250,fadeDelay:.8,closeClass:"icon-remove"}),!1})),$("a#modal-press").click((function(e){return $(this).modal({blockerClass:"modal-blocker",modalClass:"modal modal-press",fadeDuration:250,fadeDelay:.8,closeClass:"icon-remove"}),!1})),$(".navigation__link").click((function(){$("#navi-toggle").prop("checked",!1)}));