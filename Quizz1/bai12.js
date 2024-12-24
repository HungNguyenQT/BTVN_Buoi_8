let n = prompt("Nhập vào số  (2 <= n <= 10):");
if(2<=n && n<=10){
    for(let i =1; i<=10; i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
else {
    console.log('vui lòng nhập vào số n trong khoảng từ 2 đến 10.');
}