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

    // validation form

    var formInput = document.querySelectorAll(".form-input"); 
    var formValue = [];
    var submitBtn = document.querySelector("button.submit");
    var formMessageList = document.querySelector(".form-message-list");
    var formMessage = document.querySelector(".form-message");
    var formMessageText = document.querySelector(".message-text");

    for(var i of formInput) {
      i.onchange = function() {
        for(var i=0; i<formInput.length; i++) {
          formValue[i] = formInput[i].value;
        }
      }
    }

    function checkForm(form) {
      var count= 0;
      for(var i=0; i<form.length; i++) {
        if(form[i] != "")
          count++;
      }
      return count;
    }
    submitBtn.onclick = function() {
      var count = checkForm(formValue);
      if(count>0 && count === formValue.length && count != undefined) {
        formMessage.classList.add("success","message-show")
        formMessageText.innerHTML = `<h3>Thành công</h3> Bạn đã đăng kí nhận tư vấn thành công.`;
        setTimeout(function() {
          formMessage.classList.remove("success", "message-show");
        }, 3000)
      }
      else {
        formMessage.classList.add("fail","message-show")
        formMessageText.innerHTML = `<h3>Thất bại! </h3> Bạn vui lòng điền đày đủ thông tin.`;
        setTimeout(function() {
          formMessage.classList.remove("fail", "message-show");
        }, 3000)
      }
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
      const sideInfor = document.querySelector(".side-infor");
      const swipeBtn = document.querySelector(".swipe-left-btn");
      const menuBtn = document.querySelector(".menu-icon");
      const menu = document.querySelector(".header__menu");
      if(document.body.clientWidth < 739 || document.documentElement.clientWidth < 739) {
        swipeBtn.onclick = function() {
          sideInfor.classList.toggle("fixed");
          // sideInfor.style = `transform: translateX(0)`;
    
          swipeBtn.classList.toggle("swipe-left-btn");
          swipeBtn.classList.toggle("swipe-right-btn");
        }
        menuBtn.onclick = function() {
          menu.classList.toggle("menu-show");
        }
      }

      // search autocomplete

    var searchInput = document.querySelector(".search__input");
    var searchBtn = document.querySelector(".search__icon");
    var suggestList = document.querySelector(".suggestions")
    var suggestItem = document.querySelectorAll(".suggest-item");
    const keywords = ["Khoa Công nghệ thông tin", "Khoa Ngoại ngữ", "Khoa Xây dựng", "Ngành Công nghệ thông tin", "Ngành Hệ thống thông tin", "Ngành Khoa học máy tính", ];
    searchInput.onkeyup = function(){
      var h="";
      let input = searchInput.value.toLowerCase();
      for(let k of keywords) {
      if(k.toLowerCase().indexOf(input)>=0) {
          h+=` <li class="suggest-item">${k}</li>`
      }
      if(h=="" || input =="") {
          suggestList.style = "display: none;"
      }
      else {
          suggestList.innerHTML = h;
          suggestList.style = "display: block;"
          $(".suggestions").on("click","li", function() {
            searchInput.value = this.innerText;
            suggestList.style = "display: none;"
            
            searchBtn.onclick = function() {
                searchInput.value = "";
            }
          })
          searchInput.onblur = function() {
            setTimeout(function() {
                suggestList.style = "display: none;"
            }, 300)
          }
      }
      }
    }
    
  });