import { Mage } from "./Mage";
import { Personagem } from "./Personagem";
import { Priest } from "./Priest";
import { Warior } from "./Warrior";

let mage: Personagem = new Mage('Lady Melisandre')
let warrior: Personagem = new Warior('Jon Snow')
let priest: Personagem = new Priest('Samwell Tarly')

console.log('mage:', mage)
console.log('warrior:', warrior)
console.log('priest:', priest)
