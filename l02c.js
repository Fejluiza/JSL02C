/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
valor da média do aluno para qualquer condição. */

let nota1 = parseInt(prompt("Digite a 1° nota do aluno:"))
let nota2 = parseInt(prompt("Digite a 2° nota do aluno:"))
let nota3 = parseInt(prompt("Digite a 3° nota do aluno:"))
let nota4 = parseInt(prompt("Digite a 4° nota do aluno:"))

let mediafinal

mediafinal = (nota1 + nota2 + nota3 + nota4) / 4

if (mediafinal >= 5){
    alert("Aluno aprovado! Parabens!! Media final: "+ mediafinal)
} else{
    alert("Aluno reprovado! Media final: "+ mediafinal)
}
