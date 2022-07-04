import prompt from 'prompt-sync'
// nome, energia, vida, ataque, defesa

// classe
class Personagem {
    // atributos
    // nome: string = ''
    // energia: number = 0
    // vida: number = 0
    // ataque: number = 0 
    // defesa: number = 0

    // metodos
    constructor(
        public nome:string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {
        // this.nome = nome
        // this.energia = 50
        // this.ataque = 50
    }
}

let sansa: Personagem
sansa = new Personagem('Sansa Stark', 40, 50, 20, 10)

// sansa.nome = 'Sansa Stark'
// sansa.ataque = 10
// sansa.defesa = 20
// sansa.energia = 50
// sansa.vida = 100

// let jon: Personagem = new Personagem()
// jon.nome = "Jon Snow"
// jon.ataque = 80
// jon.defesa = 70
// jon.energia = 90
// jon.vida = 40

// console.log('person: ', sansa);
// console.log('person: ', jon);

let teclado = prompt()

let option: number = 0

while(option != 9) {
    console.log('+======== Personagem ============+')
    console.log('1. Treinar Ataque');
    console.log('2. Treinar Defesa');
    console.log('3. Imprimir Atributos');
    console.log('9. Sair');
    
    option = +teclado('Escolha uma ação: ')

    switch(option) {
        case 1:
            sansa.ataque += 2
            break
        case 2:
            sansa.defesa += 2
            break
        case 3:
            console.log('Sansa: ', sansa)            
            break
        default:
            break
    }
}
