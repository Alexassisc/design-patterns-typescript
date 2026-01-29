# 🏭 Factory Method — Creational (Criação)

## 🎯 Intenção

**Definir uma interface para criar um objeto**, mas deixar que **as subclasses decidam qual classe instanciar**.  
O **Factory Method permite adiar a instanciação** para as subclasses.

---

## 📚 Sobre o Factory Method

📺 **Vídeo:**  
https://www.youtube.com/watch?v=1rB0PhvAwiU&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=10

🔹 É um **padrão de projeto de criação** (lida com a criação de objetos)  
🔹 **Oculta a lógica de instanciação** do código cliente  
🔹 O **método fábrica** é responsável por instanciar os objetos  
🔹 É obtido através de **herança**  
🔹 O método fábrica pode ser **criado ou sobrescrito pelas subclasses**  
🔹 Dá **flexibilidade ao código cliente**, permitindo novas factories sem alterar código existente (**OCP**)  
🔹 Pode usar **parâmetros** para decidir:

- qual objeto criar
- quais valores enviar para o construtor

---

## 🧩 Estrutura

📁 Veja a pasta **diagramas**.

---

## ✅ Aplicabilidade

Use o **Factory Method** quando:

✔️ **Não souber exatamente quais tipos de objetos** o código vai precisar  
✔️ Quiser **permitir extensão** das factories para novos objetos (**Open/Closed Principle**)  
✔️ Precisar **desacoplar o código que cria do código que usa** os objetos (**Single Responsibility Principle**)  
✔️ Quiser dar um **hook (gancho)** para que subclasses decidam a lógica de criação  
✔️ Precisar **eliminar duplicação de código** na criação de objetos

---

## 🧠 Implementação — Teoria

⚠️ **Observação importante:**  
Todos os objetos criados por um Factory Method são chamados de **Product (Produto)**.

### Passos clássicos:

1️⃣ **Crie uma interface comum** para todos os produtos  
👉 Ex: `Product`

2️⃣ **Crie classes concretas** que implementam essa interface  
👉 Ex: `ConcreteProductA`, `ConcreteProductB`

3️⃣ **Crie a classe Creator**  
🔹 Contém ou implementa o **Factory Method**  
🔹 Pode conter lógica adicional  
🔹 Normalmente **não é apenas uma interface**

4️⃣ **Crie subclasses do Creator (ConcreteCreators)**  
🔹 Cada uma implementa o Factory Method  
🔹 Podem retornar **produtos diferentes**, desde que implementem `Product`

---

## ⚖️ Consequências

### ✅ Bom

✔️ Facilita o **Open/Closed Principle**  
✔️ Facilita o **Single Responsibility Principle**  
✔️ Melhora o **desacoplamento** do código  
✔️ Centraliza e organiza a criação de objetos

### ❌ Ruim

⚠️ Pode causar **explosão de subclasses**  
⚠️ Uma classe `Creator` para cada `ConcreteProduct`  
⚠️ Só vale a pena quando **a herança já é necessária**

---
