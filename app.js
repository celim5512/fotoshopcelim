const select = document.querySelector('select');
const range = document.querySelector('input[type="range"]');
const span = document.querySelector('span');
const img = document.querySelector('img');
const btn = document.querySelector('button');

let filter = "";
let number = 0;
range.value = 0;

select.onchange = function(){
    //console.log("select")
    for(let i=0; i<select.options.length; i++){
        if(select.options[i].selected){
            filter = select.options[i].value;
        }
    }
    console.log(filter);
}

range.onchange = function(){
    //console.log(range.value)
    if(filter=="brightness" || filter=="contrast"){
        span.innerText = range.value*2+"%";
    }
    if(filter=="saturate"){
        span.innerText = range.value/10;
    }
    if(filter=="hue-rotate"){
        span.innerText = range.value*3.6+"deg";
    }
    if(
        filter=="blur" || 
        filter=="grayscale" || 
        filter=="invert" || 
        filter=="sepia" ||
        filter=="opacity"
    ){
        span.innerText = range.value+"%";
    }
    if(filter=="drop-shadow"){
        span.innerText = range.value+"px";
    }

}


btn.onclick = function(){
    if(filter=="blur") img.style.filter = `blur(${range.value}px)`;
    if(filter=="brightness") img.style.filter = `brightness(${range.value*2}%)`;
    if(filter=="contrast") img.style.filter = `contrast(${range.value*2}%)`;
    if(filter=="grayscale") img.style.filter = `grayscale(${range.value}%)`;
    if(filter=="hue-rotate") img.style.filter = `hue-rotate(${range.value*3.6}deg)`;
    if(filter=="invert") img.style.filter = `invert(${range.value}%)`;
    if(filter=="opacity") img.style.filter = `opacity(${range.value}%)`;
    if(filter=="saturate") img.style.filter = `saturate(${range.value/10})`;
    if(filter=="sepia") img.style.filter = `sepia(${range.value}%)`;
    if(filter=="drop-shadow") img.style.filter = `drop-shadow(${range.value}px)`;
}
btn.onclick = function(){
    if(filter=="blur") img.style.filter = `blur(${range.value}px)`;
    if(filter=="brightness") img.style.filter = `brightness(${range.value*2}%)`;
    if(filter=="contrast") img.style.filter = `contrast(${range.value*2}%)`;
    if(filter=="grayscale") img.style.filter = `grayscale(${range.value}%)`;
    if(filter=="hue-rotate") img.style.filter = `hue-rotate(${range.value*3.6}deg)`;
    if(filter=="invert") img.style.filter = `invert(${range.value}%)`;
    if(filter=="opacity") img.style.filter = `opacity(${range.value}%)`;
    if(filter=="saturate") img.style.filter = `saturate(${range.value/10})`;
    if(filter=="sepia") img.style.filter = `sepia(${range.value}%)`;
    if(filter=="drop-shadow") img.style.filter = 
    `drop-shadow(${range.value}px ${range.value}px ${range.value}px yellow)`;
}