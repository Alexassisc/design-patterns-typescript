# Singleton — Creational (Criação)

## Intenção

**Garantir que uma classe tenha somente uma instância no programa** e fornecer um **ponto de acesso global** para a mesma.

---

## Destilando a intenção

**Em vídeo:**  
https://www.youtube.com/watch?v=x9h8MgAvi_I&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=4

O **Singleton** é um **padrão de projeto** que tem a intenção de resolver **dois problemas principais** em uma aplicação:

- **Garantir que uma classe tenha somente uma instância no programa**  
  Isso é muito comum para programas que acessam **recursos compartilhados**, como:
  - **Bases de dados**
  - **Sistemas de arquivos**
  - **Interfaces gráficas**
  - **Spoolers de impressão**
  - **Módulos de um programa**

- **Fornecer um ponto de acesso global**  
  Isso deixa o **Singleton muito parecido com variáveis globais**, pois temos **um único objeto**, com **acesso global**, sendo utilizado por **várias partes da aplicação**.

Apesar de ser um dos padrões mais usados na atualidade, o **Singleton requer conhecimento e cuidado** ao ser utilizado.  
Um programador pode facilmente criar um **Singleton que gera problemas de concorrência** em uma aplicação.

---

## ⚠️ Observações importantes

Note que o **Singleton possui duas responsabilidades**, o que **quebra o princípio SRP (Single Responsibility Principle)**.

Em entrevistas realizadas anos após a criação do livro _Design Patterns_, **Erich Gamma** (um dos autores da GoF) mencionou seu interesse em **remover o Singleton** caso o livro fosse reescrito atualmente.  
Segundo ele, o uso de **Singleton quase sempre é sinal de problemas de design**.

🔗 https://bit.ly/nosingleton

---

## Estrutura

Veja a pasta **`diagramas`**.

---

## Aplicabilidade

Use o **Singleton** quando:

- **Uma classe precisa ter somente uma instância disponível em todo o programa**;
- Você perceber que está usando **variáveis globais** para manter **partes importantes do sistema**, como:
  - **Variáveis de configuração**
  - **Estados compartilhados**
  - **Serviços centrais da aplicação**

---

## Implementação — Teoria

A implementação do **Singleton** pode mudar de **linguagem para linguagem**.  
Em **Python** seria de uma forma, em **JavaScript** de outra, e em linguagens com **tipagem estática**, como **TypeScript**, de outra.

No entanto, o **conceito geral** segue estes passos:

1. **Declarar um campo privado** na classe para armazenar a **instância do Singleton**;
2. **Declarar um método público (getter)** para obter essa instância;
3. Na chamada do método público, adicionar **lazy instantiation**:
   - Se a instância **já existir**, retorná-la;
   - Caso contrário, **criar uma nova instância** e retorná-la;
4. **Impedir a criação de novas instâncias**, tornando o **construtor da classe privado**.

---

## Consequências

### ✅ Bom

- **Acesso controlado**, por meio de **encapsulamento**, à instância única;
- Possibilidade de permitir um **número variável de instâncias** (variações do padrão);
- Possibilidade de uso de **thread lock** para evitar que duas partes do código alterem o Singleton simultaneamente;
- Uso de **lazy instantiation**, criando a instância **somente quando necessário**.

---

### ❌ Ruim

- **Mais difícil de testar**;
- **Viola o princípio da responsabilidade única (SRP)**;
- **Requer tratamento especial** em casos de **concorrência**;
