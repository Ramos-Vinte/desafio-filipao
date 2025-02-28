let nomeHeroi = "Ramos";
let xpHeroi=7000 ;
let Nivel = "";
if(xpHeroi < 1000){
    Nivel = "Ferro";
}
else if(xpHeroi >=1001 && xpHeroi<= 2000){ 
    Nivel = Bronze;
}
else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    Nivel = "Prata";
}
else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    Nivel = "Ouro";
} else if(xpHeroi >= 7001 && xpHeroi <= 8000 ){
    Nivel = "Platina";
} else if(xpHeroi >= 8001 && xpHeroi <= 10000){
    Nivel = "Ascendente";
} else if(xpHeroi >= 10000){
    Nivel = "Radiante";
}
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${Nivel}`);
