// let res = 1;

// for(let i = 1; i <= 10; i++) {
    
//     res = res * 2;
//     console.log(res);
// }


let chuslo = Math.floor(Math.random() * 3) + 1;



do {
    let res = +prompt('vvedit chuslo');
    if(res == chuslo) {
        alert("bingo");
    } else if(res > chuslo) {
        alert("too hight");
    } else {
        alert("too low");
    }

} while (!(res == chuslo))