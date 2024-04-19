const divAnterior = document.querySelector(".operacao-anterior");
const divAtual = document.querySelector(".operacao-atual");
const clearButton = document.querySelector("#clear-button");
const botao7 = document.querySelector("#botao7");
const botao8 = document.querySelector("#botao8");
const botao9 = document.querySelector("#botao9");
const botao6 = document.querySelector("#botao6");
const botao5 = document.querySelector("#botao5");
const botao4 = document.querySelector("#botao4");
const botao3 = document.querySelector("#botao3");
const botao2 = document.querySelector("#botao2");
const botao1 = document.querySelector("#botao1");
const botao0 = document.querySelector("#botao0");
const botaoSoma = document.querySelector("#botaoSoma");

const botaoDivisao = document.querySelector("#botaoDivisao");
const botaoModulo = document.querySelector("#botaoModulo");
const botaoSubtracao = document.querySelector("#botaoSubtracao");
const botaoMultiplicao = document.querySelector("#botaoMultiplicacao");

const botaoCalcular = document.querySelector("#equals");
const botaoPonto = document.querySelector("#ponto");
const botaoDel = document.querySelector("#botaoDel");

class Calculadora {
  constructor(opAnterior, opAtual) {
    this.opAnterior = "";
    this.opAtual = "";
    this.operacao = "";
  }
  clear() {
    divAtual.textContent = "";
    divAnterior.textContent = "";
    this.opAnterior = "";
    this.opAtual = "";
    this.operacao = "";
  }
  inserir(valor) {
    if (valor === "." && this.opAtual.includes(".")) return;
    this.opAtual = this.opAtual + valor;
  }
  delete() {
    this.opAtual = this.opAtual.slice(0, this.opAtual.length - 1);
    console.log(this.opAtual);
  }
  salvarOperacao(operacao) {
    if (divAtual.innerHTML === "") return;
    if (this.operacao !== "") {
      this.calcular();
    }
    this.operacao = operacao;
    this.opAnterior = this.opAtual;
    this.opAtual = "";
  }
  calcular() {
    let resultado;
    if (this.opAnterior === "" || this.opAtual === "") return;
    switch (this.operacao) {
      case "+":
        resultado = parseFloat(this.opAnterior) + parseFloat(this.opAtual);
        break;
      case "-":
        resultado = parseFloat(this.opAnterior) - parseFloat(this.opAtual);
        break;
      case "x":
        resultado = parseFloat(this.opAnterior) * parseFloat(this.opAtual);
        break;
      case "/":
        resultado = parseFloat(this.opAnterior) / parseFloat(this.opAtual);
        break;
      case "%":
        resultado = parseFloat(this.opAnterior) % parseFloat(this.opAtual);
        break;
    }
    this.opAtual = resultado.toString();
    this.opAnterior = "";
    this.operacao = "";
  }
  mostrar() {
    divAtual.innerHTML = this.opAtual.toString();
    divAnterior.innerHTML = `${this.opAnterior} ${this.operacao}`;
  }
}
const calculadora = new Calculadora(divAnterior, divAtual);
clearButton.addEventListener("click", function () {
  calculadora.clear();
});
botao7.addEventListener("click", function () {
  calculadora.inserir(botao7.innerHTML);
  calculadora.mostrar();
});
botao8.addEventListener("click", function () {
  calculadora.inserir(botao8.innerHTML);
  calculadora.mostrar();
});
botao9.addEventListener("click", function () {
  calculadora.inserir(botao9.innerHTML);
  calculadora.mostrar();
});
botao6.addEventListener("click", function () {
  calculadora.inserir(botao6.innerHTML);
  calculadora.mostrar();
});
botao5.addEventListener("click", function () {
  calculadora.inserir(botao5.innerHTML);
  calculadora.mostrar();
});
botao4.addEventListener("click", function () {
  calculadora.inserir(botao4.innerHTML);
  calculadora.mostrar();
});
botao3.addEventListener("click", function () {
  calculadora.inserir(botao3.innerHTML);
  calculadora.mostrar();
});
botao2.addEventListener("click", function () {
  calculadora.inserir(botao2.innerHTML);
  calculadora.mostrar();
});
botao1.addEventListener("click", function () {
  calculadora.inserir(botao1.innerHTML);
  calculadora.mostrar();
});
botao0.addEventListener("click", function () {
  calculadora.inserir(botao0.innerHTML);
  calculadora.mostrar();
});
botaoPonto.addEventListener("click", function () {
  calculadora.inserir(botaoPonto.innerHTML);
  calculadora.mostrar();
});
botaoSoma.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoSoma.innerHTML);
  calculadora.mostrar();
});
botaoSoma.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoSoma.innerHTML);
  calculadora.mostrar();
});
botaoDivisao.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoDivisao.innerHTML);
  calculadora.mostrar();
});
botaoSubtracao.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoSubtracao.innerHTML);
  calculadora.mostrar();
});
botaoMultiplicao.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoMultiplicao.innerHTML);
  calculadora.mostrar();
});
botaoModulo.addEventListener("click", function () {
  calculadora.salvarOperacao(botaoModulo.innerHTML);
  calculadora.mostrar();
});
botaoCalcular.addEventListener("click", function () {
  calculadora.calcular();
  calculadora.mostrar();
});
botaoDel.addEventListener("click", function () {
  calculadora.delete();
  calculadora.mostrar();
});
