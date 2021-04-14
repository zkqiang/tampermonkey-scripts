// ==UserScript==
// @name               Change tab-size on GitHub
// @name:zh-CN         修改 GitHub tab 宽度
// @namespace          https://github.com/zkqiang
// @version            1.0
// @description        Change tab-size from 8 to 4 on GitHub
// @description:zh-CN  将 GitHub 代码区域的 tab 宽度从 8 修改为 4
// @author             zkqiang
// @match              *://github.com/*
// @grant              none
// @license            MIT
// ==/UserScript==

(function () {
  'use strict';

  document.querySelectorAll('table[data-tab-size]').forEach(node => {
    node.setAttribute('data-tab-size', '4')
  });
})();
