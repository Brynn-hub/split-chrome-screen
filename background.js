chrome.commands.onCommand.addListener(async command => {
  const tabId = await getActiveTab();
  chrome.windows.create({
    tabId,
    ...shortCut.excute(command)()
  })  
})
