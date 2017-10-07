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
        $(".btnAll").css("background-color", "#0A6EDD");
        $(".btnAll").css("color", "white");
        $(".btnAll").css("transition-duration", "0.4s");

    });
    $("#heroes .btnAll").mouseout(function(){
        $(".btnAll").css("background-color", "#0B0F10");
    });
    $("#heroes .btnStrength").mouseover(function(){
        $(".btnStrength").css("background-color", "#0A6EDD");
        $(".btnStrength").css("color", "white");
        $(".btnStrength").css("transition-duration", "0.4s");
    });
    $("#heroes .btnStrength").mouseout(function(){
        $(".btnStrength").css("background-color", "#0B0F10");
    });
    $("#heroes .btnAgility").mouseover(function(){
        $(".btnAgility").css("background-color", "#0A6EDD");
        $(".btnAgility").css("color", "white");
        $(".btnAgility").css("transition-duration", "0.4s");
    });
    $("#heroes .btnAgility").mouseout(function(){
        $(".btnAgility").css("background-color", "#0B0F10");
    });
    $("#heroes .btnIntelligence").mouseover(function(){
        $(".btnIntelligence").css("background-color", "#0A6EDD");
        $(".btnIntelligence").css("color", "white");
        $(".btnIntelligence").css("transition-duration", "0.4s");
    });
    $("#heroes .btnIntelligence").mouseout(function(){
        $(".btnIntelligence").css("background-color", "#0B0F10");
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

var app = angular.module('appitfest', ['ngAnimate']);

  app.controller('include_controller', ['$scope', function($scope) {
    $scope.templates =
      [{ name: 'page1.html', url: 'page1.html'},
       { name: 'page2.html', url: 'page2.html'}];
       $scope.pageone = $scope.templates[0];
       $scope.pagetwo = $scope.templates[1];
  }]);

    app.controller('heroes_controller', ['$scope', function($scope) {
      $scope.Myimages =
        [{ name: 'pugde.jpg', src: 'images/heroes/pudge.jpg', attr: 'Strength', skill: 'Meat Hook, Rot, Flesh Heap, Dismember'},
         { name: 'phantom_assassin.jpg', src: 'images/heroes/phantom_assassin.jpg', attr: 'Agility', skill: 'Stifling Dagger, Phantom Strike, Blur, Coup de Grace'},
         { name: 'sniper.jpg', src: 'images/heroes/sniper.jpg', attr: 'Agility', skill: 'Shrapnel, Headshot, Take Aim, Assassinate'},
         { name: 'invoker.jpg', src: 'images/heroes/invoker.jpg', attr: 'Intelligence', skill: 'Quas, Wex, Exort'},
         { name: 'juggernaut.jpg', src: 'images/heroes/juggernaut.jpg', attr: 'Agility', skill: 'Blade Fury, Healing Ward, Blade Dance, Omnislash'},
          { name: 'slark.jpg', src: 'images/heroes/slark.jpg', attr: 'Agility', skill: 'Dark Pact, Pounce, Essense Shift, Shadow Dance'},
          { name: 'axe.jpg', src: 'images/heroes/axe.jpg', attr: 'Strength', skill: 'Berseker\'s Call, Battle Hunger, Counter Helix, Culling Blade'},
          { name: 'riki.jpg', src: 'images/heroes/riki.jpg', attr: 'Agility', skill: 'Smoke Screen, Blink Strike, Cloak and Dagger, Tricks of the Trade'},
          { name: 'legion_commander.jpg', src: 'images/heroes/legion_commander.jpg', attr: 'Strength', skill: 'Overwhelming Odds, Press The Attack, Moment of Courage, Duel'},
           { name: 'windrunner.jpg', src: 'images/heroes/windrunner.jpg', attr: 'Intelligence', skill: 'Shackleshot, Powershot, Windrun, Focus Fire'},
           { name: 'mirana.jpg', src: 'images/heroes/mirana.jpg', attr: 'Agility', skill: 'Starstrom, Sacred Arrow, Leap, Moonlight Shadow'},
           { name: 'bloodseeker.jpg', src: 'images/heroes/bloodseeker.jpg', attr: 'Agility', skill: 'Bloodrage, Blood Rite, Thirst, Rupture'}];
        $scope.image = $scope.Myimages;
        $scope.myfilterBy="";
        $scope.filterBy = function(x) {

        $scope.myfilterBy = x;
    }
    }]);

/*page 1
    edit disini */

/*page 2
    edit disini */
