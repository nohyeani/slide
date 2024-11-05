$(function(){

    let total = $(".panel li").length;
    // console.log(total);
    let i = 0;
    start();
    function slide(){ i++
        if(i == total - 1){
            $(".panel").stop().animate({"margin-left":"-2000px"},function(){
                $(".panel").css({"margin-left":"0px"});
            });
            i = 0;
        }else{
            $(".panel").stop().animate({"margin-left":-i * 500 });
        }
        
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");}
    function start(){timer = setInterval(function(){
    
       slide();
        },1000);}

    $(".next").on("click",function(){ clearInterval(timer);
       slide();
    start();
    });

   $(".prev").on("click",function(){
    clearInterval(timer);
    i--
    if(i < 0){
        
        $(".panel").css({"margin-left":"-2000px"});
        $(".panel").stop().animate({"margin-left":"-1500px"});
        i = 3;

    }else{
        $(".panel").stop().animate({"margin-left":-i * 500 });

    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();



   });


$(".navi li").on("click",function(){    clearInterval(timer);
    i = $(this).index();
    $(".panel").stop().animate({"margin-left":-i * 500});
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();


});


});




// 변수안에 들어간건 ""안에 안넣는다