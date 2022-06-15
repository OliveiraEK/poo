class Celular {
    constructor(modelo,marca,android,bateria,memoria){
        this.modelo = modelo
        this.marca = marca
        this.android = android
        this.bateria = bateria
        this.memoria = memoria
    }
    model(newAndroid){
        this.android += newAndroid
        console.log(`Novo modelo do Android: ${this.android}`)
    }

}
let cel = new Celular('Xiaomi mi 8 lite', 'Xiaomi', 10, '3350 mAh', '64gb')
console.log(cel)
cel.model(1)