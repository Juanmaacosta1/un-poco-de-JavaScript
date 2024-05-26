let num1 =5;
let num2 =7;
let num3 =10;
let mayor , menor;
//primero
if (num1>=num2 && num1>=num3) {
    mayor =num1;
}else{
    if (num1<=num2 && num1<=num3) {
       menor=num1;
    }
}
//Segundo
if (num2>=num1 && num2>=num3) {
   mayor=num2;
}else{
    if (num2<=num1 && num2<=num3) {
        menor=num2;
    }
}
//tercero
if (num3>=num1 && num3>=num2) {
    mayor=num3;
}else{
    if (num3<=num1 && num3<=num2) {
        menor=num3;
    }
}
console.log("el mayor es: ", mayor);
console.log("el menor es: ", menor);