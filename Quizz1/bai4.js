let n = prompt("Nhập vào số n:");
let factorial =1; 
if(n<0){
    console.log("Giai thừa không được định nghĩa cho số âm.");
}
else{
    for(let i=1; i<= n; i++){
        factorial = factorial *i;
    }
    console.log(`Giai thừa của số ${n} là: ${factorial}`);
}