$(document).ready(function(){
        $(".TextSliderOne").mousemove(function(event){
         $(".logo").css({'animation-duration': '4s', 'top': event.pageX/30}) ;
         $(".logo").css({'animation-duration': '4s', 'left': event.pageX/30});
        });
});
