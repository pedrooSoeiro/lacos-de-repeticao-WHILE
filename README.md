# Exercícios de Estruturas de Repetição (While) - JavaScript

Este repositório contém uma série de exercícios práticos desenvolvidos para exercitar a lógica de programação utilizando o laço de repetição `while` em JavaScript.

---

## 📝 Descrição dos Desafios

### 1. Validação de Número Positivo
**Objetivo:** Impedir que o programa avance enquanto o usuário não digitar um número válido (positivo).
* **Conceito chave:** Filtro de entrada de dados.
* **Lógica:** O loop `while` verifica se o número é menor que zero e solicita uma nova entrada até que a condição seja falsa.

### 2. Média de Notas Indefinidas
**Objetivo:** Calcular a média aritmética de várias notas, parando apenas quando um número negativo for inserido.
* **Conceito chave:** Acumuladores e contadores.
* **Lógica:** Uma variável `soma` armazena o total das notas e um `contador` rastreia quantas entradas foram feitas para realizar a divisão final.

### 3. Somatório de Compras
**Objetivo:** Somar valores de produtos e exibir o total quando o usuário digitar `0`.
* **Conceito chave:** Ponto de parada (sentinela).
* **Lógica:** O programa acumula os valores inseridos e encerra a execução assim que o valor `0` é detectado, exibindo o montante final.

### 4. Validação de Campos Obrigatórios
**Objetivo:** Garantir que o Nome e o Sobrenome sejam preenchidos, não permitindo campos vazios.
* **Conceito chave:** Operadores lógicos (`||`) e comparação de strings.
* **Lógica:** O laço repete os `prompts` caso qualquer um dos campos esteja vazio (`""`), garantindo a integridade dos dados no sistema.

### 5. Simulação de Saque Bancário
**Objetivo:** Gerenciar um saldo bancário fixo, permitindo múltiplos saques até que o dinheiro acabe.
* **Conceito chave:** Controle de fluxo e verificação de saldo.
* **Lógica:** O programa verifica se há saldo suficiente antes de cada operação. Se não houver, solicita um novo valor; se houver, subtrai do saldo total até chegar a zero ou menos.

---

## 🚀 Tecnologias Utilizadas
* **JavaScript **
* **Ambiente de execução:** VisualStudioCode)

## 💡 Aprendizados
Durante o desenvolvimento destes exercícios, foram explorados:
* Prevenção de **loops infinitos**.
* Diferença entre operadores de atribuição (`=`) e comparação (`===`).
* Importância da ordem de atualização de variáveis dentro do laço.
