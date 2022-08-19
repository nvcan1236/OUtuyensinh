window.addEventListener("load", function () {
  
    // slider
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    const dot = document.querySelectorAll(".slider-dot");
    var slideIndex = 0;
    const slideItemWidth = sliderItems[0].offsetWidth;
    const slideLength = sliderItems.length;
    var posX = 0;
    
    nextBtn.addEventListener("click", function () {
      changeSlide(1);
    });
    
    prevBtn.addEventListener("click", function () {
      changeSlide(-1);
    });
    autoNextSlide();
    
    function changeSlide(direction) {
      if (direction === 1) {
        if (slideIndex === slideLength - 1) {
          posX = 0;
          slideIndex = 0;
          sliderMain.style = `transform: translateX(${posX}px)`;
          return;
        }
        slideIndex++;
        posX = posX - slideItemWidth;
        sliderMain.style = `transform: translateX(${posX}px)`;
      } else if (direction === -1) {
        if (slideIndex === 0) {
          slideIndex = slideLength - 1;
          posX = -slideItemWidth * (slideLength - 1);
          sliderMain.style = `transform: translateX(${posX}px)`;
          return;
        }
        slideIndex--;
        posX = posX + slideItemWidth;
        sliderMain.style = `transform: translateX(${posX}px)`;
      }
    }
    
    function autoNextSlide() {
      setInterval(function () {
        changeSlide(1);
      }, 5000);
    }
    
    // nav - tool
    const navItems = document.querySelectorAll(".nav-tool-item");
    console.log(navItems);
  
    for(var i=0; i < navItems.length; i++) {
        navItems[i].onclick = function() {
            // navItems[i].classList.remove('current');
            // this.classList.add("current");
          console.log(navItems);
          alert("a");
        };
    }
    
    // to top btn
    var toTopBtn = document.querySelector(".to-top");
    var chatBtn = document.querySelector("button.chat-btn");
  
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.classList.add("show");
        chatBtn.style = "bottom: 84px;"
      }
      else {
        toTopBtn.classList.remove("show");
        chatBtn.style = "bottom: 24px;"
      }
    }
  
    function topFunction() {
      document.body.scrollTo(0, 0); // For Safari
      document.documentElement.scrollTo(0, 0); // For Chrome, Firefox, IE and Opera
    }
  
    toTopBtn.onclick = function() {
      topFunction();
    }
  
    // window.onscroll = function() {
    // }
  
    // header 
    var header = document.querySelector("header");
    var headerLogo = document.querySelector(".header__logo");
    function scrollFunction2() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("fixed");
        headerLogo.style = "display: none;"
      }
      else {
        header.classList.remove("fixed");
        headerLogo.style = "display: block;"
      }
    }
    window.onscroll = function() {
      scrollFunction();
      scrollFunction2();
    }

    wow = new WOW(
      {
         boxClass:     'wow',     
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true,      
      }
    )
    wow.init();
    // chat button

    
  });