// function productos(){
//     let munecasVendidas = document.getElementById('munecasVendidas').value
//     let payasosVendidos = document.getElementById('payasosVendidos').value;
//     let pesoMunecas = munecasVendidas * 75;
//     let pesoPayasos = payasosVendidos * 112;
//     let pesoTotal = math.ceil((pesoMunecas + pesoPayasos)/1000);
//     document.write(`<h1>El número de paquetes es: ${pesoTotal} con un peso total de: ${pesoMunecas+pesoPayasos} gramos`);
// }

function productos(){
    let munecasVendidas = document.getElementById("munecasVendidas").value;
    let payasosVendidos = document.getElementById("payasosVendidos").value;
    let pesoMunecas = munecasVendidas * 75;
    let pesoPayasos = payasosVendidos * 112;
    let pesoTotal= Math.ceil((pesoMunecas + pesoPayasos)/1000);
    document.write(`<h1>El numero de paquetes es: ${pesoTotal} con un peso total de: ${(pesoMunecas+pesoPayasos)/1000}g </h1>`);
}
