$(document).ready(function(){
    function clear() {$(".name").removeClass('nameOn');};
    $(".rio").hover(function(){$(".rioName").addClass('nameOn');}, function(){clear()});
    $(".ari").hover(function(){$(".ariName").addClass('nameOn');}, function(){clear()});
    $(".vian").hover(function(){$(".vianName").addClass('nameOn');}, function(){clear()});
});
