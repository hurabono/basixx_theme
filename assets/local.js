document.querySelectorAll("#localItem").forEach(item=>{
      item.addEventListener("click", event=>{
            document.getElementById("localeCode").value = item.getAttribute("lang");
            document.getElementById("localization_form_tag").submit();
      });
});

// console.log("hello?!");

// const header = document.querySelector(".nav-bar");

// window.onscroll = function(){
//       var top = window.scrollY;
//       if(top >= 100){
//             header.classList.add('first_color')
//       }else{
//             header.classList.remove('first_color')
//       }
// }

var mq = window.matchMedia( "(max-width: 570px)" );


function openNav() {
      if (mq.matches) {
            // window width is at less than 570px
            document.getElementById("mySidenav").style.width = "330px";
            document.getElementById("mySidenav").style.overflowY = "scroll";
            document.getElementById("main-toggle").style.marginRight = "99rem";
        }
        else {
            // window width is greater than 570px
            document.getElementById("mySidenav").style.width = "300px";
            document.getElementById("mySidenav").style.height = "600px";
            document.getElementById("mySidenav").style.overflowY = "scroll";
            document.getElementById("main-toggle").style.marginRight = "1rem";
        }
    }
    
    function closeNav() {
      
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main-toggle").style.marginRight = "0";
    }

