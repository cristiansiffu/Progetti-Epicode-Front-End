let variabile = document.getElementById("not-eval");
function inserimentoNotEval(valore){	
	variabile.value+=valore;
}

function operazioni(){
		let arrayNumeri = [];
        
        if(variabile.value.includes("+")){
            arrayNumeri = variabile.value.split("+");
            return Number(arrayNumeri[0]) + Number(arrayNumeri[1]);
		}
		
		else if(variabile.value.includes("-")){
            arrayNumeri = variabile.value.split("-");
            return Number(arrayNumeri[0]) - Number(arrayNumeri[1]);
		}
		
		else if(variabile.value.includes("/")){
            arrayNumeri = variabile.value.split("/");
            return Number(arrayNumeri[0]) / Number(arrayNumeri[1]);
		}

        else if(variabile.value.includes("%")){
            arrayNumeri = variabile.value.split("%");
            return Number(arrayNumeri[0]) % Number(arrayNumeri[1]);
        }
		
		else{
            arrayNumeri = variabile.value.split("*");
            return Number(arrayNumeri[0]) * Number(arrayNumeri[1]);
		}
        
}
		
function ugualeNotEval(){	
    let valore = operazioni();
    variabile.value = valore;
}
	
function pulisciNotEval(){
	variabile.value=" ";	
}

function eliminaNotEval(){
	variabile.value = variabile.value.slice(0,-1);	
}