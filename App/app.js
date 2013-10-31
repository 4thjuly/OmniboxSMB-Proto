// App startup, listen for messages from omnibox extension
chrome.app.runtime.onLaunched.addListener(function() {
    console.log('onLaunched');
});

chrome.runtime.onMessageExternal.addListener( function(request, sender, sendResponse) {
    console.log('ome: ' + sender.id);
    sendResponse({ip: 'this.is.a.test'});
    // if (sender.id == blacklistedExtension)
    //     return;  // don't allow this extension access
    // else if (request.getTargetData)
    //     sendResponse({targetData: targetData});
    // else if (request.activateLasers) {
    //     var success = activateLasers();
    //     sendResponse({activateLasers: success});
    // }
});
