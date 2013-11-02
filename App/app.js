// App startup, listen for messages from omnibox extension
chrome.app.runtime.onLaunched.addListener(function() {
    console.log('onLaunched');
});

chrome.runtime.onConnectExternal.addListener(function(port) {
    
    function onMsg(msg) {
        console.log('ome: ' + msg);
        nbtNameSearchForIP(msg.inputEntered.toUpperCase(), onNameSearchCompleted);
    }
    
    function onNameSearchCompleted(targetIP) {
        console.log('onsc: ' + targetIP);
        port.postMessage({ip: targetIP});
    }
    
    port.onMessage.addListener(onMsg);
});

