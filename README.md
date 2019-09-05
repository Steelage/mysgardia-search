# mysgardia-search
<img src="https://i.imgur.com/p4gauzJ.png">
The Sanctuary takes too long list of creatures, and the Manage Creatures is screwed up yet; here this exists for easily browsing Mysgardia Creatures in the Sanctuary(profile page)!

# How to install?
First, You need both Stylus and Tampermonkey addons/extensions to be installed so you can apply codes in your browser:
* Install Tampermonkey: [Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/ko/firefox/addon/tampermonkey/)
* Install Stylus: [Google Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) / [Firefox](https://addons.mozilla.org/ko/firefox/addon/styl-us/)

To install CSS code, simply click [**This link**](https://raw.githubusercontent.com/Steelage/mysgardia-search/master/mysgardia-search.user.css) and then click "Install style" button. Then you got half of the whole code!

To install JS code, open the Dashboard of Tampermonkey and click "[+]" button to go the "New Userscript" section. Then click [**This link**](https://raw.githubusercontent.com/Steelage/mysgardia-search/master/mysgardia-search.user.js) and copy the entire code from the link, then replace the every contents of the editor with it.

To make sure your JS code to be auto-updated, you need to open the installed js code in Dashboard and click "Settings" besite the "Editor". Turn on <code>Check updates</code> if it's turned off, then insert the url <code>https://raw.githubusercontent.com/Steelage/mysgardia-search/master/mysgardia-search.user.js</code> in the input, then click "Save" button.

Note that CSS code doesn't need such progress as it is already set to auto-update itself!

# The things I want to note down
There is nothing so much to be noted about the code itself, but there are a couple of hidden facts about it:
1. **The NAME input is [regExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)-based**, you may filter those with default names by inserting <code>^(?!Amoura)</code> (<code>Amoura</code> can be any name) and such.
2. If a special form is given to CLICKS input, it will only show those within the range. **Inserting like <code>123-456</code> to get the range filter.**
3. **It will work well in the latest version of Firefox/Chrome browser.**
4. If you have more than 3000 creatures, the code will not auto-update the filter whenever typing one of inputs due to the lagging issue. You may press enter to manually update the filter; although changing the selected option of a selection still works regardless.
