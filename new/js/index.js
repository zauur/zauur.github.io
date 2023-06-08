var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 80,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 
 
 
 

  // const counters = document.querySelectorAll(".count");
  // const speed = 300;
  
  // counters.forEach((counter) => {
  // const updateCount = () => {
  //   const target = parseInt(+counter.getAttribute("data-target"));
  //   const count = parseInt(+counter.innerText);
  //   const increment = Math.trunc(target / speed);
  //   console.log(increment);
  
  //   if (count < target) {
  //     counter.innerText = count + increment;
  //     setTimeout(updateCount, 1);
  //   } else {
  //     count.innerText = target;
  //   }
  // };
  // updateCount();
  // });
 
//   const bars = document.getElementById('bars');
//   const mobileMenu = document.getElementById('mobileMenu');
//   bars.addEventListener('click', function() {
//     mobileMenu.classList.toggle('active')
//   })


//   const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };
  
// const validate = (selector) => {
//   const result = document.querySelector('#result');
//   const email = document.querySelector('#' + selector).value;
//   result.textContent = "";

//   if (validateEmail(email)) {
//       result.textContent = email + ' is valid :)'
//       result.style.color = 'green';
//   } else {
//       result.textContent = email + ' is not valid :('
//       result.style.color = '#E77C40';
//   }
//   return false;
// }