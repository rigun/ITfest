$(document).scroll(function () {
 var ukuran2 = 150;

 if($(document).scrollTop() > ukuran2)
 {
    $('#fixedSite-Menu').fadeIn(1000);
}else if($(document).scrollTop() < ukuran2){
    $('#fixedSite-Menu').fadeOut();}

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
       var scrollAmount = $target.offset().top - 65;

 $("html, body").animate({ scrollTop: scrollAmount }, "slow");
});



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
        [{ name: 'Pugde', src: 'images/heroes/pudge.jpg', attr: 'Strength', skill: 'Meat Hook, Rot, Flesh Heap, Dismember'},
         { name: 'Phantom Assassin', src: 'images/heroes/phantom_assassin.jpg', attr: 'Agility', skill: 'Stifling Dagger, Phantom Strike, Blur, Coup de Grace'},
         { name: 'Sniper', src: 'images/heroes/sniper.jpg', attr: 'Agility', skill: 'Shrapnel, Headshot, Take Aim, Assassinate'},
         { name: 'Invoker', src: 'images/heroes/invoker.jpg', attr: 'Intelligence', skill: 'Quas, Wex, Exort'},
         { name: 'Juggernaut', src: 'images/heroes/juggernaut.jpg', attr: 'Agility', skill: 'Blade Fury, Healing Ward, Blade Dance, Omnislash'},
          { name: 'Slark', src: 'images/heroes/slark.jpg', attr: 'Agility', skill: 'Dark Pact, Pounce, Essense Shift, Shadow Dance'},
          { name: 'Axe', src: 'images/heroes/axe.jpg', attr: 'Strength', skill: 'Berseker\'s Call, Battle Hunger, Counter Helix, Culling Blade'},
          { name: 'Riki', src: 'images/heroes/riki.jpg', attr: 'Agility', skill: 'Smoke Screen, Blink Strike, Cloak and Dagger, Tricks of the Trade'},
          { name: 'Legion Commander', src: 'images/heroes/legion_commander.jpg', attr: 'Strength', skill: 'Overwhelming Odds, Press The Attack, Moment of Courage, Duel'},
           { name: 'Windranger', src: 'images/heroes/windrunner.jpg', attr: 'Intelligence', skill: 'Shackleshot, Powershot, Windrun, Focus Fire'},
           { name: 'Mirana', src: 'images/heroes/mirana.jpg', attr: 'Agility', skill: 'Starstrom, Sacred Arrow, Leap, Moonlight Shadow'},
           { name: 'Bloodseeker', src: 'images/heroes/bloodseeker.jpg', attr: 'Agility', skill: 'Bloodrage, Blood Rite, Thirst, Rupture'}];
        $scope.image = $scope.Myimages;
        $scope.myfilterBy="";
        $scope.filterBy = function(x) {
            $(function() {
                $('.pictureHeroes').each( function() { $(this).hoverdir(); } );
            });
        $scope.myfilterBy = x;
    }
    }]);

/*direct-hover*/
;( function( $, window, undefined ) {

	'use strict';

	$.HoverDir = function( options, element ) {

		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			this.support = Modernizr.csstransitions;
			this._loadEvents();
		},
		_loadEvents : function() {
			var self = this;
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				var $el = $( this ),
					$hoverElem = $el.find( '.name' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				if( event.type === 'mouseenter' ) {
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {

						$hoverElem.show( 0, function() {

							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );


					}, self.options.hoverDelay );

				}
				else {

					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
				}
			} );
		},
		_getDir : function( $el, coordinates ) {

			var w = $el.width(),
				h = $el.height(),

				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
		return direction;
		},
		_getStyle : function( direction ) {
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			return { from : fromStyle, to : toStyle };
		},
		_applyAnimation : function( el, styleCSS, speed ) {
			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );
		},
	};
	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};
	$.fn.hoverdir = function( options ) {
		var instance = $.data( this, 'hoverdir' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				if ( !instance ) {
					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {

			this.each(function() {
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				}
			});

		}
		return instance;
	};

} )( jQuery, window );

/*mouse-move*/
/*slider*/

if($(window).width()<=750){
    temp = 550 - ($(window).width()/2);
    $('.Home').css("height", temp);
    $('.Home').css("height", temp);
}

$(function() {
    $('.pictureHeroes').each( function() { $(this).hoverdir(); } );
});

window.st = ScrollReveal();
st.reveal('.heroes .container', {origin: 'left', rotate: {x:0, y:0, z:-90}, duration: 1000});
