const shortCut = new ShortCut();

const getActiveTab = () => new Promise(resolve => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    resolve(tabs[0].id)
  })
});