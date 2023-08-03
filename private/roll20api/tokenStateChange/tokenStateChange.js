let tokenImgs;
on("chat:message", function (msg) {
  if (msg.type == "api" && msg.content.indexOf("!ㄱㄱ") === 0) {
    tokenImgs = findObjs({
      _type: "graphic",
      _subtype: "token",
      name: msg.who,
    });
    if ( tokenImgs.length > 0 ) {
        tokenImgs[0].set("status_complete::6195781", true);
    } else {
        sendChat("SYSTEM","/w "+msg.who+" 할당된 토큰이 없습니다. 선택된 캐릭터를 확인해주세요.")
    }
  }

  if (msg.type == "api" && msg.content.indexOf("!resetMark") === 0) {
    tokenImgs = findObjs({
      _type: "graphic",
      _subtype: "token",
    }) 
    tokenImgs.forEach(tokenImg => {
        tokenImg.set("status_complete::6195781", false);        
    });
  }
});
