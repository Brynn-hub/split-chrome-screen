const fullWidth = window.screen.availWidth;
const commands = {
  'split-screen-left': {
    left: 0,
    width: fullWidth / 2
  },
  'split-screen-right': {
    left: fullWidth / 2,
    width: fullWidth / 2
  },
  'split-screen-full': {
    left: 0,
    width: fullWidth
  },
};

chrome.commands.onCommand.addListener(command => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.windows.create({
      tabId: tabs[0].id,
      ...commands[command]
    })
  })
})

