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
          $("#keepMoving").animate({width:'90%'}, "2000");
          $("#keepMoving").animate({width:'100%'}, "2000");
        }
      },

      mouseleave : function() {
        $("#keepMoving").stop(true,false);

          $("#keepMoving").animate({width:'100%'}, "2000");
      },

    });
});
