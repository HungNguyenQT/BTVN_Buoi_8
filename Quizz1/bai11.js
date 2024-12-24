// Máy tính tạo ra một số ngẫu nhiên từ 1 đến 20
let correct = Math.floor(Math.random() * 20) + 1;

// Số lần người dùng có thể đoán
let attempts = 0;
let maxAttempts = 5;

// Lặp lại cho đến khi người dùng đoán đúng hoặc vượt quá 5 lần thử
while (attempts < maxAttempts) {
    let answer = parseInt(prompt("Nhập số bạn đoán (từ 1 đến 20):"));

    // Kiểm tra nếu người dùng đoán đúng
    if (answer === correct) {
        console.log("Đoán đúng!");
        break; // Dừng vòng lặp khi đoán đúng
    } else {
        console.log("Đoán sai, thử lại!");
        attempts++;
    }
    // Kiểm tra nếu người dùng đã thử quá 5 lần
    if (attempts === maxAttempts) {
        console.log("Bạn đã thua cuộc!");
    }
}
