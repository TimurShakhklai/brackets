module.exports = function check(str, bracketsConfig) {
    let Arr = bracketsConfig.map((i) => i[0] + i[1]);
    let Str = str;
    while (true) {
        for (let i = 0; i < Arr.length; i++) {
            str = str.replace(Arr[i], '');
        }
        if (str.length == 0) {
            return true;
        }
        if (Str === str) {
            return false;
        }
        Str = str;
    }
}
