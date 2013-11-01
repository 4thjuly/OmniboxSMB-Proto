// App startup, listen for messages from omnibox extension
chrome.app.runtime.onLaunched.addListener(function() {
    console.log('onLaunched');
});

chrome.runtime.onConnectExternal.addListener(function(port) {
    
    function onMsg(msg) {
        console.log('ome: ' + msg.id);
        nbtNameSearchForIP(msg.inputEntered, onNameSearchCompleted);
    }
    
    function onNameSearchCompleted(targetIP) {
        console.log('onsc: ' + targetIP);
        port.postMessage({ip: targetIP});
    }
    
    port.onMessage.addListener(onMsg);
});

// chrome.runtime.onMessageExternal.addListener( function(request, sender, sendResponse) {
    
    
//     function onNameSearchCompleted(targetIP) {
//         console.log('onsc: ' + targetIP);
//         sendResponse({ip: targetIP});
//     }
    
//     console.log('ome: ' + sender.id);
//     nbtNameSearchForIP(request.inputEntered, onNameSearchCompleted);
    
//     sendResponse({ip: 'this.is.a.test'});
    
//     // if (sender.id == blacklistedExtension)
//     //     return;  // don't allow this extension access
//     // else if (request.getTargetData)
//     //     sendResponse({targetData: targetData});
//     // else if (request.activateLasers) {
//     //     var success = activateLasers();
//     //     sendResponse({activateLasers: success});
//     // }
// });
