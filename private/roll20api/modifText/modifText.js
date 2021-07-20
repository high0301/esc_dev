on('chat:message', function (msg) {
    textGet(msg, "!mdtxt");
});

function textGet(msg, key) {
    let modifTextName;
    let selectedText;
    if (msg.type == "api" && msg.content.indexOf(key) === 0) {
        let changeText = msg.content.replace(key+" ", "");
        if (!msg.selected) return;
        else {
            var modifText = getObj(msg.selected[0]._type, msg.selected[0]._id);
            modifTextName = modifText.get("_id")
            selectedText = findObjs({ type: 'text', _id: modifTextName });
            if (selectedText == "") return;
            else {
                textModif(selectedText[0], changeText);
            }
        }
    }
}

function textModif(text, changeText) {
    log(text.get("text"));
    text.set({ text: changeText});
}