on('chat:message', function (msg) {
    let plName;
    let plID;
    let chatMsg;
    let _gmName;
    let _gmID;
    let muteOn = false;
    if (msg.type == "api" && msg.content.indexOf("!setGM") === 0) {
        _gmName = msg.content.replace('!setGM ', "");
        _gmID = findObjs({ type: 'player', _displayname: _gmName });
        _gmID = _gmID[0].get('_id');
        sendChat("음소거", "/w gm " + _gmName + "가/이 GM으로 등록되었습니다.");
    }

    if (_gmID != undefined && msg.playerid == _gmID) {
        if (msg.type == "api" && msg.content.indexOf("!m") === 0) {
            (muteOn == true) ? muteOn = false : muteOn = true;
            if (muteOn == true) {
                plName = msg.content.replace('!m ', "");
                sendChat("음소거", "/w gm " + plName + "가/이 음소거 되었습니다.");
                plID = findObjs({ type: 'player', _displayname: plName });
                plID = plID[0].get('_id');
                // log(plID)
            } else {
                plName = "";
                plID = "";
                sendChat("음소거", "/w gm 음소거가 해제되었습니다.");
            }
        }
    } else {
        if (msg.type == "api" && msg.content.indexOf("!m") === 0) {
            sendChat("음소거", "/w " + msg.who + " 권한이 없습니다.");
        }
    }

    if (msg.playerid == plID && muteOn == true) {
        chatMsg = msg.content.replace('!m ', "");
        if (chatMsg != plName) {
            sendChat("음소거", "/direct "
                + "<div style='position:absolute; bottom: 67px; left: 0; padding: 8px 10px; min-width: 100%;padding-left: 30px; background: #fff; font-size: 14px; font-weight: bold;' class='mute'>음소거 되었습니다. <span style='color: #fff;'>"
                + chatMsg
                + "<span></div>"
                + "음소거 된 내용입니다. 내용을 읽기 위해서는 위의 흰 영역을 드래그 해주세요.");
        }
    }
});