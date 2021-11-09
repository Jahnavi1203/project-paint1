
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

    color = "black";
    width = 2;
    
    canvas.addEventListener("mousedown", myMousedown);
    function myMousedown(e){
        color = document.getElementById("color").value;
        width = document.getElementById("line").value;
        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mouseup", myMouseup);
    function myMouseup(e){
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", myMouseleave);
    function myMouseleave(e){
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", myMousemove);
    function myMousemove(e){

     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mousedown"){
            
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width;
         ctx.moveTo(last_position_of_x, last_position_of_y);
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
         ctx.stroke();
         
     }
     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
        
    }

    canvas.addEventListener("touchstart" , myTouchstart)
    function myTouchstart(e){
       last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
    }

    canvas.addEventListener("touchmove" , myTouchmove)
    function myTouchmove(e){
        console.log("myTouchstart");

        color = document.getElementById("color").value;
        width = document.getElementById("line").value;

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY  - canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;
   ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
   ctx.stroke();

   last_position_of_touch_x = current_position_of_touch_x;
   last_position_of_touch_y= current_position_of_touch_y;
    
    }

    function clear_area(){
        ctx.clearRect(0 , 0 , canvas.width, canvas.height);
    }