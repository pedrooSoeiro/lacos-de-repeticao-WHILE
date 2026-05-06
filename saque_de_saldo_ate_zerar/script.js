//1) Peça para o usuário digitar um número positivo. Caso ele digite um número negativo, continue pedindo até que ele digite um valor válido.
//2) O usuário pode digitar notas (de 0 a 10) indefinidamente. O programa só deve parar quando ele digitar um número negativo. Depois, deve exibir a média das notas.
//3) Peça para o usuário inserir valores de compras. Quando ele digitar 0, o programa exibe o total da compra.
//4) O programa pede o primeiro nome e o sobrenome separadamente. Se o usuário deixar um deles em branco, o programa pede novamente até ser preenchido corretamente.
//5) Um usuário deseja sacar um valor. O programa deve verificar se há saldo suficiente 
//(simule um valor inicial armazenando-o em uma variável). Se não houver, deve pedir um novo valor até o saque ser possível e encerrar quando o saldo for 0 ou negativo.

let saldo = 3000;
let valor = Number(prompt("Sou a IA do seu banco.\nSeu saldo é R$" + saldo + "\nQuanto quer sacar?"));

while (saldo > 0) {

    if (valor <= saldo) {
        saldo = saldo - valor;
        alert("Realizei seu saque aqui! Sobrou de saldo restante: R$" + saldo);

        if (saldo <= 0) {
            break;
        }

        valor = Number(prompt("Quanto mais quer sacar? Seu saldo: R$" + saldo + ")"));
    } else {
        valor = Number(prompt("Não tem saldo pra isso não paizão! Você tem apenas R$" + saldo + ".\nDigite um valor menor:"));
    }
}

alert("Conta encerrada ou saldo zerado. Até logo seu liso!");