class CuentaBancaria {
    constructor(saldoInicial){
        this.saldo = saldoInicial;
    }

    depositar(cantidad){
        this.saldo += cantidad;
    }

    retirar(cantidad){
        if (cantidad <= this.saldo){
            this.saldo -= cantidad;
            return cantidad;
        }else{
            return "Fondos insuficientes";
        }
    }

    verSaldo(){
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(1000);

document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);

    const transactionType = document.getElementById("transactionType").value;

    if (transactionType === "deposit"){
        cuenta.depositar(amount);
    }else if (transactionType === "withdrawal"){
        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === "string"){
            alert (withdrawalResult);
        }
    }

    actualizarSaldoTiempoReal(); // actualizar saldo en tiempo real

    // document.getElementById("output2").innerHTML = `El saldo actual es: $${cuenta.verSaldo()}`;
});

// función para actualizar el saldo actual
function actualizarSaldoTiempoReal() {
    document.getElementById("saldoTiempoReal").textContent = `El saldo actual es: $${cuenta.verSaldo()}`;
}

// Mostrar saldo inicial al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    actualizarSaldoTiempoReal();
});