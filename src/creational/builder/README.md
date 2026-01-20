# 🏗️ Builder — Creational (Criação)

## 🎯 Intenção

**Separar a construção de um objeto complexo da sua representação**, de modo que o **mesmo processo de construção** possa criar **diferentes representações**.

---

## 📌 Destilando a intenção

🎥 Em vídeo:  
https://www.youtube.com/watch?v=2VwLvwsIu-8&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=6

A intenção acima significa que o padrão **Builder**:

- 🔹 Separa o **código que cria** do **código que usa** o objeto
- 🔹 Trata da criação de **objetos realmente complexos**, como:
  - Objetos com **construtores muito grandes**
  - Objetos **compostos por vários outros objetos** (composite)
  - Objetos com **algoritmo de criação complexo**

Além disso, o padrão:

- ✅ Permite a criação de um objeto **em etapas**
- ✅ Permite **method chaining** (encadeamento de métodos)
- ✅ Permite que o objeto final **varie em dados e até em tipo**

---

## 🛠️ Implementação

📂 Veja o código nesta mesma pasta.

---

## 🧩 Estrutura

📐 Veja a pasta **diagramas** nesta mesma pasta.

---

## 📍 Aplicabilidade

Use o **Builder** quando:

- ✔️ A criação do objeto se tornar **complexa**
- ✔️ Você quiser que o código seja capaz de gerar **diferentes representações** do mesmo objeto
- ✔️ Quiser evitar **construtores gigantes**
- ✔️ Precisar de mais **legibilidade** no processo de criação

---

## ⚖️ Consequências

### 👍 Pontos positivos

- ✅ Separa a **criação** da **utilização** dos objetos
- ✅ O cliente **não precisa criar objetos diretamente**
- ✅ O mesmo código pode construir **objetos diferentes**
- ✅ Ajuda na aplicação dos princípios:
  - **SRP** (Single Responsibility Principle)
  - **OCP** (Open/Closed Principle)

### 👎 Pontos negativos

- ❌ O código final pode se tornar **mais complexo**
- ❌ Pode introduzir **mais classes** no sistema

---

## 🧠 Resumo rápido

> O **Builder** é ideal quando criar um objeto não é simples  
> e você quer **controle, clareza e flexibilidade** no processo de construção.
