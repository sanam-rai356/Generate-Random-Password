const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number =  "0123456789";
const symbol = "@!#$%*{()^[];,.<>=+_-";
let passwordButton = document.getElementById('passwordButton');
const allChars = upperCase + lowerCase + lowerCase +symbol;
let copyImg = document.getElementById('copyImg')

passwordButton.addEventListener('click',()=>{
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
     
     while(length>password.length){
         password += allChars[Math.floor(Math.random()*allChars.length)];
     }
     passwordBox.value=password;
})


copyImg.addEventListener('click',()=>{
    passwordBox.select();
    document.exeCommand("copy"); 
})


window.addEventListener('load',()=>{
    passwordBox.value="";

})
