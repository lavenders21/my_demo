(function($){
 $.fn.scrollTop = function(options){
  var defaults = {
   speed:30
   }
  var opts = $.extend(defaults,options);
  this.each(function(){
   var $timer;
   var scroll_top=0;
   var obj = $(this);
   var $height = obj.find("table").height();
   obj.find("table").clone().appendTo(obj);
   obj.hover(function(){
    clearInterval($timer);
    },function(){
     $timer = setInterval(function(){
      scroll_top++;
      if(scroll_top > $height){
       scroll_top = 0;
      }
      obj.find("table").first().css("margin-top",-scroll_top);
    },opts.speed);
    }).trigger("mouseleave");
   })
  }
 })(jQuery)

$(function(){
 $(".marquee").scrollTop({
  speed:100 //数值越大 速度越慢
  });
})