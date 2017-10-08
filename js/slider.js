var myIndex =0;
carousel();

function changeSlid(n){
    var i,t;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[n].style.display = "block";
    myIndex = n;

}
function carousel() {
    var i,t;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex+=1;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    t = setTimeout(carousel, 7000);
     // Change image every 2 seconds
}
