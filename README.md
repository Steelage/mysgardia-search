# mysgardia-search
The Sanctuary takes too long list of creatures, and the Manage Creatures is screwed up yet; here this exists for easily browsing Mysgardia Creatures in the Sanctuary(profile page)!

# How to install?
First, You need both Stylus and Tampermonkey addons/extensions to be installed so you can apply codes in your browser:
* Install Tampermonkey: [Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/ko/firefox/addon/tampermonkey/)
* Install Stylus: [Google Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) / [Firefox](https://addons.mozilla.org/ko/firefox/addon/styl-us/)

To install CSS code, simply click [**This link**](https://raw.githubusercontent.com/Steelage/mysgardia-search/master/mysgardia-search.user.css) and then click "Install style" button. Then you got half of the whole code!

To install JS code, Open the Dashboard of Tampermonkey and click "[+]" button to go the "New User Script" section. Then click [**This link**](https://raw.githubusercontent.com/Steelage/mysgardia-search/master/mysgardia-search.user.js) and copy the entire code from the link, then replace the every contents in the editor with it.

# The things I want to note down
There is nothing so much to be noted about the code itself, but there are a couple of hidden facts about it:
1. **the NAME input is [regExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)-based**, you may filter those with default names by inserting <code>^(?!Amoura)</code> and such.
2. If a special form is given to CLICKS input, it will only show those within the range. **Inserting like <code>123-456</code> to get the range filter.**
3. **It will work well in the latest version of Firefox/Chrome browser.**
