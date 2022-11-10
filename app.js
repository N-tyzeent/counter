// let counter = document.querySelector('.counter')
// console.log(counter);
// console.log(typeof counter.textContent)

// let buttons = document.querySelectorAll('button')
// console.log(buttons);

// buttons[0].addEventListener('click', ()=>{
//     let res = Number(counter.textContent) -1;
//     counter.textContent = res

//     if (res < 0){
//         document.body.style.backgroundColor = 'red'
//     }
// });








// let counter = document.querySelector(".counter");
// console.log(counter);

// let buttons = document.querySelectorAll("button");

// console.log(buttons);

// console.log(typeof counter.textContent);

// let num = 0;

// buttons[0].addEventListener("click", ()=> {
//     num --;
//     counter.textContent = num;
// });






// ASSIGNMENT


let counter = document.querySelector('.counter')
console.log(counter);
console.log(typeof counter.textContent)

let buttons = document.querySelectorAll('button')
console.log(buttons);

buttons[0].addEventListener('click', ()=>{
    let res = Number(counter.textContent) -1;
    counter.textContent = res

    if (res < 0){
        document.body.style.backgroundColor = 'red'
    }

    else if (res == 0){
        document.body.style.backgroundColor = 'blue'
    }
});


buttons[1].addEventListener('click', ()=>{
    counter.textContent = 0
    document.body.style.backgroundColor = 'blue'

});


buttons[2].addEventListener('click', ()=>{
    let res = Number(counter.textContent) +1;
    counter.textContent = res

    if (res > 0){
        document.body.style.backgroundColor = 'green'
    }

    else if (res == 0){
        document.body.style.backgroundColor = 'blue'
    }
});

