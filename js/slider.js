var myIndex =0;
var x = document.getElementsByClassName("mySlider");
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
}
var tamp=0;
var temp=".activeOne";
var temp2=".TextSliderOne";
carousel();

function changeSlid(n){
    var i,t;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[n].style.animationPlayState="initial";
    x[n].style.display = "block";
    myIndex = n;
    if(myIndex == 0){
        $(temp).css("background-color","gray");
        $('.activeOne').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeOne";
        $(temp2).css("display","none");
        $('.TextSliderOne').css("display","block");
        temp2=".TextSliderOne";
    }else if(myIndex == 1){
        $(temp).css("background-color","gray");
        $('.activeTwo').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeTwo";
        $(temp2).css("display","none");
        $('.TextSliderTwo').css("display","block");
        temp2=".TextSliderTwo";
    }else if(myIndex == 2){
        $(temp).css("background-color","gray");
        $('.activeThree').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeThree";
        $(temp2).css("display","none");
        $('.TextSliderOne').css("display","block");
        temp2=".TextSliderOne";
    }else if(myIndex == 3){
        $(temp).css("background-color","gray");
        $('.activeFour').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeFour";
        $(temp2).css("display","none");
        $('.TextSliderTwo').css("display","block");
        temp2=".TextSliderTwo";
    }
}
function carousel() {
    var i,t;

    myIndex+=1;
    if (myIndex > x.length) {
        myIndex = 1
        for (i = 0; i < x.length; i++) {
           x[i].style.animationPlayState="initial";
           x[i].style.display = "none";
        }}

        if(myIndex == 1){
            $(temp).css("background-color","gray");
            $('.activeOne').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
            temp=".activeOne";
            $(temp2).css("display","none");
            $('.TextSliderOne').css("display","block");
            temp2=".TextSliderOne";
        }else if(myIndex == 2){
            $(temp).css("background-color","gray");
            $('.activeTwo').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
            temp=".activeTwo";
            $(temp2).css("display","none");
            $('.TextSliderTwo').css("display","block");
            temp2=".TextSliderTwo";
        }else if(myIndex == 3){
            $(temp).css("background-color","gray");
            $('.activeThree').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
            temp=".activeThree";
            $(temp2).css("display","none");
            $('.TextSliderOne').css("display","block");
            temp2=".TextSliderOne";
        }else if(myIndex == 4){
            $(temp).css("background-color","gray");
            $('.activeFour').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
            temp=".activeFour";
            $(temp2).css("display","none");
            $('.TextSliderTwo').css("display","block");
            temp2=".TextSliderTwo";
        }

    x[myIndex-1].style.display = "block";

    t = setTimeout(carousel, 7000);
     // Change image every 2 seconds
}
$(document).ready(function(){
    $("#Home").mouseenter(function(){
        $("#Home .sliderrow").fadeIn(1000);
    });
    $("#Home").mouseleave(function(){
        $("#Home .sliderrow").stop(true,false);
       $("#Home .sliderrow").fadeOut();
    });
});
$(document).scroll(function() {
 var ukuran4 = ($(document).scrollTop() / 100) * 5;
 if($(window).width() > 750){
     $('#Home img').css('top', ukuran4 +65);
 } else {
     $('#Home img').css('top', ukuran4+65);
 }
})
