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