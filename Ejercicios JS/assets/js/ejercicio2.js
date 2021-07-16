// 2. Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

//BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA



do{
    var cali = parseInt(prompt('¿Cuál es tu calificación?'));

    if (Number(cali) == cali){
        if (cali > 0 && cali <= 10){
            if (cali < 3){
                alert('Muy deficiente');
            } 
            else if (cali < 5 ){
                alert('Insuficiente');
            }
            else if (cali < 6){
                alert('Suficiente');
            }
            else if (cali < 7){
                alert('Bien');
            }
            else if (cali < 9){
                alert('Notable');
            }
            else if (cali >= 9){
                alert('Sobresaliente');
            }
        }
        else {
            alert('Nota erronea');
        }
        
    }
    else {
		if (cali != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido"); }   
        }
        
} while (cali != undefined);
