$(document).ready(function(){
    function clear() {$(".name").removeClass('nameOn');};
    $(".rio").hover(function(){$(".rioName").addClass('nameOn');}, function(){clear()});
    $(".ari").hover(function(){$(".ariName").addClass('nameOn');}, function(){clear()});
    $(".vian").hover(function(){$(".vianName").addClass('nameOn');}, function(){clear()});
});

var slideIndex = 1;
  showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myLatLng = {lat: -7.779355,lng: 110.415776};
  var mapOptions = {
    center: new google.maps.LatLng(-7.779355, 110.415776,17), zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myLatLng,map: map,});
}
