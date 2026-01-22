# Prototype – Creational (Criação)

## 🎯 Intenção

**Especificar os tipos de objetos a serem criados usando uma instância-protótipo** e criar novos objetos **pela cópia desse protótipo**.

---

## 🧠 Destilando a intenção

📺 **Em vídeo:**  
https://www.youtube.com/watch?v=Z-_smcjkdwM&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=8

A intenção acima significa que você pode criar **objetos protótipos** que possuem um método específico (**`clone`**) para **copiar seus dados em um novo objeto**.

👉 Isso **evita a recriação de objetos caros ou complexos**, tornando o código mais eficiente e flexível.

---

## ⚙️ Implementação

Veja o **código dessa mesma pasta**.

---

## 🧩 Estrutura

Veja a pasta **diagramas** nessa mesma pasta.

---

## ✅ Aplicabilidade

Use o **Prototype** quando:

- **Precisar que seu código não dependa de classes concretas** para a criação de novos objetos;
- **Quiser evitar explosão de subclasses** para objetos muito similares;
- **Quiser evitar a recriação de objetos “caros” ou “complexos”**.

---

## ⚖️ Consequências

O que é bom ou ruim no **Prototype**:

### 👍 Bom

- **Oculta classes concretas** do código cliente;
- **Ajuda na criação de objetos caros ou complexos**;
- **Evita a explosão de subclasses**.

### 👎 Ruim

- **Clonar objetos que possuem referências para outros objetos pode ser complexo**, especialmente quando é necessário realizar cópias profundas (deep copy).

---
