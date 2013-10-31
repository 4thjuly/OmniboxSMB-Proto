var SMB_APP_ID = 'fmeeghbannbbffmgkbjlihachbmkepbc';

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
    chrome.runtime.sendMessage(SMB_APP_ID, {inputEntered: text}, function(response) {
        console.log('response: ' + response.ip);
    });
 
 });