module.exports = function reverse (n) {
    if (n < 0){
        n = n * -1;
        n = n.toString();
        return n = Number(n.split("").reverse().join(""));
    }
    else {
    n = n.toString();
    return n = Number(n.split("").reverse().join(""));
    }
}
