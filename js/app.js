$(document).ready(function(){
    $('.single-item').slick({
        adaptiveHeight:true,
        autoplay:true,
        fade:true,
        mobileFirst:true,
        autoplaySpeed: 1000,
    });
  });

  //show button
const btn=document.querySelector("#btn-Categories");
btn.addEventListener("click",function(){
    const addcategories=document.querySelector(".categories-box");
    addcategories.classList.toggle("cat")
})
//postion top stiky
const sadd=document.querySelector(".home-top");
window.addEventListener("scroll",function(){
    sadd.classList.add("bg",window.scrollY>0)
})