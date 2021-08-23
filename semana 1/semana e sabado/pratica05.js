//divisiveis por 18 - 10 ae 500

//para mostrar o ultimo
for(i=10; i<=500;i++){
    if(i%18 == 0){
       console.log(`Achei um numero ${i}`);
       break;
    }
}

for(i=500; i>=10;i--){
    if(i%18 == 0){
       console.log(`Achei um numero ${i}`);
       break;
    }
}

