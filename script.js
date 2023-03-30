function displayimg() {
    let verificar = document.querySelectorAll("input")
    for (let i =0; i < 3; i++){
        if (verificar[i].checked) {
            let imgtrocar = document.querySelector(".containerimg")
            imgtrocar.style.background  = `url(img/img-0${i+1}.png)`
        }
    }
}