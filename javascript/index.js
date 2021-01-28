let inputField = document.querySelector(".inputForm");
let backspace = document.querySelector(".img");

// calcaulator oprtations
let clearBtn = document.querySelector("#clear");
let brackets = document.querySelector("#brackets");
let percent = document.querySelector("#percent");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let subtract = document.querySelector("#subtract");
let add = document.querySelector("#add");
let plusorminus = document.querySelector("#plusorminus");
let equality = document.querySelector("#equality");
let calcGrid = document.querySelector("#grid");

// calculator numbers
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");

// numbers funtion
function clickBtn() {
  seven.addEventListener("click", function () {
    console.log(inputField.value);
    if (inputField !== "") {
      inputField.value = inputField.value + seven.value;
      Number(inputField.value);
    }
  });
  eight.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + eight.value;
      Number(inputField.value);
    }
  });

  nine.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + nine.value;
      Number(inputField.value);
    }
  });

  four.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + four.value;
      Number(inputField.value);
    }
  });

  five.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + five.value;
      Number(inputField.value);
    }
  });
  six.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + six.value;
      Number(inputField.value);
    }
  });
  one.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + one.value;
      Number(inputField.value);
    }
  });
  two.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + two.value;
      Number(inputField.value);
    }
  });
  three.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + three.value;
      Number(inputField.value);
    }
  });
  zero.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + zero.value;
      Number(inputField.value);
    }
  });
  point.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + point.value;
    }
  });
}

clickBtn();

// operator function

function calculate() {
  brackets.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = "(" + inputField.value + ")";
      // if(inputField !== ""|| inputField == ""){
      //     inputField.value = "(" + inputField.value + ")"
      // }
    }
  });

  percent.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + percent.value;
    }
  });
  divide.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + divide.value;
    }
  });
  multiply.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + multiply.value;
    }
  });
  subtract.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + subtract.value;
    }
  });
  add.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = inputField.value + add.value;
    }
  });
  plusorminus.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = "-" + inputField.value;
    }
  });
}

calculate();

// clear function
function clearFunc() {
  clearBtn.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = "";
    }
  });

  backspace.addEventListener("click", function () {
    if (inputField !== "") {
      // inputField.value = inputField.length -1
      let newInput = inputField.value;
      //   console.log("newInput ", newInput);
      let newArray = newInput.split("");
      newArray.pop();

      inputField.value = newArray.join("");
    } else {
      backspace.disabled = true;
    }
  });
}

clearFunc();

function mathFunc() {
  equality.addEventListener("click", function () {
    if (inputField !== "") {
      inputField.value = eval(inputField.value)
    }
    console.log(inputField.value);
  });
}

mathFunc();
