/**
 * PADRÃO OBSERVER (Observador)
 * * Objetivo: Criar uma relação de um-para-muitos. Quando o Input muda,
 * todos os elementos interessados são avisados automaticamente.
 */

// 1. CONTRATOS (INTERFACES)
// Elas garantem que todos falem a mesma língua.

interface Observable {
  subscribe(...observers: Observer[]): void; // "Entrar na lista VIP"
  unsubscribe(observer: Observer): void; // "Sair da lista VIP"
  notify(): void; // "Gritar para todos da lista"
}

interface Observer {
  update(...args: unknown[]): void; // "Reagir ao grito"
}

// 2. O SUJEITO CONCRETO (O que será observado)
// Ele é o "Dono da festa". Ele sabe quem está presente (observers).

class InputObservable implements Observable {
  // Lista privada para que ninguém de fora bagunce os inscritos
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  // Adiciona um ou mais observadores de uma vez
  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      // Verificação de segurança: Não adiciona a mesma pessoa duas vezes
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  // Remove um observador específico da lista
  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      // O splice corta a lista exatamente na posição do cara que quer sair
      this.observers.splice(observerIndex, 1);
    }
  }

  // O momento da fofoca: Percorre a lista e avisa todo mundo
  notify(): void {
    this.observers.forEach((observer) => {
      // Passamos 'this' (o próprio InputObservable) para que o
      // observador saiba QUEM o notificou e possa pegar os dados.
      observer.update(this);
    });
  }
}

// 3. OS OBSERVADORES CONCRETOS (Quem reage)

// Observador para Parágrafos
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    // Programação Defensiva: Só age se quem avisou for um Input
    if (observable instanceof InputObservable) {
      // O parágrafo copia o valor que está dentro do input
      this.element.innerText = observable.element.value;
    }
  }
}

// Observador para DIVs (Poderia ter uma lógica diferente aqui)
class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// 4. CÓDIGO CLIENTE (A montagem do sistema)

// Funções para criar elementos reais no navegador (DOM)
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  input.placeholder = 'Digite algo aqui...';
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  p.innerText = 'Eu sou um parágrafo observador';
  document.body.appendChild(p);
  return p;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  div.innerText = 'Eu sou uma DIV observadora';
  document.body.appendChild(div);
  return div;
}

// --- INSTANCIAÇÃO ---

// Criamos o objeto que será vigiado
const inputObservable = new InputObservable(makeInput());

// Criamos os "vigias"
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());

// --- CONEXÃO ---

// Inscrevemos os vigias no input. Agora eles fazem parte da lista!
inputObservable.subscribe(p1, p2, div1);

// O "Gatilho": Sempre que uma tecla subir (keyup), o input avisa os inscritos
inputObservable.element.addEventListener('keyup', () => {
  inputObservable.notify();
});

// --- TESTE DE DESINSCRIÇÃO ---

// Após 5 segundos, o p2 decide parar de observar.
// Você verá que o p1 e a div continuam mudando, mas o p2 fica "congelado".
setTimeout(() => {
  inputObservable.unsubscribe(p2);
  console.log('O segundo parágrafo parou de observar e não atualizará mais.');
}, 5000);
