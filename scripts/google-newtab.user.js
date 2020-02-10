// ==UserScript==
// @name         Open Google Search Results in New Tab
// @name:zh-CN   Google 谷歌搜索结果以新标签页打开
// @namespace    https://github.com/zkqiang
// @version      1.0
// @description  Modify the Google search results link to open in a new tab
// @description:zh-CN  将谷歌搜索结果的链接修改为以新标签页打开
// @author       zkqiang
// @match        *://www.google.com/search?*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  function modify(element) {
    try {
      var links = element.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        links[i].target = '_blank';
      }
    } catch (err) {
    }
  }

  modify(document.getElementById('res'));
  modify(document.getElementById('bottomads'));
  modify(document.getElementById('rhs'));
  modify(document.getElementById('fsl'));
})();
