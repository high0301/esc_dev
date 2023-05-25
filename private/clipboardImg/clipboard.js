document.onpaste = function(pasteEvent) {
    // 첫 번째 항목을 고려합니다(여러 항목에 대해 쉽게 확장할 수 있음
    const item = pasteEvent.clipboardData.items[0];
    console.log(item);
 
    if (item.type.indexOf("image") === 0)
    {
        const blob = item.getAsFile();
 
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById("container").src = event.target.result;
        };
 
        reader.readAsDataURL(blob);
    }
}