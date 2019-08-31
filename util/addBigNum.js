// let arr=[];
// let sum = 0;

module.exports.addBigNum = (a, b) => {

    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c > 9;
    }
    console.log(res.replace(/^0+/, ''));

    // let numed1 = 0, numed2 = 0;
    // // 两个20位长度大数
    // if (num1.length == 20 && num2.length == 20) {
    //     num1 = Number(num1);
    //     num2 = Number(num2);
    //     if (num1 > 9007199254740992 && num2 > 9007199254740992) {
    //         num1 = num1 - 9007199254740992;
    //         num2 = num2 - 9007199254740992;
    //         arr.push(9007199254740992 * 2,num1,num2)
    //         if(numed1>9007199254740992,numed2>9007199254740992){
    //             addBigNum(num1, num2)
    //         }else{
    //             for(let i=0;i<arr.length;i++){
    //                 sum+=arr[i]
    //             }
    //             console.log(sum)
    //         }
    //     } 
    // }
}


