 
  $('#opener').click(function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: '$("#dialog").dialog("open");'});
    });
  });
  
  $('#closer').click(function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: '$("#dialog").dialog("close");'});
    });
  });
