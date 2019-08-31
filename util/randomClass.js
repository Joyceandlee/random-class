module.exports.randomClass = (total, num) => {
    let arr = [];//序列号数组
    for (let i = 1; i <= total; i++) {
        arr.push(i)
    }
    if (total % num == 0) {
        //人数均分
        let arg = total / num;//每班人数
        let arr1 = arg, arr2 = arg, arr3 = arg;
        console.log(arr1)
        
        if (arr.length == total) {

            let newArr = [];
            for (var i = 0; i < arr.length; i++) {
                newArr.push(arr[Math.floor(Math.random() * arr.length)])
            }

            arr1 = newArr.slice(0, arg)
            arr2 = newArr.slice(arg, arg * 2)
            arr3 = newArr.slice(arg * 2)
            console.log(arr1.length, arr2.length, arr3.length)
        }
    } else {
        //人数不能均分
        let arg = total / num;
    
        let newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[Math.floor(Math.random() * arr.length)])
        }

        arr1 = newArr.slice(0, Math.ceil(arg) - 1)
        arr2 = newArr.slice(Math.ceil(arg) - 1, (Math.ceil(arg) - 1) * 2)
        arr3 = newArr.slice((Math.ceil(arg) - 1) * 2)
        
        console.log(arr1.length, arr2.length, arr3.length)

    }
}