 canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var color="red"
var width_of_line="2"
var radius="10"
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color");
    width_of_line=document.getElementById("width");
    radius=document.getElementById("radius");
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_postition_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postition_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseevent="mousedown"){
        console.log("current position of x="+current_postition_of_mouse_x);
        console.log("current position of y="+current_postition_of_mouse_y);
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_postition_of_mouse_x,current_postition_of_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke(); 
    }
}