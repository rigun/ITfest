var myIndex =0;
carousel();
var temp=".activeOne";
function changeSlid(n){
    var i,t;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[n].style.display = "block";
    myIndex = n;
    if(myIndex == 0){
        $(temp).css("background-color","gray");
        $('.activeOne').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeOne";
    }else if(myIndex == 1){
        $(temp).css("background-color","gray");
        $('.activeTwo').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeTwo";
    }else if(myIndex == 2){
        $(temp).css("background-color","gray");
        $('.activeThree').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeThree";
    }else if(myIndex == 3){
        $(temp).css("background-color","gray");
        $('.activeFour').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeFour";
    }
}
function carousel() {
    var i,t;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex+=1;
    if (myIndex > x.length) {myIndex = 1}
    if(myIndex == 1){
        $(temp).css("background-color","gray");
        $('.activeOne').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeOne";
    }else if(myIndex == 2){
        $(temp).css("background-color","gray");
        $('.activeTwo').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeTwo";
    }else if(myIndex == 3){
        $(temp).css("background-color","gray");
        $('.activeThree').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeThree";
    }else if(myIndex == 4){
        $(temp).css("background-color","gray");
        $('.activeFour').css({"background-color" : "rgb(11, 15, 16)", "transition-duration": "0.4s"});
        temp=".activeFour";
    }
    x[myIndex-1].style.display = "block";
    t = setTimeout(carousel, 7000);
     // Change image every 2 seconds
}
