// Classe mãe
class Cachorro {
    constructor(raca, nome, idade, especialidade) {
        this.raca = raca;
        this.nome = nome;
        this.idade = idade;
        this.especialidade = especialidade;
    }

    latir() {
        console.log(this.nome + " está latindo");
    }
}

// Classe filha CachorroPolicial
class CachorroPolicial extends Cachorro {
    constructor(raca, nome, idade, especialidade) {
        super(raca, nome, idade, especialidade);
    }

    // Método específico da classe CachorroPolicial
    farejar() {
        console.log(this.nome + " está farejando");
    }
}

// Classe filha CachorroArtista
class CachorroArtista extends Cachorro {
    constructor(raca, nome, idade, especialidade) {
        super(raca, nome, idade, especialidade);
    }

    // Método específico da classe CachorroArtista
    posar() {
        console.log(this.nome + " está posando");
    }
}

// Instanciando os objetos
const cachorroPolicial = new CachorroPolicial("pastor alemão", "Bob", "5 anos", "farejador");
const cachorroArtista = new CachorroArtista("Shitzu", "Chico", "4 anos", "modelo");

// Testando os métodos
console.log(cachorroPolicial);
cachorroPolicial.latir();
cachorroPolicial.farejar();

console.log(cachorroArtista);
cachorroArtista.latir();
cachorroArtista.posar();
