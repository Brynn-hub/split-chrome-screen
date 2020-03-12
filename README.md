# split-chrome-screen
本库所有代码参考[seven 分屏视频](https://www.bilibili.com/video/av94736617?p=1)，
这里用文字的方式记录实现思路

[chrome extension developer](https://developer.chrome.com/extensions)
点击 [背景页](chrome://extensions/) 可以debugger background.js
## 1. 功能实现
1. 我们实现一个分屏插件，需要操作tab， 所以先搜索[tab](https://developer.chrome.com/extensions/tabs)
2. 分屏需要让页面弹出来，要操作windows，搜索[window](https://developer.chrome.com/extensions/windows) 
[code](https://github.com/Brynn-hub/split-chrome-screen/tree/feature/init-extension)

3. 当操作快捷键的时候，使页面弹出来，搜索[command](https://developer.chrome.com/extensions/commands)
[code](https://github.com/Brynn-hub/split-chrome-screen/tree/feature/add-command)

## 2. 代码优化
1. 将background.js里的switch优化和提变量[code](https://github.com/Brynn-hub/split-chrome-screen/tree/feature/optimize-switch)
2. 为了避免出现地狱回调，使用[promise](http://www.ruanyifeng.com/blog/2015/05/async.html)优化chrome.tabs.query[code](https://github.com/Brynn-hub/split-chrome-screen/tree/feature/optimize-promise)
3. 使用[command设计模式](https://www.runoob.com/design-pattern/command-pattern.html)优化第一步的代码[code](https://github.com/Brynn-hub/split-chrome-screen/tree/feature/command)