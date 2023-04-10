function displayimg() {
    let verificar = document.querySelectorAll("input")
    for (let i =0; i < 3; i++){
        if (verificar[i].checked) {
            let imgtrocar = document.querySelector(".containerimg")
            imgtrocar.style.background  = `url(img/img-0${i+1}.png)`
        }
    }
}

function after() {
    let verificar = document.querySelectorAll("input")
    
    for (let i =0; i < 3; i++){
        if(i == 2) {
            verificar[i].value = "off"
            verificar[0].value = "on"
            verificar[0].checked = true
            displayimg()
            break
         }

        if (verificar[i].value == "on") {
            verificar[i].value = "off"
            verificar[i+1].value = "on"
            verificar[i+1].checked = true
            displayimg()
            break
        }
        
    }

}
    
function before() {
    let verificar = document.querySelectorAll("input")
    
    for (let i =2; i > -1; i--){
        if(i == 0) {
            verificar[i].value = "off"
            verificar[2].value = "on"
            verificar[2].checked = true
            displayimg()
            break
         }

        if (verificar[i].value == "on") {
            verificar[i].value = "off"
            verificar[i-1].value = "on"
            verificar[i-1].checked = true
            displayimg()
            break
        }
        
    }

}   

let seletores = document.querySelectorAll("input")
function presionadoSeletor(e) {
    for (let radio of seletores) {
        radio.value = "off"
    }
    e.target.value = "on"
}

for (let radio of seletores) {
    radio.addEventListener("click", presionadoSeletor)
    
}

let timer;

function timerFunction() {
  let buttonValue = document.querySelector(".timer");
  let imgButton = document.querySelector(".imgtrade");

  function play() {
    imgButton.src = "img/pause.png";
    buttonValue.value = "pause";
    after();
    timer = setInterval(after, 3000);
  }

  function pause() {
    imgButton.src = "img/play.png";
    buttonValue.value = "play";
    clearInterval(timer);
  }

  switch (buttonValue.value) {
    case "play":
      play();
      break;

    case "pause":
      pause();
      break;
  }
}






