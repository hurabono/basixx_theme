<<<<<<< HEAD

=======
>>>>>>> 85654d2464565174a20afee8bee16bae4fdf30a0
// regular banner  - design mode
document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('swiper-slide');
  if (!blockSelectedIsSlide) return;
<<<<<<< HEAD
// regular banner swiper
var swiperAnimation = new SwiperAnimation();

=======


// regular banner swiper
let swiperAnimation = new SwiperAnimation();
>>>>>>> 85654d2464565174a20afee8bee16bae4fdf30a0
var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-slideshow-next",
    prevEl: ".swiper-slideshow-prev",
  },
 on: {
      init: function () {
        swiperAnimation.init(this).animate();
      },
      slideChange: function () {
        swiperAnimation.init(this).animate();
      }
    }
});

  
});


// regular banner swiper - design mode check block
document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('swiper-slide');
  if (!blockDeselectedIsSlide) return;

});


<<<<<<< HEAD
// regular banner swipervar
var swiperAnimation = new SwiperAnimation();
=======
// regular banner swiper
let swiperAnimation = new SwiperAnimation();
>>>>>>> 85654d2464565174a20afee8bee16bae4fdf30a0
var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-slideshow-next",
    prevEl: ".swiper-slideshow-prev",
  },
  on: {
      init: function () {
        swiperAnimation.init(this).animate();
      },
      slideChange: function () {
        swiperAnimation.init(this).animate();
      }
    }
});


// mobile slider

    
$('.collection_mySwiper').each(function (index, element) {
            
            $(this).addClass('collection_mySwiper' + index);

            new Swiper(".collection_mySwiper", {
              lazy: true,
              pagination: {
                el: ".collection_swiper-pagination-list",
                clickable: true,
              }
            });
        });


// product slider

let prouct_arr_next = $('.product-swiper-button-next');
let prouct_arr_prev = $('.product-swiper-button-prev');

$('.product_mySwiper').each(function (index, element) {
            
  $(this).addClass('product_mySwiper' + index);
  prouct_arr_next[index].classList.add('product-swiper-button-next' + index);
  prouct_arr_prev[index].classList.add('product-swiper-button-prev' + index);

  new Swiper(".product_mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    lazy: true,
    pagination: {
      el: ".product_swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
    navigation: {
      nextEl: ".product-swiper-button-next" + index,
      prevEl: ".product-swiper-button-prev" + index,
    }
  });
});




// collection swiper
const collectionSwiper = document.querySelectorAll('.swiper-container-collcetion');
const collectionPagination = document.querySelectorAll('.swiper-pagination-collection');

for( i=0; i< collectionSwiper.length; i++ ) {
  
  collectionSwiper[i].classList.add('swiper-container-collcetion-' + i);
  collectionPagination[i].classList.add('swiper-pagination-collection-' + i);

  var slider = new Swiper('.swiper-container-collcetion-' + i, {
   /* Options */
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination-collection-'+i,
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


// collection swiper - design mode
document.addEventListener('shopify:section:select', function(event) {

// collection swiper
const collectionSwiper = document.querySelectorAll('.swiper-container-collcetion');
const collectionPagination = document.querySelectorAll('.swiper-pagination-collection');

for( i=0; i< collectionSwiper.length; i++ ) {
  
  collectionSwiper[i].classList.add('swiper-container-collcetion-' + i);
  collectionPagination[i].classList.add('swiper-pagination-collection-' + i);

  var slider = new Swiper('.swiper-container-collcetion-' + i, {
   /* Options */
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination-collection-'+i,
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
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  });

}


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
let productPrev = document.querySelectorAll('.swiper-product-prev');
let productNext = document.querySelectorAll('.swiper-product-next');

for( i=0; i < myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);
  myPagination[i].classList.add('swiper-pagination_collection-' + i);
  productPrev[i].classList.add('swiper-product-prev-' + i);
  productNext[i].classList.add('swiper-product-next-' + i);

  var slider = new Swiper('.swiper-container-' + i, {
   /* Options */
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination_collection-'+i,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-product-next-'+i,
    prevEl: '.swiper-product-prev-'+i,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
  });

}
  
});


// collection swiper
const myCustomSlider = document.querySelectorAll('.swiper-container');
const myPagination = document.querySelectorAll('.swiper-pagination_collection');
const productPrev = document.querySelectorAll('.swiper-product-prev');
const productNext = document.querySelectorAll('.swiper-product-next');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);
  myPagination[i].classList.add('swiper-pagination_collection-' + i);
  productPrev[i].classList.add('swiper-product-prev-' + i);
  productNext[i].classList.add('swiper-product-next-' + i);

  var slider = new Swiper('.swiper-container-' + i, {
   /* Options */
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el:'.swiper-pagination_collection-'+i,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-product-next-'+i,
    prevEl: '.swiper-product-prev-'+i,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
  });

}


// column-slider swiper - design mode
document.addEventListener('shopify:section:select', function(event) {

  // column-slider swiper
const myColumnSlider = document.querySelectorAll('.column-slider');
const myColumnPagination = document.querySelectorAll('.column-slider-pagination');
const columnProductPrev = document.querySelectorAll('.swiper-column-prev');
const columnProductNext = document.querySelectorAll('.swiper-column-next');

for( i=0; i< myColumnSlider.length; i++ ) {
  
  myColumnSlider[i].classList.add('column-slider-' + i);
  myColumnPagination[i].classList.add('column-slider-pagination-' + i);
  columnProductPrev[i].classList.add('swiper-column-prev-' + i);
  columnProductNext[i].classList.add('swiper-column-next-' + i);

  var slider = new Swiper('.column-slider-' + i, {
   /* Options */
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el:'.column-slider-pagination-'+i,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-column-next-'+i,
    prevEl: '.swiper-column-prev-'+i,
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




// column-slider swiper
const myColumnSlider = document.querySelectorAll('.column-slider');
const myColumnPagination = document.querySelectorAll('.column-slider-pagination');
const columnProductPrev = document.querySelectorAll('.swiper-column-prev');
const columnProductNext = document.querySelectorAll('.swiper-column-next');

for( i=0; i< myColumnSlider.length; i++ ) {
  
  myColumnSlider[i].classList.add('column-slider-' + i);
  myColumnPagination[i].classList.add('column-slider-pagination-' + i);
  columnProductPrev[i].classList.add('swiper-column-prev-' + i);
  columnProductNext[i].classList.add('swiper-column-next-' + i);

  var slider = new Swiper('.column-slider-' + i, {
   /* Options */
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el:'.column-slider-pagination-'+i,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-column-next-'+i,
    prevEl: '.swiper-column-prev-'+i,
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
const product_swiper_container = document.querySelectorAll('.productSwiper2');
const productSwiper_ = document.querySelectorAll('.productSwiper');
const productPagination = document.querySelectorAll('.swiper-pagination_product');


for( i=0; i< product_swiper_container.length; i++ ) {
  product_swiper_container[i].classList.add('productSwiper2-' + i);
  productSwiper_[i].classList.add('productSwiper-' + i);
  productPagination[i].classList.add('swiper-pagination_product-' + i);

  var product_swiper2 = new Swiper(".productSwiper2-" + i, {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var product_swiper = new Swiper(".productSwiper-"+i, {
    spaceBetween: 5,
    direction:'horizontal',
   pagination:{
      el:'.swiper-pagination_product-'+i,
      clickable: true,
   },
   thumbs: {
    swiper: product_swiper2,
  },
  });

}






var recommendation = new Swiper(".recommendation_slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".recommend-swiper-pagination",
    clickable: true,
  },
});



//regular Featured Product swiper
let featruedSwiper = new Swiper(".featuredSwiper", {
  pagination: {
    el: ".swiper-featured-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".featured-swiper-button-next",
    prevEl: ".featured-swiper-button-prev",
  },
  
});


//Design mode Featured Product swiper
document.addEventListener('shopify:section:select', function(event) {
  let featruedSwiper = new Swiper(".featuredSwiper", {
    pagination: {
      el: ".swiper-featured-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".featured-swiper-button-next",
      prevEl: ".featured-swiper-button-prev",
    },
    
  });
});


//regular quote designmode
document.addEventListener('shopify:section:select', function(event) {

  //regular quote
let quoteSwiper = new Swiper(".quote_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-quote-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".quote-swiper-button-next",
    prevEl: ".quote-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
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



});


//regular quote
let quoteSwiper = new Swiper(".quote_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-quote-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".quote-swiper-button-next",
    prevEl: ".quote-swiper-button-prev",
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



//Photo quote
let photoQuote = new Swiper(".photoQuote_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-photoQuote-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".photoQuote-swiper-button-next",
    prevEl: ".photoQuote-swiper-button-prev",
  }
});


//Photo quote designmode
document.addEventListener('shopify:section:select', function(event) {

//Photo quote
let photoQuote = new Swiper(".photoQuote_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-photoQuote-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".photoQuote-swiper-button-next",
    prevEl: ".photoQuote-swiper-button-prev",
  }
});
  
});




// THIS IS FOR FEATURED SELETCTION VARIANTS
class featuredVariantSelector extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("change", this.onVariantChange);
  }

  onVariantChange() {
    this.getSelectedOptions();
    this.getSelectedVariant();

    if (this.currentVariant) {
      this.updateURL();
      this.updateFormID();
      this.updatePrice();
      this.updateStock();
    }
  }

  getSelectedOptions() {

    this.options = Array.from(this.querySelectorAll('input:checked'), (select) => select.value);
    console.log(this.options, "This options!");
  }

  getVariantJSON() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }

  getSelectedVariant() {
    this.currentVariant = this.getVariantJSON().find((variant) => {
      const findings = !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);

      if (findings) 
        return variant;
      


    });

    console.log(this.currentVariant);
  }

  updateURL() {
    if (!this.currentVariant) 
      return;
    


    window.history.replaceState({}, '', `${
      this.dataset.url
    }?variant=${
      this.currentVariant.id
    }`);
  }

  updateFormID() {
    const form_input = document.querySelector("#product-form").querySelector('input[name="id"]');
    form_input.value = this.currentVariant.id;
  }

  updatePrice() {
    fetch(`${
      this.dataset.url
    }?variant=${
      this.currentVariant.id
    }&section_id=${
      this.dataset.section
    }`).then((response) => response.text()).then((responseText) => {
      const id = `price-${
        this.dataset.section
      }`;
      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const oldPrice = document.getElementById(id);
      const newPrice = html.getElementById(id);

      if (oldPrice && newPrice) 
        oldPrice.innerHTML = newPrice.innerHTML;
      


    });
  }

  updateStock(){
            fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`)
            .then((response)=>response.text())
            .then((responseText)=>{
                  const id = `variantStock-${this.dataset.section}`;
                  const html = new DOMParser().parseFromString(responseText, 'text/html');
                  const oldStock = document.getElementById(id);
                  const newStock = html.getElementById(id);

                  if(oldStock && newStock) oldStock.innerHTML = newStock.innerHTML;
            });
    }
}

customElements.define("featured-variant-selector", featuredVariantSelector);

