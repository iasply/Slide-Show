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

