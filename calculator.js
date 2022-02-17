let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let screenValue = "";

for(let i = 0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    if(buttons[i].innerHTML == "AC"){
      display.innerText = "";
      screenValue = "";
    }
    else if(buttons[i].innerHTML == "="){
      let screenAns = eval(screenValue);
      display.innerText = screenAns;
      screenValue = screenAns;
    }
    else if(buttons[i].innerHTML == "&lt;-"){
      let val = display.innerText;
      let len = val.length-1;
      let newVal = val.substring(0,len);
      display.innerText = newVal;
      screenValue = display.innerText;
    }
    else if(buttons[i].innerHTML == "+/-"){
      screenValue = screenValue * -1;
      display.innerText = screenValue;
    }
    else{
      screenValue += buttons[i].innerHTML;
      display.innerText = screenValue;
    }
  })
}
