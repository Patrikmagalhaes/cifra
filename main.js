const button = document.getElementById('btn')

button.addEventListener("click", function cifraDeCesar(){

// Função para criptografar o texto usando a Cifra de César

    // Obtém o texto do campo de entrada
    var texto = document.getElementById('input').value;

    //array com as letras do alfabeto
    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Define o deslocamento que sera realizado
    var deslocamento = 3;

    //variável para o texto criptografado
    var textoCriptografado = '';

    // Loop através de cada caractere no texto
    for (var i = 0; i < texto.length; i++) {
        // pega o caractere atual
        var letraAtual = texto[i];

        // Verifica se o caractere atual está no alfabeto
        if (alfabeto.includes(letraAtual)) {
            // pega o índice do caractere atual no alfabeto
            var indiceAtual = alfabeto.indexOf(letraAtual);

            // Calcula o novo índice com o deslocamento
            var novoIndice = (indiceAtual + deslocamento) % alfabeto.length;

            // Adiciona o novo caractere ao texto criptografado
            textoCriptografado += alfabeto[novoIndice];
        } else {
            // Se o caractere atual não estiver no alfabeto, adiciona-o ao texto criptografado como está
            textoCriptografado += letraAtual;
        }
    }

    // Exibe o texto criptografado na página
    document.getElementById('output').innerText = textoCriptografado;



})