

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body"); 
// VV Important: How to get live style of any 'element' using JS ?
const bodyStyle = window.getComputedStyle(body); //The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.
const body_bg_color = bodyStyle.getPropertyValue("background-color"); // further Read: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

buttons.forEach(function (button) {
  
  button.addEventListener("click", (event) => {
    const colorClicked = event.target.id; // hold 'id' of clicked button
    // console.log(event.target.id);
    if(colorClicked === 'red'){
        body.style.backgroundColor = colorClicked; // set 'body' background color to 'colorClicked'
        document.querySelector("#red").style.backgroundColor = body_bg_color;   // set '#red' background color to 'body_bg_color'
        //makes sure that background-color of other elem is equal to its 'id'.
        document.querySelector("#blue").style.backgroundColor = "blue";
        document.querySelector("#pink").style.backgroundColor = "pink";
        document.querySelector("#yellow").style.backgroundColor = "yellow";
    }else if(colorClicked === 'blue'){
        body.style.backgroundColor = colorClicked;
        document.querySelector("#blue").style.backgroundColor = body_bg_color;

        document.querySelector("#pink").style.backgroundColor = "pink";
        document.querySelector("#yellow").style.backgroundColor = "yellow";
        document.querySelector("#red").style.backgroundColor = "red";
    }else if(colorClicked === 'yellow'){
        body.style.backgroundColor = colorClicked;
        document.querySelector("#yellow").style.backgroundColor = body_bg_color;

        document.querySelector("#red").style.backgroundColor = "red";
        document.querySelector("#blue").style.backgroundColor = "blue";
        document.querySelector("#pink").style.backgroundColor = "pink";
    }else if(colorClicked === 'pink'){
        body.style.backgroundColor = colorClicked;
        document.querySelector("#pink").style.backgroundColor = body_bg_color;

        document.querySelector("#red").style.backgroundColor = "red";
        document.querySelector("#blue").style.backgroundColor = "blue";
        document.querySelector("#yellow").style.backgroundColor = "yellow";
    }
  });
});
