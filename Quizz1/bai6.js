let n= prompt('Nhập vào  số n:');
if (n < 2) {
    console.log("Vui lòng nhập n >= 2.");
} else {
    let S = 0; // Khởi tạo biến lưu giá trị tổng

    for (let i = 1; i <= n; i++) {
        S += 1 / (i * (i + 1)); // Tính từng phần tử của tổng và cộng dồn
    }

    console.log(`Giá trị của S với n = ${n} là: ${S}`);
}
