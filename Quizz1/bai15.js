let n= parseInt(prompt("Nhập vào số n:"));
if(n>=3){
    for(let i=1; i<=n;i++){
        let row = '';
        for(j=1;j<=i;j++){
            row =row +'*';
        }
        console.log(row);
    }
}
else{
    console.log("vui long nhập n>=3");
}