
// Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
let m = parseInt(prompt('Nhập vào chiều rộng m:'));
let n =parseInt(prompt('Nhập vao chiều dài n:'));
if(m>=2 && n>=2){
    for(let i=0;i<n;i++){
        let row ='';
        for( j=0; j<m;j++){
            row += '*';
        }
        console.log(row);
    }
}
else{
    console.log("vui lòng nhập lại chiều dài và chiều rộng");
}

// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
