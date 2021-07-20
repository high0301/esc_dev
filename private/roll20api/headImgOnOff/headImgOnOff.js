let tokenImgs;
let nameList = [];
let talkChangeChkIdx = [];
on('chat:message', function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!setHead") === 0) {
        tokenImgs = findObjs({ _type: 'graphic', _subtype: "token", gmnotes: "%3Cp%3Ehead%3C/p%3E"})
        for ( var i = 0; i < tokenImgs.length; i++) {
            nameList.push(tokenImgs[i].get('name'));
        }
        log(nameList);
    }

    let whoIdx = nameList.indexOf(msg.who);
    let prevIdx, nextIdx;
    if ( whoIdx != -1 ) {
        if ( talkChangeChkIdx.length >= 2 ) {
            talkChangeChkIdx.shift() 
            talkChangeChkIdx.push(whoIdx);
        } else {
            talkChangeChkIdx.push(whoIdx);
        }
        prevIdx = talkChangeChkIdx[0];
        nextIdx = talkChangeChkIdx[1];
        log(talkChangeChkIdx);
        log("prevIdx:"+talkChangeChkIdx[0]);
        log("nextIdx:"+talkChangeChkIdx[1]);        
        
        tokenImgs[whoIdx].set({
            "tint_color": "transparent"
        })
        if ( talkChangeChkIdx.length == 2 ) {
            if ( prevIdx != nextIdx ) {           
                tokenImgs[prevIdx].set({
                    "tint_color": "#000000"
                });        
            } else {
            }
        }
    }    
});