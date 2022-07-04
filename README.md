# Orientação a objetos com TypeScript

Baseado na playlist:
https://www.youtube.com/watch?list=PLDqnSpzNKDvnh-0RCYbIL5WzGCCFV1Ghm

## 4 Pilares Pincipais

- Abastração
- Encapsulamento
- Herança
- Polimorfismo

## Classe

Abastração do que há em comum (em termos de **Caracteristicas** e **Comportamentos**) a um conjunto de objetos.

Classe    | &nbsp;
--------- | ------
Atributos | <- Características
Métodos   | <- Comportamentos

Sendo assim, uma classe sempre será composta basicamente por: **Nome, Atributos e Métodos**.

### Objeto

O objeto pode ser definido como: "**Uma instância de uma classe**".

Combina a estrutura de dados (atributos) e o comportamento des dados (operações/métodos) em uma única entidade.

Um objeto pode ser definido como um conceito, uma abastração, algo com limites nítidos e significado em relação ao mundo.

Objetos servem como uma base real para a elaboração de um sistema consistente com a realidade modelada.

Ex: *Um* livro, *um* telefone, *uma* Faculdade, *um* Produto, *um* Aluno, *um* Professor.

### Classe e Objeto

- Classe é o que projetamos
- Objeto é o que criamos a partir da classe
- As classes estão para os objetos assim como as plantas arquitetônicas estão para as casas.

Vejamos como exemplo uma classe **Carro**

atributos   | Métodos
----------- | ------
marca       | acelerar
modelo      | trocarMarcha
ano         | ...
potencia    | 
...

Agora um objeto chamado **Camaro**

atributos   | Valores
----------- | ------
marca       | Chevrolet
modelo      | Camaro
ano         | 2022
potencia    | 400cv
...         |...