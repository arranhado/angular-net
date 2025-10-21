// === Fungsi tanpa try-catch (akan crash jika error) ===
function divide(a: number, b: number): number {
    return a / b;
}

// Panggil fungsi dengan pembagi nol
console.log(divide(10, 0)); // Output: Infinity → tidak error, tapi hasil salah!

// === Fungsi dengan try-catch ===
function safeDivide(a: number, b: number): number | null {
    try {
        if (b === 0) {
            throw new Error("Pembagi tidak boleh nol!");
        }
        return a / b;
    } catch (error: any) {
        // ✅ FIXED: Proper template string and accessing error.message correctly
        console.error(`Kesalahan saat pembagian: ${error.message}`);
        return null;
    }
}

// Uji fungsi
console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: null (dengan pesan error)

// === Kesalahan: mengakses properti dari objek undefined ===
const user = undefined;

try {
    // ✅ FIXED: This would throw at runtime, so we handle it
    console.log((user as any).name); // Simulate runtime error
} catch (error: any) {
    // ✅ FIXED: Properly access error.message and fix string formatting
    console.error(`Kesalahan: ${error.message}`);
}

// === Fungsi penjumlahan dengan debugger ===
function calculateSum(a: number, b: number): number {
    debugger; // Titik henti debug (digunakan saat debugging di browser/IDE)
    return a + b;
}
console.log(calculateSum(5, 3)); // Output: 8

// === Fungsi memproses tugas dengan validasi ID ===
function processTask(taskId: number): void {
    console.log("🔄 Mulai proses tugas ID:", taskId);

    if (taskId <= 0) {
        console.error("❌ ID tugas harus lebih besar dari 0");
        return;
    }

    console.log("✅ Tugas berhasil diproses");
}

// Uji fungsi
processTask(1);   // ✅ Valid
processTask(-1);  // ❌ Tidak valid
