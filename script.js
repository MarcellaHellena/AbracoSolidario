const favoriteItems = new Set();

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");
    const categoryButtons = document.querySelectorAll(".category");
    const items = document.querySelectorAll(".item");
    const favoriteButtons = document.querySelectorAll(".favorite-button");

    // Função de pesquisa
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        items.forEach(item => {
            const title = item.querySelector(".item-title").textContent.toLowerCase();
            const description = item.querySelector(".item-description").textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });

    //Função de curtir
    favoriteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const item = this.closest(".item");
            if (!item) return; // segurança contra null
    
            if (!favoriteItems.has(item)) {
                this.textContent = "❤️";
                favoriteItems.add(item);
                item.classList.add("favorite");
            } else {
                this.textContent = "🤍";
                favoriteItems.delete(item);
                item.classList.remove("favorite");
            }
        });
    });
    
  
    // Função de filtragem por categoria
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.textContent.trim().toLowerCase();
            console.log(category);
            items.forEach(item => {
                const title = item.querySelector(".item-category").textContent.toLowerCase();
                console.log(title);
                if (category.includes("favorito")) {
                    if (favoriteItems.has(item)) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                } else if (category === "todos" || title.includes(category)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                 
            });
        });
    });
});

//mobile, a categoria fica horizontal
document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelector('.categories');

    function ajustarCategorias() {
        categories.style.display = "flex"; 
        categories.style.flexWrap = "nowrap"; 
        categories.style.justifyContent = "center"; 
        categories.style.alignItems = "center"; 
        categories.style.gap = "10px"; 
    }

    window.addEventListener("resize", ajustarCategorias);
    ajustarCategorias(); 
});


//login cliente
document.addEventListener("DOMContentLoaded", () => {
    const clienteButton = document.getElementById("cliente");
    clienteButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      loadClientePage();
    });
  

  
 //Usuário
  function loadClientePage() {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página de Login - Usuário</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .login-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
          }
          .login-container h1 {
            color: #333;
            margin-bottom: 20px;
          }
          .login-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
          }
          .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          .login-container button:hover {
            background-color: #0056b3;
          }
          .login-container a {
            display: block;
            margin-top: 15px;
            color: #007BFF;
            text-decoration: none;
          }
          .login-container a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="login-container">
          <h1>Login - Usuário</h1>
          <form>
            <input type="text" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>
            <button onclick="abrirNovaTela()">Entrar</button>
          </form>
          <a href="#">Esqueceu a senha?</a>
        </div>
      </body>
      </html>
    `;
    document.open();
    document.write(htmlContent);
    document.close();
  }

  // Instituição
  const instituicaoButton = document.getElementById("Instituição");
  instituicaoButton.addEventListener("click", (event) => {
    event.preventDefault();
    loadInstituicaoPage(); 
  });
});
  //Instituição
  function loadInstituicaoPage() {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página de Login - Instituição</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .login-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
          }
          .login-container h1 {
            color: #333;
            margin-bottom: 20px;
          }
          .login-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
          }
          .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          .login-container button:hover {
            background-color: #0056b3;
          }
          .login-container a {
            display: block;
            margin-top: 15px;
            color: #007BFF;
            text-decoration: none;
          }
          .login-container a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="login-container">
          <h1>Login - Instituição</h1>
          <form>
            <input type="text" placeholder="CNPJ" required>
            <input type="text" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>
            <button onclick="abrirNovaTela()">Entrar</button>
          </form>
          <a href="#">Esqueceu a senha?</a>
        </div>
      </body>
      </html>
    `;
  
   
    document.open();
    document.write(htmlContent);
    document.close();
  }


  function abrirNovaTela() {
    const novaJanela = window.open('', '_blank');
    const htmlContent = `
        <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Caridade</title>
    <style>
        body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #9fccc3;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .item-title{
    font-weight: bold;
  }
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
  
  header h1 {
    font-size: 2em;
    margin: 0;
  }
  
  .user-icon {
    top: 10px;
    left: 10px;
  }
  
  .user-icon img {
    width: 150px;
    height: auto;
  }
  
  .banner img {
    width: 80%;
    display: block;
    border-radius: 10px;
    align-content: center;
  }
  
  .search {
    display: flex;
    margin-bottom: 20px;
  }
  
  .search input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1em;
  }
  
  .categories {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .categories::-webkit-scrollbar {
    display: none;
  }
  
  .category {
    background-color: #ffffff;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 150px;
    height: 60px;
    justify-content: center;
    cursor: pointer;
  }
  
  .category img {
    width: 40px;
    height: 40px;
  }
  
  .items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .item {
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    position: relative;
    align-items: center;
  }
  
  .item-image {
    width: 120px;
    height: 120px;
    background-color: #ddd;
    border-radius: 8px;
    margin-right: 15px;
    overflow: hidden;
  }
  
  .item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .item-details {
    flex: 1;
    position: relative;
  }
  
  .item-category {
    position: absolute;
    top: 10px;
    right: 50px;
    background-color: #FFD700;
    color: black;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.9em;
    font-weight: bold;
    z-index: 2;
  }
  
  .favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    border: none;
    padding: 8px;
    border-radius: 50%;
    font-size: 1.2em;
    z-index: 3;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
    
    .categories {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    
    .category {
      flex: 1 1 45%;
      max-width: 150px;
      height: auto;
      font-size: 0.9em;
      padding: 10px;
    }
  
    .category img {
      width: 30px;
      height: 30px;
    }
  
    .item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .item-image {
      width: 100%;
      max-width: 180px;
      height: auto;
    }
    
    .item-category {
      position: static;
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  
  }
  
  #rodape{  
    background-color: white;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-content: center;
  }
  
  #info{
    width: 80%;
    margin: 10px;
    text-align: right;
    color: #6e6e6ecc;
  }
  
  #imagem_rodape{
    text-align: left;
  }
    </style>
</head>
<body>
   <div class="container">
     
        <section class="banner">
            <img src="imagens/banner - Copia (2).png" alt="Banner">
        

        <section class="search">
            <input type="text" placeholder="Pesquise aqui...">
        </section>
        
        <section class="categories">
            <button class="category"><img src="imagens/todos-removebg-preview.png">Todos</button>
            <button class="category"><img src="imagens/brinquedo.png">Brinquedos</button>
            <button class="category"><img src="imagens/sapato-removebg-preview.png">Calçados</button>
            <button class="category"><img src="imagens/comida-removebg-preview.png">Comida</button> 
            <button class="category"><img src="imagens/pasta-removebg-preview.png">Higiene Pessoal</button>
            <button class="category"><img src="imagens/roupa-removebg-preview.png">Roupas</button> 
            <button class="category"><img src="imagens/coberto-removebg-preview.png">Roupa de cama</button>
            <button class="category">❤️ Favoritos</button>
        </section>

        <section class="items">
            <div class="item">
                <div class="item-image"> <img src="imagens/instituicao02.png"></div>
                <div class="item-details">
                  <div class="item-title">Recanto da Sabedoria</div>  
                  <div class="item-description">
                      Avenida Lucrecia, 456, Bairro São João, SP. CEP: 98765-432. <br>
                      <br> Somos o Recanto da Sabedoria, um lar acolhedor para idosos que merecem todo o carinho e respeito.
                  </div>
              </div>
              <div class="item-category">Calçados <br> Comida <br> Higiene Pessoal <br> Roupas <br> Roupa de cama </div>
              
                <button class="favorite-button">🤍</button>
            </div>
            <div class="item">
                <div class="item-image"> <img src="imagens/florescer.png">  </div>
                <div class="item-details">
                    <div class="item-title">Instituto Florescer</div>
                    <div class="item-description">Rua das Orquídeas, 123, Bairro Primavera, Cidade da Esperança, SP. CEP: 12345-678. 
                      <br> <br> Somos o Instituto Florescer, um amparo para aqueles em situação de vulnerabilidade, 
                      oferecendo acolhimento, <br>
                      apoio e a chance de reconstruir suas vidas. </div>
                </div>
        
                <div class="item-category">Brinquedos <br> Calçados <br> Comida <br> Higiene Pessoal <br> Roupas <br> Roupa de cama</div>
                <button class="favorite-button">🤍</button>
            </div>

            <div class="item">
                <div class="item-image"> <img src="imagens/casatodos.png"> </div>
                <div class="item-details">
                    <div class="item-title">Casa de Todos</div>
                    <div class="item-description">Alameda da Alegria, 222, Bairro Feliz, Cidade da Esperança, SP. CEP: 24680-135. 
                      <br> <br> Somos o Instituto Casa de Todos, um espaço de reabilitação para quem busca um novo começo com 
                      dignidade e apoio.</div>
                </div>
                <div class="item-category">Calçados <br> Comida <br> Higiene Pessoal <br> Roupas <br> Roupa de cama</div>
                <button class="favorite-button">🤍</button>
            </div>

            <div class="item">
                <div class="item-image"> <img src="imagens/cachorro.png"></div>
                <div class="item-details">
                    <div class="item-title">Patas Felizes</div>
                    <div class="item-description">Avenida da Acolhida, 777, Bairro Fraterno, Cidade do Amor, SP. CEP: 32109-876. 
                      <br> <br> Somos o Instituto Patas Felizes, um refúgio para animais abandonados e vítimas de maus-tratos.</div>
                </div>
                <div class="item-category">Brinquedos <br> Comida <br> Higiene Pessoal</div> 
                <button class="favorite-button">🤍</button>
            </div>

            <div class="item">
                <div class="item-image"><img src="imagens/sonhocolorido.png"></div>
                <div class="item-details">
                    <div class="item-title">Sonho Colorido</div>
                    <div class="item-description">Estrada da Natureza, 101, Bairro Ecológico, Cidade Sustentável, SP. CEP: 13579-246. 
                      <br> <br> Somos o Instituto Sonho Colorido, um farol de esperança para crianças em comunidades carentes.</div>
                </div>
                <div class="item-category">Brinquedos <br> Calçados <br> Comida <br> Higiene Pessoal <br> Roupas <br> Roupa de cama</div>
                <button class="favorite-button">🤍</button>
              
            </div>

        </section>
        <footer id="rodape">
            <div id="imagem_rodape">
                <img id="imagem_rodape" src="imagens/rodape2.png">
            </div>

          <div id="info">
            Projeto voluntário realizado por Ana Lívia, Eliandra, Marcella, Rafaela. <br>
            Contato: instagram instagram instagram
          </div>
           
        </footer>
    </div> 
    <script src="script.js"> </script>
</body>
</html>
    `;

    novaJanela.document.open();
    novaJanela.document.write(htmlContent);
    novaJanela.document.close();
}