const playPauseBtn = document.getElementById('playPause');
const avancarBtn = document.getElementById('proximo')
const voltarBtn = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audioCapitulo');

const numeroCapitulos = 15;

let capituloAtual = 1;
let tocando = false;
let volume = document.getElementById('volume-slider');

volume.addEventListener("change", function(e) {
    audioCapitulo.volume = e.currentTarget.value / 100;
})

function tocarFaixa() {
    
    audioCapitulo.play();
    playPauseBtn.classList.remove('bi-play-circle');    
    playPauseBtn.classList.add('bi-pause-circle-fill');

}

function pausarFaixa() {
    audioCapitulo.pause();
    playPauseBtn.classList.remove('bi-pause-circle-circle');
    playPauseBtn.classList.add('bi-play-circle');

}

function playOrPause() {
   if (tocando == false) {
    tocarFaixa();
    tocando = true;
   } else {
    pausarFaixa();
    tocando = false;
   }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText= "Faixa " + capituloAtual
}


function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
    capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "songs/HeroesAndVillains/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = true
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
    capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "songs/HeroesAnVillains/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = true
    trocarNomeFaixa();
}

playPauseBtn.addEventListener('click', playOrPause);
avancarBtn.addEventListener('click', proximaFaixa)
voltarBtn.addEventListener('click', voltarFaixa)
