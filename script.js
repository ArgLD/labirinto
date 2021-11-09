//Cada "W" representa uma parede, "S" a posição inicial e "F" a linha de chegada. 
//Os espaços são células vazias por onde o jogador pode se movimentar.
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

//criar a div onde vou inciar
let box = document.createElement("div")
box.classList.add("box")
document.body.appendChild(box)

let player = document.createElement("div")

//criar o mapa
//percorrer o array map e criar div para cada linha - usar display:flex - divLine
//B) faça o DIV do jogador ser anexado (appended) a uma célula DIV = divCell
//Ps.: Line é a linha horizontal no mapa, "olhando a const map acima, é cada linha"
const makeMap = () => {
    for (let i = 0; i < map.length; i++) {
        let divLine = document.createElement("div")
        divLine.classList.add("line")
        box.appendChild(divLine)
        //criar as células e em cada index do map eu preciso ver se(if) é wall(W), espaço vazio(" ")corredor/passage, início(S) start, player(precisa estar dentro do S)
        for (let j = 0; j < map[i].length; j++) {
            let divCell = document.createElement("div")
            divCell.classList.add("cell")
            if (map[i][j] === "W") {
                divCell.classList.add("wall")
                // divCell.style.backgroundColor = "red"
            }
            if (map[i][j] === "S") {
                divCell.classList.add("start")
                // divCell.style.backgroundColor = "blue"
                //criar o player dentro do start
                    player.classList.add("player")
                    divCell.appendChild(player)
                    // player.style.backgroundColor = "black"
            }
            if (map[i][j] === " ") {
                divCell.classList.add("passage")
            }
            if (map[i][j] === "F") {
                divCell.classList.add("end")
                // divCell.style.backgroundColor = "green"
            }
            divLine.appendChild(divCell)
        }
    }
}
makeMap()

//criar os comandos pra movimentar o player, forward, backward, upward, downward.
// para cima e para baixo eu subo e desço Div, troco de Line. 

//Posição inicial do player
let position = 0

//função movimento
document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    let forward = player.parentElement.nextSibling
    let backward = player.parentElement.previousSibling
    let upward = player.parentElement.parentElement.previousSibling
    let downward = player.parentElement.parentElement.nextSibling
    
    if (keyName === "ArrowRight") { 
        if (forward.classList.contains("passage")) {
        forward.appendChild(player)
        position++
        }
        // condição de vitória
        if (forward.classList.contains("end")) {
            forward.appendChild(player)            
            let win = document.createElement("h2")
                win.innerHTML = "Saiu!"
                document.body.appendChild(win)
                // win.classList.add(winmsg)
                setTimeout(() => {
                    window.location.reload()
                }, 600)
        } 
    } else if (keyName === "ArrowLeft" && backward.classList.contains("passage")) {
        backward.appendChild(player)
        position--
    } else if (keyName === "ArrowUp" && upward.childNodes[position].classList.contains("passage")) {
        upward.childNodes[position].appendChild(player)

    } else if (keyName === "ArrowDown" && downward.childNodes[position].classList.contains("passage")) {
        downward.childNodes[position].appendChild(player)
    }    
});