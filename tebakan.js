const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let random = Math.ceil(Math.random() * 5)

readline.question(`Tebak berapa angkanya?`, myAnswer => {
    let answer = parseInt(myAnswer)
    if (answer == random) {
        console.log(`!!!TEBAKAN ANDA BENAR!!! angkanya adalah ${random}`)
    } else if (answer < random) {
        console.log(`/////SALAH/////\ntebakan anda terlalu KECIL, jawabnnya adalah ${random}`)
    } else if (answer > random) {
        console.log(`/////SALAH/////\ntebakan anda terlalu BESAR, jawabnnya adalah ${random}`)
    } else if (isNaN(answer)) {
        console.log('kamu belum menginput apa pun')
    }
    readline.close();
})
