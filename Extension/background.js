var SMB_APP_ID = 'aneecmhmlinnnmjlafjhckfcbfmecagk';
var port;

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    console.log('inputChanged: ' + text);
    // suggest([
    //     {content: text + " one", description: "the first one"},
    //     {content: text + " number two", description: "the second entry"}
    // ]);
});

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(function(text) {
    console.log('inputEntered: ' + text);
    // nbtSearch(text);
    // alert('You just typed "' + text + '"');

    function onMsg(msg) {
        console.log('response from app: ' + msg.ip);
        var newUrl = 'http://' + msg.ip;
        chrome.tabs.update({url: newUrl});
    }

    if (!port) {
        port = chrome.runtime.connect(SMB_APP_ID);
        port.onMessage.addListener(onMsg);
    }
    
    if (port) {
        try {
            port.postMessage({inputEntered: text});
        } catch (err) {
            alert("Unable to contact Network Devices App. Please re-install it.")
            port = null;
        }
    }

    // chrome.runtime.sendMessage(SMB_APP_ID, {inputEntered: text}, function(response) {
    //     console.log('response from app: ' + response.ip);
    // });
 
 });