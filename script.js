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
let pocketmoney=0;
const costOfApple = 10;
let noOfApple = 0;
let AppleElem  = document.querySelector("#noOfApple");

function addApple(){
    noOfApple++;
    appleElem .value = noOfApple;
    total = total + costOfApple;
    document.querySelector("#totalbill").innerHTML = total;
}
function subApple(){
    if (noOfApple > 0){
        noOfApple--;
        appleElem .value = noOfApple;
        total = total - costOfApple;
        document.querySelector("#totalbill").innerHTML = total;
    }
}


const costOfOrange = 15;
let noOfOrange = 0;
let OrangeElem = document.querySelector("#noOfOranges");

function addOrange(){
     noOfOrange++;
     OrangeElem . value = noOfOrange;
     total = total + costOfOranges;
     document.querySelector("#totalbill").innerHTML = total;
}
function subOrange(){
    if (noOfOrange > 0){
        noOfOrange--;
        OrangeElem.value = noOfOrange;
        total = total - costOfOranges;
        document.querySelector("#totalbill").innerHTML = total;
    }
}


const costOfBanana = 7;
let noOfBanana = 0 ;
let BananaElem = document.querySelector("#noOfBanana");

function addBanana(){
    noOfBanana++;
    BananaElem.value = noOfBanana;
    total = total + costOfBanana;
    document.querySelector("#totalbill").innerHTML = total;
}
function subBanana(){
    if (noOfBanana > 0){
    noOfBanana--;
    BananaElem . value = noOfBanana;
    total = total - costOfBanana;
    document.querySelector("#totalbill").innerHTML = total;
    }
}
