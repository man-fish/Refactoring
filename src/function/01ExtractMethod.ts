function travse(arr: string[]) {
    arr.forEach((item) => {
        //print details
        console.log('char:', item);
        console.log('code:', item.charCodeAt(0));
    });
}
// ======>
function travseV2(arr: string[]) {
    arr.forEach((item) => {
        //print details
        printCharInfo(item);
    });
}

function printCharInfo(c: string) {
    console.log('char:', c);
    console.log('code:', c.charCodeAt(0));
}

function travseV3(arr: string[]) {
    arr.forEach((item) => {
        //print details
        let info = getCharInfo(item);
        console.log(info);
    });
}

function getCharInfo(c: string): string {
    let charInfo = '';
    charInfo += `'char:'${c},`;
    charInfo += `'code:'${c.charCodeAt(0)},`;
    return charInfo;
}
