const questions = [
  {
    category: "JavaScript Objects",
    question: "Qual sintaxe é usada para acessar a propriedade 'nome' de um objeto usuario?",
    choices: [
      "usuario[nome]",
      "usuario->nome",
      "usuario.nome"
    ],
    answer: "usuario.nome"
  },

  {
    category: "JavaScript Objects",
    question: "Qual método converte um objeto JavaScript em JSON?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()"
    ],
    answer: "JSON.stringify()"
  },

  {
    category: "JavaScript Objects",
    question: "Como adicionar uma nova propriedade chamada idade ao objeto pessoa?",
    choices: [
      "pessoa->idade = 20",
      "pessoa.add(idade = 20)",
      "pessoa.idade = 20"
    ],
    answer: "pessoa.idade = 20"
  },

  {
    category: "JavaScript Arrays",
    question: "Qual método adiciona um elemento ao final de um array?",
    choices: [
      "push()",
      "pop()",
      "shift()"
    ],
    answer: "push()"
  },

  {
    category: "JavaScript Objects",
    question: "O que Object.keys(obj) retorna?",
    choices: [
      "Os valores do objeto",
      "As chaves do objeto em um array",
      "O tamanho do objeto"
    ],
    answer: "As chaves do objeto em um array"
  }
];

function getRandomQuestion(questions){
  return questions[Math.floor(Math.random() * questions.length)]
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)]
}

function getResults(question, computerChoice){
  if (computerChoice === question.answer){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}