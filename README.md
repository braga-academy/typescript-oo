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

### Exemplificando uma classe **Personagem**

atributos   | Métodos
----------- | ------
nome        | treinarAtaque
energia     | treinarDefesa
vida        | desafiar
ataque      | 
defesa      |

### Encapsulamento

Conforme o próprio nome sugere, a proposta é **isolar o máximo possível** a nossas classes, de forma a esconder detalhes de funcionamento interno.

Visa aumentar a **flexibilidade**, melhorar a **manutenção** e aumentar a **extensibilidade** do software.

### Modificadores de Acesso

Modificadores de Acesso nos permitem configurar a **visibilidade** dos nossos **atributos, classes** e **métodos**.

Modificador | Visibilidade
----------- | ------
public      | (+)
private     | (-)
protected   | (#)

#### public

Utilizada de forma restrita, apenas quando desejamos que outras classes "enxerguem" nossa classe, método ou atributo. Tona visível em todo o projeto.

**Métodos**, sempre que possível não devem ser públicos, mas normalmente são.

é a visibilidade **padrão em typescript.**

#### private

Utilizada sempre que possível. Torna a visibilidade apenas local (mesmo arquivo), tornando invisível para outras classes.

**Atributos** normalmente são privados.

**Métodos** que implementam rotinas internas (métodos auxiliares) devem ser privados.

#### protected

Torna visível por classes herdadas (conceito abordado a seguir).

Utilizado, **eventualmente**, quando trabalhando com herança.

### Métodos de Acesso

Métodos que tem como única funcionalidade **prover acesso** aos atributos privados os quais julgamos que **devem** se acessados.

#### Características

- Retornam o tipo de atributo que será provido o acesso;
- Não recebem parâmetro;
- Seu nome é composto pelo prefixo *"get"* seguido do nome do atributo que o acesso será provido.

### Métodos modificadores

Métodos que tem como única funcionalidade **prover modificação** aos atributos privados os quais julgamos que **podem** ser modificados por outras classes.

#### Características

- Não possuem retorno;
- Recebe por parâmetro o valor a ser inserido no atributo;
- Seu nome é composto pelo prefixo *"set"* seguido do nome do atributo que iremos possibilitar a modificação.

> Crio o atributo privado e depoiscrio método para acessar e modificar!?
> 
> Por quê??

#### O Motivo

**Por que** nos métodos de acesso podemos **controlar** como a informação será retornada (no caso dos *gets*) e que tipo de dado será aceito para modificação (no caso dos *sets*)

