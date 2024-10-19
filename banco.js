class CuentaBancaria {
    constructor(saldoInicial, titular) {
        this.saldoInicial = saldoInicial;
        this.titular = titular;
    }
    depositar(monto) {
        let ITF = monto * 0.005;
        this.saldoInicial += (monto - ITF);
        return `Se ha depositado $${monto} a la cuenta bancaria.<br>Impuesto de ITF: $${ITF} <br>`;
    }
    retirar(monto) {
        if (monto <= this.saldoInicial) {
            let ITF = monto * 0.005;
            this.saldoInicial -= (monto + ITF);
            return `Se ha retirado $${monto} a la cuenta bancaria.<br>Impuesto de ITF: $${ITF} <br>`;
        } else {
            return 'Fondos insuficientes para retirar.<br>';
        }
    }
    verSaldo() {
        return `Saldo actual del titular ${this.titular} es: $${this.saldoInicial} <br>`;
    }
}

let cuenta;

function realizarDeposito(event) {
    event.preventDefault();
    const titular = document.getElementById('titular').value;
    const saldoInicial = parseFloat(document.getElementById('saldo').value);
    const deposito = parseFloat(document.getElementById('deposito').value);

    if (!cuenta) {
        cuenta = new CuentaBancaria(saldoInicial, titular);
    }
    const resultado = cuenta.depositar(deposito);
    mostrarResultado(resultado);
}

function realizarRetiro(event) {
    event.preventDefault();
    if (!cuenta) {
        mostrarResultado('Primero debes crear la cuenta con un depósito inicial.');
        return;
    }
    const retiro = parseFloat(document.getElementById('retiro').value);
    const resultado = cuenta.retirar(retiro);
    mostrarResultado(resultado);
}

function verSaldo(event) {
    event.preventDefault();
    if (!cuenta) {
        mostrarResultado('Primero debes crear la cuenta con un depósito inicial.');
        return;
    }
    const resultado = cuenta.verSaldo();
    mostrarResultado(resultado);
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerHTML += mensaje;
}


