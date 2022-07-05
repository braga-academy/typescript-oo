export default class Personagem {
    constructor(
        private _nome:string,
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number
    ) {}

    // Toda vez que pensar em ler dados na classe use Parâmetros
    // Toda vez que pensar em imprimir na classe use Retorno

    
    public get nome() : string {
        return this._nome
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    private get energia() : number {
        return this._energia
    }
    
    private set energia(energia : number) {
        this._energia = energia;
    }

    private get vida() : number {
        return this._vida
    }
    
    private set vida(vida : number) {
        this._vida = vida;
    }

    private get ataque() : number {
        return this._ataque
    }
    
    private set ataque(ataque : number) {
        this._ataque = ataque;
    }

    private get defesa() : number {
        return this._defesa
    }
    
    private set defesa(defesa : number) {
        this._defesa = defesa;
    }

    public status (): string {
        return `+======== ${this.nome} ================+\n` +
        `| Energia               ====== ${this.energia.toFixed(1)} ==|\n` +
        `| Vida                  ====== ${this.vida.toFixed(1)} ==|\n` +
        `| Ataque                ====== ${this.ataque.toFixed(1)} ==| \n` +
        `| Defesa                ====== ${this.defesa.toFixed(1)} ==| \n` +
        `+=====================================+`
    }

    public treinarAtaque (): void {
        this.ataque += Math.random() * 7
        this.energia -= this.randomizar(10)

        if(this.ataque > 100) {
            this.ataque = 0
        }
    }

    public treinarDefesa (): void {
        this.defesa += this.randomizar(10)
        this.energia -= this.randomizar(10)

        if(this.defesa > 100) {
            this.defesa = 0
        }
    }

    public descansar (tempo: number): void {
        this.energia += tempo * this.randomizar(10)
        
        if(this.energia > 100) {
            this.energia = 100
        }
    }

    public batalhar (): number {
        let desgaste: number = this.randomizar(100)
        this.energia -= desgaste
        return desgaste
    }

    public isDead (): boolean {
       return this.energia < 0
    }

    private randomizar(fator: number): number {
        return Math.random() * fator
    }
}