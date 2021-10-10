const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
let message = "";
const pokedex = [];

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    pokedex: pokedex,
    message,
  });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/cadastro", (req, res) => {
  const {
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  } = req.body;
const poke = ({numero:numero,nome:nome,tipo:tipo,imagem:imagem,descricao:descricao,altura:altura,peso:peso,categoria:categoria,habilidade:habilidade})
  message = `Parabéns sua inscrição foi realizada com sucesso! `;
  pokedex.push(poke);
  res.redirect("/");
});


app.get("/detalhes", (req, res) => { 

for(let i in pokedex){
var elemento = pokedex[i];  
  console.log(elemento)
}
  res.render("detalhes", {  
    pokedex:pokedex,
    elemento
     });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);