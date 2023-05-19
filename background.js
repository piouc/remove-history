chrome.runtime.onStartup.addListener(() => {
  chrome.history.deleteAll()
})

chrome.history.onVisited.addListener(historyItem => {
  chrome.history.deleteUrl({url: historyItem.url})
})