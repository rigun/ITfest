$(document).ready(function(){
    $("#gameplay").on({
        mouseenter: function(){
          $("#gameplaygaris").animate({width : '60%'}, "slow");
          var i=0;
          for(i; i<10; i++){
            $("#gameplayimage").animate({bottom : '10px'}, "slow");
            $("#gameplayimage").animate({bottom : '0px'}, "slow");
          }
        },
        mouseleave: function(){
            $("#gameplaygaris").stop(true,false);
            $("#gameplayimage").stop(true,false);
            $("#gameplaygaris").animate({width : '20%'}, "100");
            $("#gameplayimage").animate({bottom : '0px'}, {duration : '4000', queue : false});
        },
    });
});

$(document).ready(function(){
    $("#heroesxxx").on({
        mouseenter: function(){
          $("#heroesgaris").animate({width : '60%'}, "1000");
          var i=0;
          for(i; i<10; i++){
            $("#heroesimage").animate({bottom : '10px'}, "slow");
            $("#heroesimage").animate({bottom : '0px'}, "slow");
          }

        },
        mouseleave: function(){
            $("#heroesgaris").stop(true,false);
            $("#heroesimage").stop(true,false);
            $("#heroesgaris").animate({width : '20%'}, "100");
            $("#heroesimage").animate({bottom : '0px'}, {duration : '4000', queue : false});
        },
    });
});

$(document).ready(function(){
    $("#competition").on({
        mouseenter: function(){
          $("#competitiongaris").animate({width : '60%'}, "1000");
          var i=0;
          for(i; i<10; i++){
            $("#competitionimage").animate({bottom : '10px'}, "slow");
            $("#competitionimage").animate({bottom : '0px'}, "slow");
          }

        },
        mouseleave: function(){
            $("#competitiongaris").stop(true,false);
            $("#competitionimage").stop(true,false);
            $("#competitiongaris").animate({width : '20%'}, "100");
            $("#competitionimage").animate({bottom : '0px'}, {duration : '4000', queue : false});
        },
    });
});

$(document).ready(function(){
    $("#main").on({
        mouseenter: function(){
          $("#maingaris1").animate({width : '70%'}, "2000");
          $("#maingaris2").animate({width : '85%'}, "2000");

        },
        mouseleave: function(){
            $("#maingaris1").stop(true,false);
            $("#maingaris2").stop(true,false);
            $("#maingaris1").animate({width : '15%'}, "1000");
            $("#maingaris2").animate({width : '20%'}, "1000");

        },
    });
});

$(document).ready(function() {
    $("#keepMoving").on({
      mouseenter : function() {
        var i=0;
        for(i; i<10; i++){
          $("#keepMoving").animate({width:'90%'}, "2000", 'linear');
          var j=0;
          for(j; j<5; j++) {
            $("#keepMoving").animate({width: '88%'}, "fast");
            if(j!=4) {
              $("#keepMoving").animate({width:'90%'}, "fast");
            }
            else $("#keepMoving").animate({width:'100%'}, "2000");

          }
        }
      },

      mouseleave : function() {
        $("#keepMoving").stop(true,false);
        $("#keepMoving").animate({width:'100%'}, "2000");
      },

    });
});

$(document).ready(function() {
    $("#winter").on({
      mouseenter : function() {
        $("#winter").animate({opacity:0.5}, "2000");
      },

      mouseleave : function() {
        $("#winter").stop(true,false);
        $("#winter").animate({opacity:1}, "2000");
      },

    });
});


$(document).ready(function() {
    $("#fall").on({
      mouseenter : function() {
        $("#fall").animate({opacity:0.5}, "2000");
      },

      mouseleave : function() {
        $("#fall").stop(true,false);
        $("#fall").animate({opacity:1}, "2000");
      },

    });
});


$(document).ready(function() {
    $("#spring").on({
      mouseenter : function() {
        $("#spring").animate({opacity:0.5}, "2000");
      },

      mouseleave : function() {
        $("#spring").stop(true,false);
        $("#spring").animate({opacity:1}, "2000");
      },

    });
});

$(document).ready(function() {
    $("#item").on({
      mouseenter : function() {
        $("#part, #rare, #price").animate({opacity:0.3}, "fast");
      },

      mouseleave : function() {
        $("#part, #rare, #price").stop(true,false);
        $("#part, #rare, #price").animate({opacity:1}, "fast");
      },

    });
});

$(document).ready(function() {
    $("#part").on({
      mouseenter : function() {
        $("#item, #rare, #price").animate({opacity:0.3}, "fast");
      },

      mouseleave : function() {
        $("#item, #rare, #price").stop(true,false);
        $("#item, #rare, #price").animate({opacity:1}, "fast");
      },

    });
});

$(document).ready(function() {
    $("#rare").on({
      mouseenter : function() {
        $("#item, #part, #price").animate({opacity:0.3}, "fast");
      },

      mouseleave : function() {
        $("#item, #part, #price").stop(true,false);
        $("#item, #part, #price").animate({opacity:1}, "fast");
      },

    });
});

$(document).ready(function() {
    $("#price").on({
      mouseenter : function() {
        $("#item, #rare, #part").animate({opacity:0.3}, "fast");
      },

      mouseleave : function() {
        $("#item, #rare, #part").stop(true,false);
        $("#item, #rare, #part").animate({opacity:1}, "fast");
      },

    });
});
