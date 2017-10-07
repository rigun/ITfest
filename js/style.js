$(document).scroll(function () {
 var ukuran2 = 150;
 if($(document).scrollTop() >= 100 && $(document).scrollTop() <= ukuran2-1)
 {
     $('#site-menu').hide();
 }
 if($(document).scrollTop()==ukuran2)
 {
     $('#site-menu').fadeIn(3000);
 }
 if ($(document).scrollTop() >= ukuran2 && $(window).width() > 750) {
     $('#site-menu').css('position', 'fixed');
     $('#site-menu').css('top', 0);
     $('#isi').css('position', 'relative');
          $('#isi').css('top', 0);
 } else if ($(document).scrollTop() >= ukuran2 && $(window).width() <= 750 ) {
     $('#site-menu').css('position', 'fixed');
     $('#site-menu').css('top', 0);
     $('#isi').css('position', 'relative');
     $('#isi').css('top', 75);
 }  else if ($(document).scrollTop() < ukuran2 && $(window).width() <= 750 ) {
     $('#site-menu').fadeIn(3000);
     $('#site-menu').css('position', 'static');
     $('#isi').css('top', 0);
 } else {
 $('#site-menu').fadeIn();
     $('#site-menu').css('position', 'static');
     $('#isi').css('top', 0);
 }
});

$(window).ready(function () {
 if($(window).width() <= 480){
 var ukuran  = $(window).width() / 60 ;
     $('.site-title img').css('width', ukuran * 10);
     $('.site-title h1').css('font-size', ukuran * 4);
     $('.site-title h1').css('bottom', ukuran / 8 * 10);
 }
})

$(document).ready(function(){
    $("#heroes .btnAll").mouseover(function(){
        $(".btnAll").css("background-color", "yellow");
    });
    $("#heroes .btnAll").mouseout(function(){
        $(".btnAll").css("background-color", "lightgray");
    });

});

$('a[href^="#"]').on('click', function (e) {
 e.preventDefault();
    var target = this.hash,
    $target = $(target);
       var scrollAmount = $target.offset().top;

 $("html, body").animate({ scrollTop: scrollAmount }, "slow");
});

$(document).scroll(function() {
 var ukuran4 = ($(document).scrollTop() / 10) * 5;
 if($(window).width() > 750){
     $('#opening').css('background-position-y', 100 - ukuran4);
     $('#bab3').css('background-position-y', 1800 - ukuran4);
 } else {
     $('#opening').css('background-position-y', 100 - ukuran4);
     $('#bab3').css('background-position-y', 1300 - ukuran4);
 }
})

angular.module('include_file', [])
  .controller('include_controller', ['$scope', function($scope) {
    $scope.templates =
      [{ name: 'page1.html', url: 'page1.html'},
       { name: 'page2.html', url: 'page2.html'}];
       $scope.pageone = $scope.templates[0];
       $scope.pagetwo = $scope.templates[1];
  }]);

/*page 1
    edit disini */

/*page 2
    edit disini */
