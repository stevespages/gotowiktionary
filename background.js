browser.menus.create({
    title: "'%s' in Wiktionary",
    contexts: ["selection"],
});

browser.menus.onClicked.addListener((info, tab) => {
    const wiktUrl = "https://en.wiktionary.org/wiki/" + info.selectionText + "#Spanish";
    browser.tabs.update({url: wiktUrl});
});
