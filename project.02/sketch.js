// SHekinah coder
// Nohl
// June 12

let code = "";
let finshed_code = "1"

function setup() {
  createCanvas(windowWidth, windowHeight);
  code = prompt("type in the code you want to be encrypted")
  finished_code = encrypt(code);
  print(finished_code)
}

function draw() {
  background(220);
}

function encrypt(the_code) {
  let new_code = ""
  the_code = the_code.toLowerCase()
  for (let i = 0; i < the_code.length; i++){
    if (the_code[i] === "e"){
      new_code += "a";
    }
    else if (the_code[i] === "x"){
      new_code += "b";
    }
    else if (the_code[i] === "g"){
      new_code += "c";
    }
    else if (the_code[i] === "p"){
      new_code += "d";
    }
    else if (the_code[i] === "m"){
      new_code += "e"
    }
    else if (the_code[i] === "t"){
      new_code += "f"
    }
    else if (the_code[i] === "b"){
      new_code += "g"
    }
    else if (the_code[i] === "q"){
      new_code += "h"
    }
    else if (the_code[i] === "w"){
      new_code += "i"
    }
    else if (the_code[i] === "o"){
      new_code += "j"
    }
    else if (the_code[i] === "a"){
      new_code += "k"
    }
    else if (the_code[i] === "d"){
      new_code += "l"
    }
    else if (the_code[i] === "y"){
      new_code += "m"
    }
    else if (the_code[i] === "r"){
      new_code += "n"
    }
    else if (the_code[i] === "u"){
      new_code += "o"
    }
    else if (the_code[i] === "s"){
      new_code += "p"
    }
    else if (the_code[i] === "j"){
      new_code += "q"
    }
    else if (the_code[i] === "c"){
      new_code += "r"
    }
    else if (the_code[i] === "h"){
      new_code += "s"
    }
    else if (the_code[i] === "z"){
      new_code += "t"
    }
    else if (the_code[i] === "l"){
      new_code += "u"
    }
    else if (the_code[i] === "k"){
      new_code += "v"
    }
    else if (the_code[i] === "i"){
      new_code += "w"
    }
    else if (the_code[i] === "n"){
      new_code += "x"
    }
    else if (the_code[i] === "f"){
      new_code += "y"
    }
    else if (the_code[i] === "v"){
      new_code += "z"
    }
    else {
      new_code += the_code[i];
    }
    
  }
  return(new_code);
}


