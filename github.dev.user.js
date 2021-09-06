// ==UserScript==
// @name         One Click to VS Code
// @name:zh-CN   一键直达 VS Code
// @namespace    https://github.com/jks-liu/github.dev.user.js
// @supportURL   https://github.com/jks-liu/github.dev.user.js
// @version      1.0.0
// @description  One Click to VS Code <https://github.dev>. <https://github.com/jks-liu/github.dev.user.js>
// @description:zh-CN   一键直达 VS Code <https://github.dev>。<https://github.com/jks-liu/github.dev.user.js>
// @author       Jks Liu (https://github.com/jks-liu)
// @license      MIT
// @match        https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?domain=code.visualstudio.com
// ==/UserScript==


(function() {
    'use strict';

    // Link image
    var img = document.createElement("img");
    img.src = "https://www.google.com/s2/favicons?domain=code.visualstudio.com";
    img.alt = "GOTO VS Code (github.dev)";

    var link = document.createElement("a");
    link.href = "https://github.dev" + document.querySelector("strong.mr-2.flex-self-stretch a").href.slice(18);
    link.appendChild(img);

    var user = document.querySelector("strong.mr-2.flex-self-stretch a").parentElement.parentElement.append(link);
})();
