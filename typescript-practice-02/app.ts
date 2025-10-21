// === Konstanta (const) ===
const appName: string = "Aplikasi To-Do Angular";
const version: number = 1.0;
const isProduction: boolean = false;
console.log("Aplikasi:", appName);
console.log("Versi:", version);
console.log("Produksi:", isProduction);
// Coba ubah nilai const → akan error saat compile!
// appName = "Aplikasi Baru"; // Error: Cannot assign to 'appName' because it is a constant.

// === Variabel yang bisa diubah (let) ===
let currentUser: string = "admin";
let taskCount: number = 0;
console.log("Pengguna:", currentUser);
console.log("Jumlah tugas:", taskCount);
// Ubah nilai
currentUser = "user123";
taskCount = 5;
console.log("Pengguna baru:", currentUser);
console.log("Jumlah tugas baru:", taskCount);

// === Tipe any (bisa berisi apa saja) ===
let dynamicData: any = "Ini string";
7
console.log("Dynamic:", dynamicData);
dynamicData = 123; // Boleh!
console.log("Dynamic:", dynamicData);
dynamicData = true; // Boleh!
console.log("Dynamic:", dynamicData);
// Tapi ini bisa menyebabkan error di kemudian hari
// Jangan gunakan di proyek besar!
console.log("----------------------");
function showWelcome ():void{
    console.log("Selemata Datang Di Aplikasi Angular !");
    
}
let h = showWelcome();
console.log("Nilai h:",h);