# split-chrome-screen
本库所有代码参考[seven 分屏视频](https://www.bilibili.com/video/av94736617?p=1)，
这里用文字的方式记录实现思路

[chrome extension developer](https://developer.chrome.com/extensions)
点击 [背景页](chrome://extensions/) 可以debugger background.js

1. 我们实现一个分屏插件，需要操作tab， 所以先搜索[tab](https://developer.chrome.com/extensions/tabs)
1. 分屏需要让页面弹出来，要操作windows，搜索[window](https://developer.chrome.com/extensions/windows)