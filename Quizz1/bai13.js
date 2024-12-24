
let n = parseInt(prompt('Nhập vào số n:'));
if(n>=2){
    for( let i=1; i <= n; i++ ){
        let row ='';
        for (let j=1; j<=n ; j++){
            row = row + '*';
        }
        console.log(row);  
    }   
   
}
else{
         console.log("vui long nhập n>=2");
    }
