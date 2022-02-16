// 2
// let nameStart = prompt('What is your name')
// let age = +prompt('How old are you')
// let money = +prompt('How many dollars do you have')
// let people = +prompt('How many people')

// if (nameStart.charAt(0) == 'a', age >= 20 && age <=40) {
//     if (money >= 100, people <= 10){
//         console.log("come in");
//     }else{
//         console.log('Fuck OFF');
//     }
// }else{
//     console.log('Fuck OFF')
// }

// 1

let name = 'Alex'
let money = 10000
let account = 7777

let searchName = prompt('Как вас зовут')

switch (searchName){
    case name :
        let yourAccount = +prompt('Номер банковского счета ?')
        switch(yourAccount){
            case account:
                let howMuch = +prompt('Сколько обналичить')
                if (howMuch <= 10000){
                    console.log('Все хорошо');
                    console.log('Ваш баланс = ', money - howMuch);
                }else{
                    console.log('Не дастаточно средств');
                }
                
        }
    break;
    default:
        console.log('Undefined');
}