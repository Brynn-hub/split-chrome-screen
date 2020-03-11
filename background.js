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

const getActiveTab = () => new Promise(resolve => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    resolve(tabs[0].id)
  })
});

chrome.commands.onCommand.addListener(async command => {
  const tabId = await getActiveTab();
  chrome.windows.create({
    tabId,
    ...commands[command]
  })  
})
