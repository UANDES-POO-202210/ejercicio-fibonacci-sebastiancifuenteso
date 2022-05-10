function fibonacci(x){
    if (x===0){
        return 0;
    }
    if (x===1){
        return 1;
    }
    if (x>=2){
        var f=[0,1];
        for(var i =2; i<=x;i++){
            var r=f[i-1]+f[i-2];
            f.push(r);
        }
        return f[x];
    }

}

var fs = require('fs');
let n = fs.readFileSync('numero.txt', 'utf-8'); 
console.log(fibonacci(n));