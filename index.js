function iterativeLog(arr) {
    arr.forEach(function callback(ele, ind, arr) {
    console.log(`${ind}: ${ele}`)
    });
}

function iterate(callback) {
    let adele = ["hello", "how", "are", "you"]
    adele.forEach(callback)
    return adele
}

function doToArray(arr, callback) {
    arr.forEach(callback)
}