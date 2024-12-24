// Nhập m và n từ người dùng
let m = parseInt(prompt("Nhập số m (m > 0):"));
let n = parseInt(prompt("Nhập số n (n > 0):"));
// Kiểm tra điều kiện m > 0 và n > 0
if (m > 0 && n > 0) {
    // Tính UCLN bằng thuật toán Euclid
    let a = m;
    let b = n;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    let uclnResult = a; // UCLN là giá trị của a sau khi vòng lặp kết thúc

    // Tính BCNN theo công thức BCNN = (m * n) / UCLN
    let bcnnResult = (m * n) / uclnResult;

    // In kết quả UCLN và BCNN
    console.log(`Ước chung lớn nhất của ${m} và ${n} là: ${uclnResult}`);
    console.log(`Bội chung nhỏ nhất của ${m} và ${n} là: ${bcnnResult}`);
} else {
    console.log("Vui lòng nhập các số m và n lớn hơn 0.");
}
