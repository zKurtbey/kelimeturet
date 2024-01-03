const plybtn = document.querySelector('.btn');
plybtn.addEventListener("click", () => {
  plybtn.style.animation="bb 1s ease-in-out forwards";
  start();
});
let lastword = [];
let a = 0;
let container = document.getElementById('container');
function start() {
  if(!container){
    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    createNewDiv();
    setupInputListeners(container);
    document.querySelector(".kel .hrf").focus();
    lastword = [];
  } else{
    createNewDiv();
    function setupInputListeners(container) {
      const divs = container.querySelector('.kel');
      const inputs = divs.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener("input", () => moveToNextInput(input));
      });
      lastword = [];
    }
    document.querySelector(".kel .hrf").focus();
  }
  lastword = [];
}
function moveToNextInput(currentInput) {
  const inputValue = currentInput.value;
  if (inputValue.length === 1) {
    const nextInput = currentInput.nextElementSibling;
    if (nextInput) {
        nextInput.focus();
        currentInput.style = "border-bottom: 2px rgb(50, 120, 50) solid";
    } else {
      currentInput.blur();
      currentInput.style = "border-bottom: 2px rgb(50, 120, 50) solid";
      combineValues();
      }
  }
}
async function combineValues() {
  if(document.querySelector('.gk')){
    console.log(lastword);
  }
  let word = '';
  const divs = document.querySelector('.kel');
  const inputs = divs.querySelectorAll('.kel input');
    inputs.forEach(input => {
      const kck = input.value.toLowerCase();
      word += kck;
      input.maxLength = 1;
    });
  console.log(word);
  try {
    const response = await fetch('words.txt');
    const wordsText = await response.text();
    const sozluk = wordsText.split('\n');
    if (sozluk.includes(word)) {
      if(document.querySelector(".gk")){
        let i = document.querySelectorAll('.gk').length - 1;
        if(!lastword.includes(word)){
          const gkson = document.querySelectorAll(".gk")[i];
          console.log(lastword);
          if(gkson.querySelector("#sonharf").value == document.querySelector(".kel #basharf").value){
            lastword.push(word);
            dogru();
        } else {
            harfuyus();
      }
        } else {
            oncedenyaz();
        }
      } else {
        lastword.push(word);
        dogru();
      }
  } else {
      fail();
  }
} catch (error) {
    console.error('Error fetching or reading words.txt:', error);
  }
}
function createNewDiv() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("class", "kel");
  container.appendChild(newDiv);
  console.log(a);
  if (a <= 5){
    var newInput = document.createElement('input');
      newInput.type = 'text';
      newDiv.appendChild(newInput);
      newInput.classList.add("hrf");
      newInput.setAttribute("oninput", "moveToNextInput(this)");
      newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
      var newInput = document.createElement('input');
      newInput.type = 'text';
      newDiv.appendChild(newInput);
      newInput.classList.add("hrf");
      newInput.setAttribute("oninput", "moveToNextInput(this)");
    newInput.maxLength = 1;
      var newInput = document.createElement('input');
      newInput.type = 'text';
      newDiv.appendChild(newInput);
      newInput.classList.add("hrf");
      newInput.setAttribute("oninput", "moveToNextInput(this)");
      document.querySelector(".kel .hrf").focus();
      newInput.setAttribute("id", "sonharf");
    newInput.maxLength = 1;
    if(document.querySelector('.gk')){
      let i = document.querySelectorAll('.gk').length - 1;
      const gkson = document.querySelectorAll(".gk")[i];
      document.querySelector('.kel #basharf').value = gkson.querySelector('#sonharf').value;
      document.querySelector('.kel #basharf').style = "border-bottom: 2px rgb(50, 120, 50) solid";
      document.querySelectorAll('.kel input')[2].focus();
    }
    } else if (a <= 10){
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newDiv.appendChild(newInput);
        newInput.classList.add("hrf");
        newInput.setAttribute("oninput", "moveToNextInput(this)");
        newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
    if(document.querySelector('.gk')){
      let i = document.querySelectorAll('.gk').length - 1;
      const gkson = document.querySelectorAll(".gk")[i];
      document.querySelector('.kel #basharf').value = gkson.querySelector('#sonharf').value;
      document.querySelector('.kel #basharf').style = "border-bottom: 2px rgb(50, 120, 50) solid";
      document.querySelectorAll('.kel input')[2].focus();
    }
        for (var i = 0; i < 2; i++) {
          var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          newInput.maxLength = 1;
        }
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newDiv.appendChild(newInput);
        newInput.classList.add("hrf");
        newInput.setAttribute("oninput", "moveToNextInput(this)");
        document.querySelector(".kel .hrf").focus();
        newInput.setAttribute("id", "sonharf");
    newInput.maxLength = 1;
    } else if (a <= 15){
        var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
          for (var i = 0; i < 3; i++) {
            var newInput = document.createElement('input');
            newInput.type = 'text';
            newDiv.appendChild(newInput);
            newInput.classList.add("hrf");
            newInput.setAttribute("oninput", "moveToNextInput(this)");
            const maxLength = 1;
          }
          var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          document.querySelector(".kel .hrf").focus();
          newInput.setAttribute("id", "sonharf");
    newInput.maxLength = 1;
    if(document.querySelector('.gk')){
      let i = document.querySelectorAll('.gk').length - 1;
      const gkson = document.querySelectorAll(".gk")[i];
      document.querySelector('.kel #basharf').value = gkson.querySelector('#sonharf').value;
      document.querySelector('.kel #basharf').style = "border-bottom: 2px rgb(50, 120, 50) solid";
      document.querySelectorAll('.kel input')[2].focus();
    }
    } else if (a <= 20){
        var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
          for (var i = 0; i < 4; i++) {
            var newInput = document.createElement('input');
            newInput.type = 'text';
            newDiv.appendChild(newInput);
            newInput.classList.add("hrf");
            newInput.setAttribute("oninput", "moveToNextInput(this)");
            newInput.maxLength = 1;
          }
          var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          document.querySelector(".kel .hrf").focus();
          newInput.setAttribute("id", "sonharf");
    newInput.maxLength = 1;
    if(document.querySelector('.gk')){
      let i = document.querySelectorAll('.gk').length - 1;
      const gkson = document.querySelectorAll(".gk")[i];
      document.querySelector('.kel #basharf').value = gkson.querySelector('#sonharf').value;
      document.querySelector('.kel #basharf').style = "border-bottom: 2px rgb(50, 120, 50) solid";
      document.querySelectorAll('.kel input')[2].focus();
    }
        } else if (a > 20){
        var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
          for (var i = 0; i < 4; i++) {
            var newInput = document.createElement('input');
            newInput.type = 'text';
            newDiv.appendChild(newInput);
            newInput.classList.add("hrf");
            newInput.setAttribute("oninput", "moveToNextInput(this)");
            newInput.maxLength = 1;
          }
          var newInput = document.createElement('input');
          newInput.type = 'text';
          newDiv.appendChild(newInput);
          newInput.classList.add("hrf");
          newInput.setAttribute("oninput", "moveToNextInput(this)");
          document.querySelector(".kel .hrf").focus();
          newInput.setAttribute("id", "sonharf");
    newInput.maxLength = 1;;
    if(document.querySelector('.gk')){
      let i = document.querySelectorAll('.gk').length - 1;
      const gkson = document.querySelectorAll(".gk")[i];
      document.querySelector('.kel #basharf').value = gkson.querySelector('#sonharf').value;
      document.querySelector('.kel #basharf').style = "border-bottom: 2px rgb(50, 120, 50) solid";
      document.querySelectorAll('.kel input')[2].focus();
    }
        }
  a++;
}
function triggerBackgroundAnimation() {
  const yzd = 2;
  const snkyzd = parseFloat(document.body.style.backgroundPosition) || 0;
  const yniyzd =  snkyzd + yzd;
  document.body.style.backgroundPosition = `${yniyzd}% ${yniyzd}%`;
}
function dogru(){
  const divs = document.querySelector('.kel');
  divs.classList.remove("kel");
      triggerBackgroundAnimation();
      const bslk = document.querySelectorAll('.bslk');
      bslk.forEach((bslk) => {
        const topPercentage = .25;
        const lefPercentage = 1;
        const currentTopPercentage = parseFloat(bslk.style.marginTop) || 0;
        const newTopPercentage = currentTopPercentage - topPercentage;
        bslk.style.marginTop = `${newTopPercentage}em`;
        const currentLeftPercentage = parseFloat(bslk.style.marginLeft) || 0;
        const newLeftPercentage = currentLeftPercentage - lefPercentage;
        bslk.style.marginLeft = `${newLeftPercentage}em`;
      });
      divs.classList.add("gk");
      const gk = document.querySelectorAll('.gk');
      gk.forEach((gk) => {
        const leftPercentage = 7.5;
        const currentLeftPercentage = parseFloat(gk.style.marginLeft) || 0;
        const newLeftPercentage = currentLeftPercentage - leftPercentage;
        gk.style.marginLeft = `${newLeftPercentage}em`;
        const topPercentage = 1.5;
        const currentTopPercentage = parseFloat(gk.style.marginTop) || 0;
        const newTopPercentage = currentTopPercentage - topPercentage;
        gk.style.marginTop = `${newTopPercentage}em`;
        const eskigiris = document.querySelectorAll('.gk input');
        eskigiris.forEach((input) => {
          input.readOnly = true;
        });
      });
    setTimeout(() => {
      createNewDiv();
    }, 100);
}
function harfuyus(){
  document.getElementById("hatasebep").innerHTML="Son harfler uyuşmuyor!";
  document.querySelector("#hata").style="animation: hatavar 1.25s ease-in-out alternate; animation-iteration-count: 2";
  setTimeout(() => {
    document.querySelector("#hata").style="";
  }, 2500);
  document.querySelector(".kel").style="animation: scale .5s ease-in-out forwards";
  setTimeout(() => {
    setTimeout(() => {
      document.querySelectorAll('.kel input').forEach((input) => {
        input.value="";
        input.maxLength = 1;
    });
    }, 200);
    document.querySelector(".kel input").focus();
    document.querySelector(".kel").style="";
  }, 1000);
}
function oncedenyaz(){

  document.getElementById("hatasebep").innerHTML="Bu kelimeyi zaten yazdınız!";
  document.querySelector("#hata").style="animation: hatavar 1.25s ease-in-out alternate; animation-iteration-count: 2";
  setTimeout(() => {
    document.querySelector("#hata").style="";
  }, 2500);
  document.querySelector(".kel").style="animation: scale .5s ease-in-out forwards";
  setTimeout(() => {
    setTimeout(() => {
      document.querySelectorAll('.kel input').forEach((input) => {
        input.value="";
        input.maxLength = 1;
      });
      document.querySelector(".kel input").focus();
    }, 200);
    document.querySelector(".kel").style="";
  }, 1000);

}
function fail(){
lastword = [];
  a = 0;
    const hrf = document.querySelectorAll('.kel .hrf');
    hrf.forEach((hrf) => {
      hrf.style="animation: fail .5s ease-in-out alternate; animation-iteration-count: 5; border-bottom: 2px rgb(200, 70, 70) solid; color: rgb(200, 70, 70);";
    });
  setTimeout(() => {
    document.body.style.backgroundPosition="0% 0%";
    const gk = document.querySelectorAll('.gk');
    if(gk){
      gk.forEach((gk) => {
        gk.style="animation: scale .4s ease-in forwards";
      });
    }
    const divs = document.querySelector('.kel');
    divs.style="animation: scale .5s ease-in forwards; animation-delay: .25s";
    document.querySelector("#klm").style="top: 0; left: 5%;";
    document.querySelector("#trt").style="top: 9%; left: 12%;";
    setTimeout(() => {
      gk.forEach((gk) => {
        gk.classList.remove("gk");
        gk.classList.add("yok");
        document.querySelector('.yok').remove();
      });
      setTimeout(() => {
        divs.remove();
      }, 500);
      plybtn.style.animation="gg 1s ease-in-out forwards";
    }, 1000);
  }, 2000);
}
