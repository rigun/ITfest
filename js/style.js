$(document).ready(function(){
    $("div.move ").mouseenter(function(event){
        var i=0;
        if(event.pageX == 0)
        {
            $("div.move ").mousemove(function(event){
                     $("div.move img").css('right', event.pageX/20) ;
                     $("div.move img").css('bottom', event.pageY /20);
             });
        }else if(event.pageY == 0)
        {
            $("div.move ").mousemove(function(event){
                     $("div.move img").css('right', event.pageX/20) ;
                     $("div.move img").css('bottom', event.pageY /20);
             });
        }else if(event.pageX > 100 && event.pageY<100)
        {
            $("div.move ").mousemove(function(event){
                     $("div.move img").css('right', event.pageX/20) ;
                     $("div.move img").css('bottom', event.pageY /20);

             });
        }else
        {
            $("div.move ").mousemove(function(event){
                     $("div.move img").delay("slow").css('left', event.pageX/20) ;
                     $("div.move img").delay("slow").css('top', event.pageY /20);

             });
        }
    });

   $("div.move ").mouseleave(function(){
       $("div.move img").animate({right: "0px", bottom: "0px", top: "0px", left: "0px"});
    });

});
