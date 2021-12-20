function plateformAdapter(platform: string, browser: string) {
    if (
        platform.toUpperCase().indexOf('MAC') > -1 &&
        browser.toUpperCase().indexOf('IE') > -1
    ) {
        // do something
    }
}

function plateformAdapterV2(platform: string, browser: string) {
    let isMacOS = platform.toUpperCase().indexOf('MAC') > -1;
    let isIE = browser.toUpperCase().indexOf('IE') > -1;
    if (isMacOS && isIE) {
        // do something
    }
}
