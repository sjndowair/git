const a = 10;
const b = 20;



const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
}



let temp = []
const myNumber = () => {
    for(let i = 0; i < 6; i++){
        temp.push(randomNumber());
    }
    return temp
}

console.log(myNumber())

const isConstNumber = (a) => {
      return a
}
console.log(isConstNumber(5))

const ab =111
const abdd = 121212

const h = "안녕";
const asd = "안녕하세요";
let temp2 = [];
const myNumber2 = () => {
    for(let i = 0; i < 6; i++){
        temp2.push(randomNumber());
    }
    return temp2
}
console.log(myNumber2())
