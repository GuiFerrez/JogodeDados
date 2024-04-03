
// Função para retornar um número aleatório entre 1 e 6
function diceRandom(){
    return Math.round(Math.random() * 5) + 1;
}

//Variável para receber o id do button
const btn = document.querySelector("#btn")



// aqui vc aplica um evento de escuta com um parametro de "click", onde ao clickar ele vai iniciar a função a frente
btn.addEventListener("click", function(){
    // Variáveis criadas para receber um número aleatório atraves da função diceRandom
    let randomNumber1 = diceRandom();
    let randomNumber2 = diceRandom();

    // Aqui na primeira linha ele atribui o nome do arquivo da img em uma variável, exemplo(randomDice = "dice1.png")
    // logo em seguida ele cria outra variável atribuindo o caminho da imagem, exemplo( randomImageSource1 ="img/dice1.png")
    // e por fim ele seleciona uma tag específica no caso img index 0, e na parte de src ele atribui o caminho
    let randomDice1 = "dice" + randomNumber1 + ".png";
    let randomImageSource1 = "img/" + randomDice1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1)

    let randomDice2 = "dice" + randomNumber2 + ".png";
    let randomImageSource2 = "img/" + randomDice2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2)

// Uma condicional bem simples para dizer quem ganhou ou se houve empate
    if (randomNumber1 > randomNumber2){
        document.querySelector("h3").innerHTML = "Jogador 1 ganhou! 🏆"
    }else if (randomNumber1 < randomNumber2){
        document.querySelector("h3").innerHTML = "Jogador 2 ganhou! 🏆"
    }else{
        document.querySelector("h3").innerHTML = "Empate! 😲"
    }
    
}
)