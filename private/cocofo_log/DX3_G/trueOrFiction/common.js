window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);
    const sceneTitle = document.querySelector('.scene-title');
    const allChat = document.querySelectorAll('.chat')
    allChat.forEach((value, key) => {
        value.addEventListener('click', chatClickEvnet, false);
    })
    let scenePosList = Array(logData.scene);

    for (let i= 1; i <= logData.scene; i++) {
        scenePosList[i-1] = getScenePosition("#scene"+i);
        ScrollTrigger.create({
            trigger: "#scene"+i,
            start: "0 50%",
            endTrigger: "#scene"+(i+1),
            end: "bottom bottom",
            onToggle: self => {
                sceneTitle.classList.remove("on");
                setTimeout(function () {
                    sceneTitle.querySelector("h2").innerText = "scene"+i;
                    sceneTitle.classList.add("on");
                }, 200);
            }
        })
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

function ChatData(name, chat, img) {
    this.name = name;
    this.chat = chat;
    this.img = img;
}

function getScenePosition(scene) {
    return document.querySelector(scene).offsetTop;
}

const logData = {
    scene: 20,
    player: {
        miho: new PlayerData('미호','https://i.imgur.com/ixJzkOQ.png', '#ff9800'),
        nagai: new PlayerData('나가이','https://i.imgur.com/BLRIbhB.png', '#f44336'),
        miyu: new PlayerData('미유','https://i.imgur.com/kflsRzW.png', '#ffaec9'),
        ama: new PlayerData('아마','https://i.imgur.com/hbVkkjW.png', '#e0e0e0'),
        mai: new PlayerData('마이','https://i.imgur.com/ZGRuJYd.png', '#ffeb3b'),
    },
}


let chatBoxActive = false;
const chatClickEvnet = (e) => {
    const chatClass = e.target.classList[1] === 'desc' ? undefined : e.target.classList[1];
    const chatBox = document.querySelector(".characterBox");
    const chatName = e.target.querySelector("strong").innerText;
    const chatImg = logData.player[chatClass]?.image ? logData.player[chatClass].image : '' ;
    const chatText = e.target.querySelector("span").innerText
    const chatdata = new ChatData(chatName, chatText, chatImg);
    if ( chatBoxActive ) {
        chatBox.classList.remove("on");
        setTimeout(function () {
            setChatdata(chatdata.name, chatdata.chat,'',true)
        }, 350);
        chatBoxActive = false;
    } else {
        setChatdata(chatdata.name, chatdata.chat, chatdata.img);
        chatBox.classList.add("on");
        chatBoxActive = true;
    }
}

let isReset = false;
function setChatdata(name, chat, img, reset) {
    isReset = reset;
    if ( isReset ) {
        document.querySelector("#char-img").src = '';
        document.querySelector(".commentBox .name").innerHTML = '';
        document.querySelector(".commentBox .comment").innerHTML = '';
    } else {
        document.querySelector("#char-img").src = img;
        document.querySelector(".commentBox .name").innerHTML = name;
        document.querySelector(".commentBox .comment").innerHTML = chat;
    }
}