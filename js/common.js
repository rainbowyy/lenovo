/**
 * Created by Administrator on 2018/11/8 0008.
 */



//���������ݹ������ƶ������
$(function(){
    $(window).scroll(
        function(){
          if( $(window).scrollTop()>=100 && $(window).scrollTop()>400){
          $(".header").css({"background":"#fff","position":"fixed","z-index":"4"});
              $(".left").find("a").css("color","#000");
              $(".search").css({"background":"#f1f1f","border":"1px solid #ccc"})
          }else{
                  $(".header").css({"background":"","position":"absolute","z-index":"4"});
                  $(".left").find("a").css("color","#fff");
                  $(".search").css("background","#eeee");

          }
        }
    );
//���������ݹ������ƶ������end

//���ǵ�Ʒ�Ķ���
    $(".star_img").css("display","none");
    $(".star_img").first().css("display","block");
    var index=0;
    //$(".star_content").find(".star_img").eq($(this).indexOf()).css("display","block");
    $(".star_ul").find("li").hover(function(){
        index=$(this).index();
        doMove();
    });
    function doMove(){
        $(".star_content").find(".star_img").not(index).css("display","none");
        $(".star_content").find(".star_img").eq(index).css("display","block");
        $(".star_ul").find("li").not(index).children().removeClass("star_active");
        $(".star_ul").find("li").eq(index).children().addClass("star_active");
    }

    var timer=null;
    clearInterval(timer);
  timer=setInterval(function(){
      index++;
      if(index==$(".star_ul").find("li").get().length){
          index=0;
      }
      doMove();
    },2000)
//���ǵ�Ʒ�Ķ���end
    var lg=$(".world_ul").find("li").get().length;//֮ǰ�ĳ���
    //alert(lg);
    var clone=$(".world_ul").find("li").clone();
    $(".world_ul").append(clone);

   var num=$(".world_ul").find("li").get().length;
    var liSize=$(".world_ul").children().css("width");
    liSize=Math.ceil(parseFloat(liSize));
    //alert(liSize);
    $(".world_ul").css("width",num*liSize);
    var i=0;
    //�����ƶ��Ķ���
     $(".wl_btn").click(function(){
         i++;
         if(i==lg+1){
             i=1;
             $(".world_ul").css("left",0);
            //
         }
         $(".world_ul").animate({"left":-270*i},200);
     });
      //�����ƶ��Ķ���

    $(".wr_btn").click(function(){
        i--;
        if(i==-1){
            i=lg;
            $(".world_ul").css("left",-270*lg);
        }
        $(".world_ul").animate({"left": -270*i},200);

    });
    var timerr=null;
    clearInterval(timerr);
    timerr=setInterval(function(){
        i++;
        if(i==lg+1){
            i=1;
            $(".world_ul").css("left",0);
            //
        }
        $(".world_ul").animate({"left":-270*i},200);


    },2000);

    //$(window).scroll(function(){
    //    if( $(window).scrollTop()>200 && $(window).scrollTop()<600){
    //        $(".scroll").css({"position":"fixed","z-index":"1"});
    //    }else{
    //        $(".scroll").css({"position":"relative","z-index":"1"});
    //    }
    //
    //
    //})





//    ������������ʲ���--end

//banner����
    var oImg= ['images/nav1.jpg','images/nav2.jpg','images/nav3.jpg','images/nav4.jpg'];
    var n=0;

    $("#banner_img").find("a").css('background','url('+oImg[0]+')');//��ʼ������

   // $("#banner_img a").css("background",url("+oImg[2]+"));

    $("#pre").click(function(){ //����İ�ť
        n--;
        if(n==-1) {
            n=oImg.length-1;
        }
        $("#banner_img").find("a").css('background', 'url(' + oImg[n] + ')');
        $("#li_list").find("li").eq(n).addClass("li_active").siblings().removeClass();

    })
function doRmover(){
    n++;
    if(n==oImg.length) {
        n=0;
    }
    $("#banner_img").find("a").css('background', 'url(' + oImg[n] + ')');
    $("#banner_img a").eq(n).fadeIn(500).siblings().fadeOut();
    $("#li_list").find("li").eq(n).addClass("li_active").siblings().removeClass();
}

    $("#after").click(function(){//���ҵİ�ť
        doRmover();
    })

    var timea=null;
    clearInterval(timea);
    timea=setInterval(function(){
        doRmover();


    },5000)




    for(var i=0;i<oImg.length;i++){
        $("#li_list").append("<li></li>");
    }
    $("#li_list li").first().addClass("li_active").siblings().removeClass();

    $("#li_list li").click(function(){
        $(this).addClass("li_active").siblings().removeClass();
        $("#banner_img").find("a").css('background', 'url(' + oImg[$(this).index()] + ')');

    })






})




