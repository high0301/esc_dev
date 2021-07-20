let boxStyle = {
    default: 'text-decoration:none; color: darkgrey; font-weight: bold; padding: 8px 12px; margin: 5px 5px 7px 5px; background: #ffffff; line-height: 150%; border: 2px solid darkgrey; box-shadow: -4px 4px 0px darkgrey; display: inline-block',
}
on('chat:message', function (msg) {
    handoutGet(msg, "!hoo");
    setHandoutToken(msg, "!hotk")
});

function handoutGet(msg, key) {
    let handoutName;
    let selectedHandout;
    if (msg.type == "api" && msg.content.indexOf(key) === 0) {
        if (!msg.selected) return;
        else {
            var token = getObj(msg.selected[0]._type, msg.selected[0]._id);
            handoutName = token.get("name")
            selectedHandout = findObjs({ type: 'handout', name: handoutName });
            if (selectedHandout == "") return;
            else {
                handoutOutput(selectedHandout[0]);
            }
        }
    }
}

function handoutOutput(handout) {
    handout.get("notes", function (notes) {
        let ouputText = '[** ' + handout.get("name") + '│　** ' + notes + '](http://journal.roll20.net/handout/' + handout.get("_id") + '#" style ="' + boxStyle["default"] + ';)';
        sendChat('핸드아웃', ouputText);
    })
}

function setHandoutToken(msg, key) {
    let targetHandout;
    if (msg.type == "api" && msg.content.indexOf(key) === 0) {
        let tokenName = msg.content.replace(key + " ", "");
        if (tokenName[tokenName.length - 1] == " ") {
            tokenName = tokenName.slice(0, -1);
            log(tokenName);
        }
        targetHandout = findObjs({ type: 'handout', name: tokenName });
        if (targetHandout == "") return;
        else {
            createObj('graphic', {
                _subtype: "token",
                _pageid: Campaign().get("playerpageid"),
                imgsrc: "https://s3.amazonaws.com/files.d20.io/images/234834048/yOq_wSbkYrksjTLD0g0-OQ/thumb.png?1626605730",
                name: tokenName,
                layer: "objects",
                width: 70,
                height: 70,
                top: 70,
                left: 70,
                controlledby: "all",
                showname: true,
            })
        }
    }
}