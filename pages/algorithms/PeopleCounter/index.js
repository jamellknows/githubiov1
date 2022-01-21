//

let count = 0;
let sum = 0;
console.log(count);


function increment(){
    count = count + 1;
    document.getElementById("count-el").textContent = "People in my kitchen: " + count;

}

function total()
{
    sum = sum+count;
    document.getElementById("total-el").textContent ="Total:" + sum;
}

function save(){
    let countStr = count + "-";
    document.getElementById("save-el").textContent += countStr;
    total()
    count = 0;
    
}


