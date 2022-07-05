export default class Personagem {
    constructor(
        private nome:string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number
    ) {}

    // Toda vez que pensar em ler dados na classe use Parâmetros
    // Toda vez que pensar em imprimir na classe use Retorno

    status (): string {
        return `+======== ${this.nome} ================+\n` +
        `| Energia               ====== ${this.energia.toFixed(1)} ==|\n` +
        `| Vida                  ====== ${this.vida.toFixed(1)} ==|\n` +
        `| Ataque                ====== ${this.ataque.toFixed(1)} ==| \n` +
        `| Defesa                ====== ${this.defesa.toFixed(1)} ==| \n` +
        `+=====================================+`
    }

    treinarAtaque (): void {
        this.ataque += Math.random() * 7
        this.energia -= Math.random() * 10

        if(this.ataque > 100) {
            this.ataque = 0
        }
    }

    treinarDefesa (): void {
        this.defesa += Math.random() * 10
        this.energia -= Math.random() * 10

        if(this.defesa > 100) {
            this.defesa = 0
        }
    }

    descansar (tempo: number): void {
        this.energia += tempo * (Math.random() * 10)
        
        if(this.energia > 100) {
            this.energia = 100
        }
    }

    batalhar (): number {
        let desgaste: number = Math.random() * 100
        this.energia -= desgaste
        return desgaste
    }

    isDead (): boolean {
       return this.energia < 0
    }
}