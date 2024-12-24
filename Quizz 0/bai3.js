// tổng các số chẵn
let s = 0;
for(let i = -10; i <= 50; i++){
    if(i % 2 ==0){
        s += i;
    }
}
console.log("Tổng các số chẵn từ -10 -> 50 là:",s);
// các số chia hết cho 9
for(let i =-100; i<=100; i++){
    if(i%9 ===0){
        console.log("các số chia hết cho 9 trong đoạn [-100;100] là :",i );
    }
}
// dùng while để in ra dãy số từ 1 đến 200
let i= 1;
while(i<=200){
    console.log(i);
    i++;
}

// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
let a  = prompt("Nhập vào chuỗi s:") ;
let l = parseInt(prompt("Nhập vào 1 số:"));
while(a.length<l){
    a += 'a';
}
console.log("Chuỗi sau khi xử lý:",a);
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
let x =prompt("nhập vào số x (0<=x<y<=100):");
let y =prompt("nhập vào số y (0<=x<y<=100):");
if(x>=0 && x<y && y<=100){
    while(x<y){
        console.log(`x = ${x}, y = ${y}`);
        x++;
        y--;
    }
    console.log(`Kết thúc: x = ${x}, y = ${y}`);
}
else{
    console.log('giá trị không hợp lệ vui lòng kiểm tra lại số đã nhập nằm trong khoảng 0 <= x < y <= 100:');
}