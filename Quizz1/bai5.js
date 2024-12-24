let a =prompt("Nhập vào số a:");
let b= prompt("Nhập vào số b:");
let x = prompt("Nhập vào số x:");
if (a >= b) {
    console.log("Vui lòng nhập a < b.");
} else {
    let result = -1; // Giá trị mặc định nếu không tìm thấy
    for (let i = a; i <= b; i++) {
        if (i % x === 0) {
            result = i; // Gán số đầu tiên chia hết cho x
            break; // Thoát khỏi vòng lặp vì đã tìm thấy số nhỏ nhất
        }
    }

    if (result !== -1) {
        console.log(`Số nhỏ nhất trong khoảng [${a}, ${b}] chia hết cho ${x} là: ${result}`);
    } else {
        console.log(`Không có số nào trong khoảng [${a}, ${b}] chia hết cho ${x}.`);
    }
}