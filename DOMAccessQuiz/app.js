var marg = 0;

function changeBgColor(elem, val){
  $(elem).css({ "background-color" : val});
}

function identifyById() {
  //element = document.getElementById("para1");
  //console.log(element);
  console.log($("#para1"));
}

function identifyByClass() {
  //element = document.getElementsByClassName("class1");
  //console.log(element);
  console.log($(".class1"));
}

function byTag() {
  //element = document.getElementsByTagName("p");
  //console.log(element);
  console.log($("p"));
}

function changeBackground() {
  //element = document.getElementById("block1");
  //element.style.backgroundColor="blue";
  //$("#block1").css({"background-color" : "blue"});
  changeBgColor("#block1", "blue");
}

function increaseFont() {
  //element = document.getElementById("block2");
  //element.style.fontSize="2em";
  $("#block2").css({"font-size": "2em"});
}

function changeFontColor() {
  //element = document.getElementById("block3");
  //element.style.backgroundColor="green";
  //$("#block3").css({"background-color" : "green"});
  changeBgColor("#block3", "green");
}

function revertColor() {
  //element = document.getElementById("block3");
  //element.style.backgroundColor="white";
  //$("#block3").css({"background-color" : "white"});
  changeBgColor("#block3", "white");
}

function hide() {
  //element = document.getElementById("block4");
  //element.style.display="none";
  $("#block4").css({"display" : "none"});
}

function changeBackColor(color, className) {
  console.log("changeBackColor");
  //elements = document.getElementsByClassName(className);
  //elements = $("." + className);
  //$("." + className).css({"background-color" : color});
  changeBgColor("." + className, color);

}

function numbersOnly(e) {
  if(parseInt(e.key) >= 0 && parseInt(e.key) <= 9){
    return e;
  }
  return false;
}

function addAdjacent() {
  //element = document.getElementById("para2");
  //para = document.createElement("p");
  //node = document.createTextNode("I got generated on the fly...");
  //para.appendChild(node);
  //element.appendChild(para);
  //element = $("#para2");
  $("<p>",{
    text: "I got generated on the fly..."
  }).appendTo("#para2");

}

function removePara() {
  //element = document.getElementById("para3");
  //element2 = document.getElementById("para4");
  //element.parentElement.removeChild(element2);
  $("#para4").remove();

}

function myMove() {
  // element = document.getElementById("box5");
  // pos = 0;
  // id = setInterval(frame,100);
  //
  // function frame() {
  //   console.log(pos);
  //   if(pos == 360){
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     element.style.marginLeft = 100+Math.sin(pos/(20*Math.PI))*100 + 'px';
  //     element.style.marginTop =  100+Math.abs(Math.cos(pos/(20*Math.PI)))*100 + 'px';
  //     //element.style.left = pos + 'px';
  //   }
  // }
  element = $("#box5");
  pos = 0;
  id = setInterval(frame,100);

  function frame() {
    console.log(pos);
    if(pos == 360){
      clearInterval(id);
    } else {
      pos++;
      element.css({
        "margin-left": 100+Math.sin(pos/(20*Math.PI))*100 + 'px',
        "margin-top": 100+Math.cos(pos/(20*Math.PI))*100 + 'px'
    });
      //element.style.left = pos + 'px';
    }
  }
}

function myFunction() {
  //element = document.getElementById("fname");
  //element.value = element.value.toUpperCase();
  //$("#fname").val($("#fname").val().toUpperCase());
  valueToUppercase("#fname");
}

function changeOn() {
  //element = document.getElementById("fname1");
  //element.value = element.value.toUpperCase();
  valueToUppercase("#fname1");
}

function valueToUppercase(name){
  $(name).val($(name).val().toUpperCase());
}

function preferedBrowser() {
  //element = document.getElementById("browsers");
  console.log($("#browsers").val());

}


function color(elem) {
  //elem.style.backgroundColor="red";
  //$(elem).css({"background-color" : "red"});
  changeBgColor(elem, "red");
}


function inputxt(s) {
  console.log(s);
  //element = document.getElementById("demo");
  $("#demo").text(s.value);
  //element.textContent = s.value;
}

function confirmInput() {
  alert("!!");
}

function message() {
  alert("You deleted");

}

function keydown(n) {
  console.log(n);
}

function keypress(n) {
  console.log(n.code);
  //element = document.getElementById("keycode");
  $(keycode).text(n.code);
}

function keyup() {
  //element = document.getElementById("fname2");
  //$("#fname2").val($("#fname2").val().toUpperCase());
  valueToUppercase("#fname2");
}

function writeMessage() {
  // elements = document.getElementsByTagName("input");
  // for(i = 0; i < elements.length; i++){
  //   if(elements[i].name=="myInput"){
  //     elements[i+1].value = elements[i].value;
  //   }
  // }
  elements = $("input");
  var temp = "";
  $.each(elements,function(i,e){
    if(e.name == "myInput"){
      temp = $(e).val();
    }else if(e.name == "mySecondInput"){
      $(e).val(temp);
    }
  })
}
