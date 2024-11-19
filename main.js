import colecao_signos from '../zodiac-sign-now/Dados/dados.js';
import retorna_signo from '../zodiac-sign-now/funções/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);