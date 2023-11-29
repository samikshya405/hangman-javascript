let lives=5
// document.getElementById("lives").innerHTML='You have ' + lives + " lives left."
function clicking(pass){
    
    let here = splited.indexOf(pass)

    if (here>=0){
        document.getElementById("message").innerHTML ="oho.....you saved life"
        
        abcSplited[here] =pass
        document.getElementById("demo").innerHTML =abcSplited;
        if(splited==abcSplited){
            document.getElementById("lives").innerHTML = "YOU WIN!"

        }



    }
    else{
        document.getElementById("message").innerHTML ="oh no.....you loose life"
        lives = lives-1
        document.getElementById("lives").innerHTML='You have ' + lives + " lives left."
        if(lives===0){
            document.getElementById("demo").innerHTML =splited
            document.getElementById("lives").innerHTML = "YOU LOOSES!"
        }
       

    }
}


const wordList = ["science","math","nepali","english","social",'optional']


let guess = Math.random()*wordList.length
let randomNum = parseInt(guess)
let randomWord =wordList[randomNum]
console.log(randomWord)
let randomWordLength = randomWord.length
console.log(randomWordLength)
let splited =randomWord.split('')
console.log(splited)

console.log(splited.indexOf('a'))

// function dash(){
//     for(let i=0;i<randomWordLength;i++){
//         document.getElementById("memo").innerHTML +="__ "
//     }
//     let abc = document.getElementById("memo").innerHTML
//     let abcSplited = abc.split(' ')
//     console.log(abcSplited)
// }
// dash()
for(let i=0;i<randomWordLength;i++){
    document.getElementById("memo").innerHTML +="__ "
}
let abc = document.getElementById("memo").innerHTML
let abcSplited = abc.trim().split(' ')
console.log(abcSplited)

// let fName ='samikshya'

// let newb = fName.split('');
// newb[1] ="q"
// console.log(newb)
// let arri = ['w','j']
// let brri = ['w','j']
// let g= arri.concat()
// console.log(g)

// if (arri===brri){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

