const n = prompt("Nhập vào số n:"); // Thay giá trị n tại đây (n >= 1)
if (n <= 0) {
    console.log("Vui lòng nhập n >= 1.");
} else {
    let count = 0; // Khởi tạo biến đếm số ước
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++; // Nếu i là ước của n, tăng biến đếm
        }
    }
    console.log(`Số ước của ${n} là: ${count}`);
}
