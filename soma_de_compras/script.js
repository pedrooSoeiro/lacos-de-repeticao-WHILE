//1) Peça para o usuário digitar um número positivo. Caso ele digite um número negativo, continue pedindo até que ele digite um valor válido.
//2) O usuário pode digitar notas (de 0 a 10) indefinidamente. O programa só deve parar quando ele digitar um número negativo. Depois, deve exibir a média das notas.
//3) Peça para o usuário inserir valores de compras. Quando ele digitar 0, o programa exibe o total da compra.
//4) O programa pede o primeiro nome e o sobrenome separadamente. Se o usuário deixar um deles em branco, o programa pede novamente até ser preenchido corretamente.
//5) Um usuário deseja sacar um valor. O programa deve verificar se há saldo suficiente (simule um valor inicial armazenando-o em uma variável). Se não houver, deve pedir um novo valor até o saque ser possível e encerrar quando o saldo for 0 ou negativo.

let numero = Number(prompt("Me mande o valor da sua primeira compra"))
let soma = 0

    while(numero > 0) {
        soma+=numero
        numero = Number(prompt("Comprou mais?! Me fale o valor também.\nSe não comprou mais nada só digitar 0"));

}
alert("Todas suas compras deram " + soma);