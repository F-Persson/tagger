// listen for ctrl + mouse click
document.addEventListener('mousedown', function (e) {
    if (e.ctrlKey && e.button === 0) {
        let selectedText = getSelectedText();
        let url = window.location.href;
        let title = document.title;
        openPopup(selectedText, url, title);
    };
    if (e.ctrlKey && e.button === 2) {
        var selectedText = getSelectedText();
        sendMessageToPopup(selectedText);
    };
});

// Send message to background.js to open popup
function openPopup(selectedText, url, title) {
    (async () => {
        chrome.runtime.sendMessage({
            selectedText: selectedText,
            url: url,
            title: title,
            action: "createWindow",
        });
    })();
}

// get selected text
function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
