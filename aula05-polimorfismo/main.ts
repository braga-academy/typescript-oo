import { Mage } from "./src/Mage";
import { Personagem } from "./src/Personagem";
import { Priest } from "./src/Priest";
import { Warior } from "./src/Warrior";

let mage: Personagem = new Mage('Lady Melisandre')
let warrior: Personagem = new Warior('Jon Snow')
let priest: Personagem = new Priest('Samwell Tarly')
// let personagem: Personagem = new Personagem('Tyrion Lannister')

const personagens: Personagem[] = []
personagens.push(mage, priest, warrior)
// personagens.push(priest)
// personagens.push(warrior)

personagens.forEach((p) => console.log(p.atacar()))


// console.log('mage:', mage)
// console.log('warrior:', warrior)
// console.log('priest:', priest)
