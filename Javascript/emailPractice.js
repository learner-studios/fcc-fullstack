const str1 = "doej2babdfasldkfjal;sdkjfa;lskdjf;alskdjfla;ksdjgl;aksdjgl;kashdgl;aksdhglk;ajsdhg;lkasdhg;lasdhgl;asdhgl;asdghals;dhg@gmail.com";

// console.log(str1.endsWith("best!"));
// Expected output: true

function wordSearch(str1) {
    let key = "@";
    let keyFind = str1.indexOf(key) - 1;
    let keySlice = str1.slice(1,keyFind);
    let keyReplace = str1.replace(keySlice,"*");
    let keyRepeat = str1.repeat(keyFind + keyReplace);
    return console.log(keyRepeat);
}
wordSearch(str1);
