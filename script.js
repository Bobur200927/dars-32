
// let h = document.querySelector('h1')
// let d = document.querySelector('.container')
// let ctxt = document.querySelector('.context')
// let inp = document.querySelector('input')

// // ? ========================== MOUSE EVENTS ===================================

// // =============== keypress, keydown, keyup ==================

// // inp.addEventListener('keypress', (e)=>{
// //     console.log(e);
// // })

// window.addEventListener('keydown', (e)=>{
//     e.preventDefault()
//     // if (e.ctrlKey && e.shiftKey && e.key === 'H') {
//     //     inp.focus()
//     //     ctxt.classList.add('contextActive')
//     // }
//     console.log(e);
// })

// inp.addEventListener('input', (e)=>{
//     if (e.target.value === '123456') {
//         ctxt.classList.remove('contextActive')
//     }
// })



// ? -------- Vazifa ----------


let p = document.querySelector('p')

let cripto = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm', 'q'
]

addEventListener('keydown', (e)=>{
    for (let i = 0; i < cripto.length; i++) {
        if (cripto[i] == e.key) {
            p.innerText += cripto[i + 1]
        } else{
            p.innerText += " "
        }
        
    }
})