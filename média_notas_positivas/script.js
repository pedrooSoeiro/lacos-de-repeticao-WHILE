//1) Peça para o usuário digitar um número positivo. Caso ele digite um número negativo, continue pedindo até que ele digite um valor válido.
//2) O usuário pode digitar notas (de 0 a 10) indefinidamente. O programa só deve parar quando ele digitar um número negativo. Depois, deve exibir a média das notas.
//3) Peça para o usuário inserir valores de compras. Quando ele digitar 0, o programa exibe o total da compra.
//4) O programa pede o primeiro nome e o sobrenome separadamente. Se o usuário deixar um deles em branco, o programa pede novamente até ser preenchido corretamente.
//5) Um usuário deseja sacar um valor. O programa deve verificar se há saldo suficiente (simule um valor inicial armazenando-o em uma variável). Se não houver, deve pedir um novo valor até o saque ser possível e encerrar quando o saldo for 0 ou negativo.

let nota = Number(prompt("Digite a primeira nota, ou \n                       digite um negativo para sair"))
let soma = 0;
let contador = 0

while (nota > 0) {
    nota = Number(prompt("Digite notas de 0 a 10, se quiser a média de todas \n                       digite um negativo"))
    if (nota < 0){
        let media = soma / contador
        alert("A média dos números é " + media);
        break
    }
    soma += nota
    contador++
}
let media = soma / contador
alert("A média dos números é " + media);