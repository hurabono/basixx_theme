// regular banner swiper - design mode
document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('swiper-slide');
  if (!blockSelectedIsSlide) return;
// regular banner swiper
var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  
});
// regular banner swiper - design mode check block
document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('swiper-slide');
  if (!blockDeselectedIsSlide) return;

});


// regular banner swiper
var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// mobile slider

let arr_next = $('.collection-swiper-button-next'); //your arrows class name
let arr_prev = $('.collection-swiper-button-prev'); //your arrows class name
    
$('.collection_mySwiper').each(function (index, element) {
            
            $(this).addClass('collection_mySwiper' + index);
            arr_next[index].classList.add('collection-swiper-button-next' + index);
            arr_prev[index].classList.add('collection-swiper-button-prev' + index);

            new Swiper(".collection_mySwiper", {
              lazy: true,
              pagination: {
                el: ".collection_swiper-pagination-list",
                clickable: true,
              },
              navigation: {
                nextEl: ".collection-swiper-button-next" + index,
                prevEl: ".collection-swiper-button-prev" + index,
              }
            });
        });

// column slider
let nextButton = $('.column_next_button')
let prevButton = $('.column_prev_button')

$('.column_mySwiper').each(function (index, element) {
            
  $(this).addClass('column_mySwiper' + index);
  nextButton[index].classList.add('column_next_button' + index);
  prevButton[index].classList.add('column_prev_button' + index);

  new Swiper(".column_mySwiper", {
    lazy: true,
    pagination: {
      el: ".column_mySwiper_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".column_next_button" + index,
      prevEl: ".column_prev_button" + index,
    }
  });
});

// collection swiper - design mode
document.addEventListener('shopify:section:select', function(event) {

// collection swiper
const myCustomSlider = document.querySelectorAll('.swiper-container');
const myPagination = document.querySelectorAll('.swiper-pagination_collection');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);
  myPagination[i].classList.add('swiper-pagination_collection-' + i);

  var slider = new Swiper('.swiper-container-' + i, {
   /* Options */
   slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination_collection-'+i,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  });

}


  
});


// collection swiper
const myCustomSlider = document.querySelectorAll('.swiper-container');
const myPagination = document.querySelectorAll('.swiper-pagination_collection');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);
  myPagination[i].classList.add('swiper-pagination_collection-' + i);

  var slider = new Swiper('.swiper-container-' + i, {
   /* Options */
   slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination_collection-'+i,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  });

}


// Featured product thumnail swiper - design mode
document.addEventListener('shopify:section:select', function(event) {
  var product_swiper2 = new Swiper(".productSwiper2", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var product_swiper = new Swiper(".productSwiper", {
    spaceBetween: 10,
    direction:'horizontal',
   pagination:{
      el:'.swiper-pagination_product',
      clickable: true,
   },
   thumbs: {
    swiper: product_swiper2,
  },
  });
  
      
});

// Featured product thumnail swiper

var product_swiper2 = new Swiper(".productSwiper2", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var product_swiper = new Swiper(".productSwiper", {
  spaceBetween: 5,
  direction:'horizontal',
 pagination:{
    el:'.swiper-pagination_product',
    clickable: true,
 },
 thumbs: {
  swiper: product_swiper2,
},
});

var recommendation = new Swiper(".recommendation_slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".recommend-swiper-pagination",
    clickable: true,
  },
});


  // recommendation_slide
  // const myRecommendSlider = document.querySelectorAll('.recommendation_slide');
  // const myRecommendPagination = document.querySelectorAll('.recommend-swiper-pagination');

  // for( i=0; i< myRecommendSlider.length; i++ ) {
    
  //   myRecommendSlider[i].classList.add('recommendation_slide-' + i);
  //   myRecommendPagination[i].classList.add('recommend-swiper-pagination-' + i);

  //   var slider2 = new Swiper('.recommendation_slide-' + i, {
  //    /* Options */
  //    slidesPerView: 3,
  //    spaceBetween: 30,
  //   pagination: {
  //     el:'.recommend-swiper-pagination-'+i,
  //     clickable: true,
  //   },
  //   });
  
  // }