chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {
  chrome.windows.create({
    tabId: tabs[0].id
  })
})

