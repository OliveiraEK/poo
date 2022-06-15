class Animal{
    //criar os atributos
    constructor(tipo,nome,som,idade){
        this.tipo = tipo
        this.nome = nome
        this.som = som
        this.idade = 12
    }

    //criar o método latir
    latir(){
        console.log(`${this.nome} disse ${this.som}`)
    }
    fazerNiver(novaIdade){
        this.idade += novaIdade
        console.log(`O ${this.nome} fez aniversario de ${this.idade} anos`)
    }
}
let zeca = new Animal('cachorro','Zeca', 'auau',12)
zeca.latir()
zeca.fazerNiver(1)