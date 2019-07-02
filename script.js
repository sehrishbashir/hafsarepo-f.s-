// function minus(){
//     if(document.getElementById("inp").value>0)
//     {
//           document.getElementById("inp").value--;
//           document.getElementById('totalAmount').innerHTML=document.getElementById("inp").value;
//      }
// }
// function plus(){
//      document.getElementById("inp").value++;
//      document.getElementById('totalAmount').innerHTML=document.getElementById("inp").value;
// }

let total = 0;

const costOfApple = 10;
let noOfApple = 0;
let appleElem  = document.querySelector("#noOfApple");

function addApple(){
    noOfApple++;
    appleElem .value = noOfApple;
    total = total + costOfApple;
    document.querySelector("#totalamount").innerHTML = total;
}
function subApple(){
    if (noOfApple > 0){
        noOfApple--;
        appleElem .value = noOfApple;
        total = total - costOfApple;
        document.querySelector("#totalamount").innerHTML = total;
    }
}


const costOfOrange = 15;
let noOfOrange = 0;
let orangeElem = document.querySelector("#noOfOrange");

function addOrange(){
     noOfOrange++;
     orangeElem .value = noOfOrange;
     total = total + costOfOrange;
     document.querySelector("#totalamount").innerHTML = total;
}
function subOrange(){
    if (noOfOrange > 0){
        noOfOrange--;
        orangeElem.value = noOfOrange;
        total = total - costOfOranges;
        document.querySelector("#totalamount").innerHTML = total;
    }
}


const costOfBanana = 7;
let noOfBanana = 0 ;
let BananaElem = document.querySelector("#noOfBanana");

function addBanana(){
    noOfBanana++;
    BananaElem.value = noOfBanana;
    total = total + costOfBanana;
    document.querySelector("#totalamount").innerHTML = total;
}
function subBanana(){
    if (noOfBanana > 0){
    noOfBanana--;
    BananaElem . value = noOfBanana;
    total = total - costOfBanana;
    document.querySelector("#totalamount").innerHTML = total;
    }
}

