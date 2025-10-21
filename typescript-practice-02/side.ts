import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});
//Input nama
rl.question('Masukan Nama Anda :',(nama:string) =>{
    //Output nama
    console.log(`Halo${nama},selamat datan !`);
    //Input ummur
    rl.question('Berapa umur anda?',(umur:string)=>{
        //ouput umur
        console.log(`${nama}berumur ${umur}tahun`);
        rl.close();
    });
});
