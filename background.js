console.log("Loaded extension...");

/*chrome.webRequest.onBeforeRequest.addListener(
    function() { return {cancel: true}; },
    {
      urls: ["*://cdn.sstatic.net/Sites/stackoverflow/*"],
      types: ["script"]
    },
    ["blocking"]
  );*/

function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://cdn.sstatic.net/Sites/stackoverflow/*", "*://cdn.sstatic.net/Shared/*"]}, ['blocking']);
}

updateFilters();