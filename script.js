//1. Data input dari element HTML

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

// const numbers= document.querySelectorAll(".number")

// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         updateScreen(event.target.value)
//     })
// })


//2. Menyimpan angka dan operator untuk kalkulasi

//definisi angka dan operator
let prevNumber= ''
let calculationOperator = ''
let currentNumber = '0'

//memberikan number yang di klik ke currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }else{
        //bisa menampilkan lebih dari 1 string angka dengan penambahan + pada screen
        currentNumber += number
    }
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


//definisikan function inputOperator
// const inputOperator = (operator) => {
//     prevNumber = currentNumber
//     calculationOperator = operator
//     currentNumber = ''
// }

// defenisikan function operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

//jalankan function inputOperator saat Operator diklik
const operators= document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//3. mengaktifkan fungsi kalkulasi

//menambahkan click event pada '='
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    //jalankan function calculate ketik '=' diklik
    calculate()
    updateScreen(currentNumber)
})

//Definisikan function calculate
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            //mengubah tipe data penambahan jadi float agar tidak digabungkan string
            result= parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result= prevNumber - currentNumber
            break
        case "*":
            result= prevNumber * currentNumber
            break
        case "/":
            result= prevNumber / currentNumber
            break
        default:
            return
    }
    //simpan hasil kalkulasi ke curruntNumber
    currentNumber = result
    calculationOperator = ''
}

//Membuat tombol AC berjalan

//function clearAll
const clearAll = (operator) => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')

//aktifkan tombol click AC
clearBtn.addEventListener('click', () => {
    //jalankan function calculate ketik '=' diklik
    clearAll()
    updateScreen(currentNumber)
})

//kalkulsi Angka desimal

const decimal = document.querySelector('.decimal')

//function decimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}



//aktifkan tombol click AC
decimal.addEventListener('click', (event) => {
    //jalankan function calculate ketik '=' diklik
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
