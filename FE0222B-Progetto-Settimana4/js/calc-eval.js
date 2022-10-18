function elimina(calcolo) {
valore = calcolo.display.value.length;
calcolo.display.value = calcolo.display.value.substring(0, valore-1);
}
function uguale(calcolo) {
    if(calcolo.display.value.includes("!")) { valore = calcolo.display.value.length;
    n = Number(calcolo.display.value.substring(0, valore-1));
    fattoriale = 1; for(i = 2; i <= n; i++) fattoriale = fattoriale*i;
    calcolo.display.value = fattoriale;
    }
    else calcolo.display.value = eval(calcolo.display.value);
}