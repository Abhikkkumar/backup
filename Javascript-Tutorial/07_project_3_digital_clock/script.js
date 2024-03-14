const clock = document.querySelector("#clock"); // selecting elem having id = 'clock'

//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setInterval(function(){
    const date = new Date();// creating a date
    clock.innerHTML = `<h2>${date.toLocaleTimeString()}</h2>`; //storing local time in elem having id='clock'
},1000);