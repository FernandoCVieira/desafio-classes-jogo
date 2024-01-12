document.addEventListener("DOMContentLoaded", function() {
    const btHeroi = document.getElementById("btHeroi");
    btHeroi.addEventListener("click", function() {
        infoHeroi();
    });

    const btLimpar = document.getElementById("btLimpar");
    btLimpar.addEventListener("click", function() {
        limparCampos();
    });
});

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        var tipoAtaque = "";
        switch (this.tipo) {
            case "mago":
                tipoAtaque = "magia";
                break;
            case "guerreiro":
                tipoAtaque = "espada";
                break;
            case "monge":
                tipoAtaque = "artes marciais";
                break;
            case "ninja":
                tipoAtaque = "shuriken";
                break;
            default:
                console.error("Tipo de herói inválido.");
                return;
        }

        var outHeroi = document.getElementById("outHeroi");
        if (outHeroi) {
            var titulo = `O herói chamado ${this.nome} é um ${this.tipo} e tem uma idade ${this.idade} e atacou usando ` + tipoAtaque;
            outHeroi.innerHTML = "<p>" + titulo + "</p>";
        } else {
            console.error("Elemento 'outHeroi' não encontrado.");
        }
    }
}

function infoHeroi() {
    //debugger;
    var nomeHeroi = document.getElementById("heroi");
    var idadeHeroi = document.getElementById("idade");
    var tipoHeroi = document.getElementById("tipo");

    var nome = nomeHeroi.value;
    var idade = Number(idadeHeroi.value);
    var tipo = tipoHeroi.value.toLowerCase();

    if (!nome || !idade || !tipo) {
        console.error("Preencha todos os campos.");
        return null;
    }

    var classeDoHeroi = new heroi(nome, idade, tipo);
    classeDoHeroi.atacar();

    return classeDoHeroi;
}

function limparCampos() {
    location.reload();
    document.getElementsByName("nome-heroi").focus();
}