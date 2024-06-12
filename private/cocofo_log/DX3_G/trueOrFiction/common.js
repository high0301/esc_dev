window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    const allChat = document.querySelectorAll('.chat')
    allChat.forEach((value, key) => {
        value.addEventListener('click', chatClickEvnet);
    })

    window.addEventListener("scroll", scrollEvent);

    for (let i= 1; i <= logData.scene; i++) {
        // ScrollTrigger.create({
        //     trigger: "#scene"+i,
        //     start: "top top",
        //     endTrigger: "#scene"+(i+1),
        //     end: "bottom bottom",
        //     onToggle: self => console.log("start"),
        //     onUpdate: self => {
        //         document.querySelector("#container").style.background = `rgba(${i*30},${i*30},${i*30},1)`;
        //     }
        // })
    }
    ScrollTrigger.create({
        trigger: ".past-scene-start",
        start: "0 50%",
        endTrigger: ".past-scene-end",
        end: "100% 100%",
        onUpdate: self => {
            document.querySelector("#container").style.background = '#000';
        }
    })
    ScrollTrigger.create({
        trigger: ".past-scene-end",
        start: "0 50%",
        endTrigger: ".past-scene-start-2",
        end: "100% 100%",
        onUpdate: self => {
            document.querySelector("#container").style.background = '#fff';
        }
    })
    ScrollTrigger.create({
        trigger: ".past-scene-start-2",
        start: "0 50%",
        onUpdate: self => {
            document.querySelector("#container").style.background = '#000';
        }
    })
    ScrollTrigger.create({
        trigger: ".past-scene-end-2",
        start: "0 50%",
        onUpdate: self => {
            document.querySelector("#container").style.background = '#fff';
        }
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
    scene: 20,
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

const scrollEvent = (e) => {

}

const chatClickEvnet = (e) => {
    console.log(e.target);
}