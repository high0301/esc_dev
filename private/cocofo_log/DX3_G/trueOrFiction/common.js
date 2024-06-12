window.onload = function () {
    const allChat = document.querySelectorAll('.chat')
    allChat.forEach((value, key) => {
        value.addEventListener('click', chatClickEvnet);
    })
}


function PlayerData(name, image, color) {
    this.name = name;
    this.image = image;
    this.color = color;
}

function chatData(name, chat) {
    this.name = name;
    this.chat = chat;
}

function getScenePosition(scene) {
    return document.querySelector(scene).offsetTop;
}

const logData = {
    scene: Array(20),
    player: {
        miho: new PlayerData('miho','a', '#ff9800'),
        nagai: new PlayerData('nagai','a', '#f44336'),
        miyu: new PlayerData('miyu','a', '#ffaec9'),
        ama: new PlayerData('ama','a', '#e0e0e0'),
        mai: new PlayerData('mai','a', '#ffeb3b'),
    },
    background: [
        ''
    ]
}

console.log(logData.player.miho);
function scrollEvent() {

}

const chatClickEvnet = (e) => {
    console.log(e.target);
}