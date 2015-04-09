$(function(){
    $(".link .button").hover(function(){
        var title=$(this).attr("data");
        $(".tip em").text(title);
        var pos=$(this).offset().left;
        var dis=($(".tip").outerWidth()-$(this).outerWidth())/2;
        var leftPos=pos-dis;
        //document.title=pos;
        $(".tip").css("left",leftPos+"px").animate({"top":175,"opacity":1},300);
    },function(){
       if(!$(".tip").is(":animated")){
            $(".tip").animate({"top":130,"opacity":0},300);
        }
    })
})