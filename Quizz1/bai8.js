let n=prompt('Nhập vào số N:');
if (n <= 1) {
    console.log(`${n} không phải là số nguyên tố.`);
} else {
    let isPrime = true; // Khởi tạo biến kiểm tra số nguyên tố, mặc định là true

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false; // Nếu tìm được ước, n không phải số nguyên tố
            break;
        }
    }
    if (isPrime) {
        console.log(`${n} là số nguyên tố.`);
    } else {
        console.log(`${n} không phải là số nguyên tố.`);
    }
}
