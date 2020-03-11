chrome.commands.onCommand.addListener(command => {
  let options = {};

  switch (command) {
    case 'split-screen-left':
      options = {
        left: 0,
        width: window.screen.availWidth / 2
      }
      break;
    case 'split-screen-right':
      options = {
        left: window.screen.availWidth / 2,
        width: window.screen.availWidth / 2
      }
      break;
    default:
      options = {
        left: 0,
        width: window.screen.availWidth
      }
      break;
  }

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {

    chrome.windows.create({
      tabId: tabs[0].id,
      ...options
    })
  })
})

