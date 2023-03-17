let img_1 = document.querySelector(".img_1");
let img1 = document.querySelector(".img1");
let img_2 = document.querySelector(".img_2");
let img2 = document.querySelector(".img2");
let img_3 = document.querySelector(".img_3");
let img3 = document.querySelector(".img3");
let img_4 = document.querySelector(".img_4");
let img4 = document.querySelector(".img4");
let img_5 = document.querySelector(".img_5");
let img5= document.querySelector(".img5");



img1.addEventListener('mouseover', function() {
  img_1.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2018/10/Wine-01-03-450x450.jpg";
  
});
img1.addEventListener('mouseleave', function() {
    img_1.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2018/10/Wine-01-01-450x450.jpg";
    
});
  img2.addEventListener('mouseover', function() {
    img_2.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product5-450x450.jpg";
    
});
  img2.addEventListener('mouseleave', function() {
      img_2.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product17-450x450.jpg";
      
});
    img3.addEventListener('mouseover', function() {
        img_3.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product27-450x450.jpg";
        
});
    img3.addEventListener('mouseleave', function() {
        img_3.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product14-450x450.jpg";
          
});
img4.addEventListener('mouseover', function() {
  img_4.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product28-450x450.jpg";
  
});
img4.addEventListener('mouseleave', function() {
    img_4.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product12-450x450.jpg";
    
});
img5.addEventListener('mouseover', function() {
  img_5.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product26-450x450.jpg";
  
});
img5.addEventListener('mouseleave', function() {
    img_5.src = "https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2021/05/Product10-450x450.jpg";
    
});
function mySLICK() {
    $(".fakeslider").not('.slick-initialized').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots:true,
      });
}
mySLICK();

function mySLICK2() {
  $(".top_seller").not('.slick-initialized').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4
      
    });
}
mySLICK2();
let burger = document.querySelector(".burger");
var x = document.querySelector(".hamb-content");
burger.onclick = function() {
  if (x.style.display === "block") {
    x.style.display = "none"; 
  } else {
    x.style.display = "block";
  }
}