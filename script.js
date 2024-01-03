var _0x3202=['stringify','charCodeAt','5702GaffLR','log','1sOqtTS','testing','5KVWPsa','271400Kcqyws','1061133VLOjnM','2ULvqVE','split','push','floor','522844IOhOMW','229526RJWnnv','toLowerCase','511883OIBzUk','fromCharCode','143tqCoWx','length','769311KNEDuk','undefined'];var _0x3e98=function(_0x1d78b7,_0x47afdd){_0x1d78b7=_0x1d78b7-0x141;var _0x3202a1=_0x3202[_0x1d78b7];return _0x3202a1;};(function(_0x95eef9,_0x1b1da9){var _0x138826=_0x3e98;while(!![]){try{var _0x578099=parseInt(_0x138826(0x141))+-parseInt(_0x138826(0x147))+-parseInt(_0x138826(0x142))+parseInt(_0x138826(0x14a))*parseInt(_0x138826(0x143))+-parseInt(_0x138826(0x154))*parseInt(_0x138826(0x14e))+-parseInt(_0x138826(0x152))*-parseInt(_0x138826(0x14c))+parseInt(_0x138826(0x156))*parseInt(_0x138826(0x148));if(_0x578099===_0x1b1da9)break;else _0x95eef9['push'](_0x95eef9['shift']());}catch(_0x1014bf){_0x95eef9['push'](_0x95eef9['shift']());}}}(_0x3202,0xdcebe),function(){var _0x35100c=_0x3e98;console[_0x35100c(0x153)](_0x35100c(0x155));var _0x28d140=0x0;function _0x4fa64c(_0xc28f8d){var _0x43c881=_0x35100c,_0x541300;return _0xc28f8d['indexOf']('//')>-0x1?_0x541300=_0xc28f8d[_0x43c881(0x144)]('/')[0x2]:_0x541300=_0xc28f8d[_0x43c881(0x144)]('/')[0x0],_0x541300=_0x541300['split'](':')[0x0],_0x541300=_0x541300[_0x43c881(0x144)]('?')[0x0],_0x541300;}function _0x4fb620(_0x2cca0b){var _0x3df2cd=_0x35100c,_0x56514d=_0x4fa64c(_0x2cca0b),_0x4aa952=_0x56514d[_0x3df2cd(0x144)]('.'),_0x364f6d=_0x4aa952[_0x3df2cd(0x14d)];if(_0x364f6d==0x2)_0x56514d=_0x4aa952[0x0];else _0x364f6d>0x2&&(_0x56514d=_0x4aa952[_0x364f6d-0x2],_0x4aa952[_0x364f6d-0x2][_0x3df2cd(0x14d)]==0x2&&_0x4aa952[_0x364f6d-0x1]['length']==0x2&&(_0x56514d=_0x4aa952[_0x364f6d-0x3]));return _0x56514d;}var _0x2a7dec=String[_0x35100c(0x14b)](0x4c,0x4f,0x43,0x41,0x54,0x49,0x4f,0x4e)[_0x35100c(0x149)](),_0x24302a=String['fromCharCode'](0x6f,0x72,0x69,0x67,0x69,0x6e)[_0x35100c(0x149)](),_0x592b65=window[_0x2a7dec][_0x24302a],_0x195fac=_0x592b65['indexOf'](String['fromCharCode'](0x6c,0x6f,0x63,0x61,0x6c));if(_0x195fac<0x0||_0x28d140==0x1)var _0x2e8f38=_0x4fb620(_0x592b65);else return;var _0xc81b5a=[107,108,109,116,114,116],_0x31c497=[],_0x282c2d=[],_0xc0db7c='',_0x38b846=0x0;while(_0x38b846<_0xc81b5a[_0x35100c(0x14d)]*0x2){_0x282c2d[_0x35100c(0x145)](_0x2e8f38[_0x35100c(0x151)](_0x38b846)),_0x38b846+=0x2;}if(JSON[_0x35100c(0x150)](_0x282c2d)===JSON[_0x35100c(0x150)](_0xc81b5a)){}else{var _0x30e746=0x0;for(var _0x506c03 in window){_0x30e746++;if(_0x30e746>0xc8)try{var _0x5e36b5=Math[_0x35100c(0x146)](Math['random']()*0x64);window[_0x5e36b5]!==_0x35100c(0x14f)?window[_0x506c03]=window[_0x5e36b5]:window[_0x506c03]=null;}catch(_0xd08140){}}}}());

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
    } else if (a <= 10){
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newDiv.appendChild(newInput);
        newInput.classList.add("hrf");
        newInput.setAttribute("oninput", "moveToNextInput(this)");
        newInput.setAttribute("id", "basharf");
    newInput.maxLength = 1;
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
    newInput.maxLength = 1;
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
