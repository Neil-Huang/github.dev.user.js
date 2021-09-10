// ==UserScript==
// @name         One Click to VS Code
// @name:zh-CN   一键直达 VS Code
// @namespace    https://github.com/jks-liu/github.dev.user.js
// @supportURL   https://github.com/jks-liu/github.dev.user.js
// @version      1.0.1
// @description  One Click to VS Code <https://github.dev>. <https://github.com/jks-liu/github.dev.user.js>
// @description:zh-CN   一键直达 VS Code <https://github.dev>。<https://github.com/jks-liu/github.dev.user.js>
// @author       Jks Liu (https://github.com/jks-liu)
// @license      MIT
// @match        https://github.com/*/*
// @icon         https://raw.githubusercontent.com/Neil-Huang/github.dev.user.js/master/vscode.png
// ==/UserScript==


(function() {
    'use strict';

    // Link image
    var img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/Neil-Huang/github.dev.user.js/master/vscode.png";
    img.alt = "GOTO VS Code (github.dev)";

    var link = document.createElement("a");
    link.href = "https://github.dev" + document.querySelector("strong.mr-2.flex-self-stretch a").href.slice(18);
    link.style.cssText = "padding-left:5px;";
    link.appendChild(img);

    var user = document.querySelector("strong.mr-2.flex-self-stretch a").parentElement.parentElement.append(link);
})();
