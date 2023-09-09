//Piano 
class teclaPiano {
    constructor(audio) {
        this.elementoGeneral = document.querySelector("#pianitoFeo")
        this.audio = new Audio(audio)
        this.tecla = document.createElement("div")
        this.tecla.classList.add("teclaP")
        this.tecla.addEventListener("click", this.sonar.bind(this))
        this.elementoGeneral.append(this.tecla)
    }

    sonar(){
        this.audio.play()
    }

  
}




//instancias teclaPiano 
const teclaDo = new teclaPiano('assets/notas/nota1.mp3');
const teclaRe = new teclaPiano('assets/notas/nota2.mp3');
const teclaMi = new teclaPiano('assets/notas/nota3.mp3');
const teclaFa = new teclaPiano('assets/notas/nota4.mp3');
const teclaSol = new teclaPiano('assets/notas/nota5.mp3');
const teclaLa = new teclaPiano('assets/notas/nota6.mp3');
const teclaSi = new teclaPiano('assets/notas/nota7.mp3');
const teclaDo2 = new teclaPiano('assets/notas/nota8.mp3');