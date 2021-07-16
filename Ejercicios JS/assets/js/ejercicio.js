var edad = parseInt(prompt('¿Cuántos años tienes?'));
if (edad >= 18 && edad <= 79){
    alert('Cumples con el mínimo de edad para conducir.');
} else if ( edad >= 80 ){
    alert('¿Estás seguro que quieres conducir?');
} else {
    alert('Aún no puedes manejar... legalmete.')
}
