//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.


// Criando a função.
function numeroPrimo(number) {
    // Se o número for menor que 2 retornar falso, pois não existem número primos menor que 2.    
    if (number < 2) {
        return false;
    }
    // Percorre por todos os números de 2 até a sua raiz quadrada.
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    // Se o número não for divisivel por 2 ou ate sua raiz quadrada, o número é primo.
    return true;
}

// Exemplo de uso da função.
console.log(numeroPrimo(7)); // Número Primo, então retorna true
console.log(numeroPrimo(6)); // Número não primo, então retorna false
console.log(numeroPrimo(383)); // Número Primo, então retorna true
console.log(numeroPrimo(951)); // Número não primo, então retorna false


//2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.


// Criando a função.
function validarSenha(senha) {
    // Criando a constante para validar a senha.
    const temLetraMaiscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const tem8caracteres = senha.length >= 8;

    if (temLetraMaiscula && temLetraMinuscula && temNumero && tem8caracteres) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de uso da função.
const Senha1 = "Senha@123";
const Senha2 = "senhafraca";
const Senha3 = "SENHA123";
console.log(validarSenha(Senha1)); // senha válida por isso retorna true.
console.log(validarSenha(Senha2)); // senha invalida por isso retorna false.
console.log(validarSenha(Senha3)); // senha invalida por isso retorna false.



//3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.


// Criando a função.
function calcularFatorial(numero) {
    // Se o número for igual a 0 e 1 retornar 1.
    if (numero === 0 || numero === 1) {
        return 1;
    }
    var resultado = 1;
    for (var i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
// Exemplo de uso da função para calcular o fatorial de 0 a 10.
for (var n = 0; n <= 10; n++) {
    var fatorial = calcularFatorial(n);
    console.log("Fatorial de " + n + ": " + fatorial);
}


//4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.


// Criando a função.
function verificarQuadradoPerfeito(numero) {
    // Se o número for menor que 0 retornar falso.
    if (numero < 0) {
        return false;
    }
    // Verificar se o determinado número e quadrado perfeito.
    var raiz = Math.sqrt(numero);
    return raiz % 1 === 0;
}
// Exemplos de uso:
console.log(verificarQuadradoPerfeito(16)); // true - pois 4 x 4 da 16, que é um quadrado perfeito.
console.log(verificarQuadradoPerfeito(49)); // true - pois 7 x 7 da 49, que é um quadrado perfeito.
console.log(verificarQuadradoPerfeito(10)); // false - pois não é um quadrado perfeito.