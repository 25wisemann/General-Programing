// Assignment Start
// let Evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// for (let i = 0; i < Evens.length; i++){
//     console.log(Evens[i])
// }

//1
// for(let i = 1; i < 21; i++){
//     if (i%2==0){console.log(i)}
// }

// 2
// let i = 0
// while (i <= 3){
//     alert(`number ${i}`)
//     i++
// }

//3

// while(true){

//     let value = +prompt('Enter a number', '')
//     if (!value){
//         break
//     }
//     if (value > 100){
//         berak
//     }
// }

//4
// let sum = 0
// let inputs = []
// let value = 1
// while(value){
//     let value = Number(prompt('Input number', ''))

//     // if (!value && value != "0"){
//     if (!value){ 
//         if (value === 0){
//             continue
//         }else{
//             break
//         }
//     }
//     if (value){
//         inputs.push(value)
//     }


//     sum += value
// }
// console.log(sum)

// 5

styles = ['Jazz', 'Blues']
styles.push('Rock and Roll')
console.log (styles)
styles[(styles.length - 1) / 2] = 'Classics'
console.log(styles)
console.log(styles.shift())
styles.unshift('Rap and Reggane')
console.log(styles)