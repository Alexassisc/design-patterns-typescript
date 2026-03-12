/**
 * PADRÃO OBSERVER (Observador)
 * * Objetivo: Criar uma relação de um-para-muitos. Quando o Input muda,
 * todos os elementos interessados são avisados automaticamente.
 */
// 2. O SUJEITO CONCRETO (O que será observado)
// Ele é o "Dono da festa". Ele sabe quem está presente (observers).
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        // Lista privada para que ninguém de fora bagunce os inscritos
        this.observers = [];
    }
    // Adiciona um ou mais observadores de uma vez
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            // Verificação de segurança: Não adiciona a mesma pessoa duas vezes
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    // Remove um observador específico da lista
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            // O splice corta a lista exatamente na posição do cara que quer sair
            this.observers.splice(observerIndex, 1);
        }
    };
    // O momento da fofoca: Percorre a lista e avisa todo mundo
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            // Passamos 'this' (o próprio InputObservable) para que o
            // observador saiba QUEM o notificou e possa pegar os dados.
            observer.update(_this);
        });
    };
    return InputObservable;
}());
// 3. OS OBSERVADORES CONCRETOS (Quem reage)
// Observador para Parágrafos
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        // Programação Defensiva: Só age se quem avisou for um Input
        if (observable instanceof InputObservable) {
            // O parágrafo copia o valor que está dentro do input
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
// Observador para DIVs (Poderia ter uma lógica diferente aqui)
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObserver;
}());
// 4. CÓDIGO CLIENTE (A montagem do sistema)
// Funções para criar elementos reais no navegador (DOM)
function makeInput() {
    var input = document.createElement('input');
    input.placeholder = 'Digite algo aqui...';
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    p.innerText = 'Eu sou um parágrafo observador';
    document.body.appendChild(p);
    return p;
}
function makeDiv() {
    var div = document.createElement('div');
    div.innerText = 'Eu sou uma DIV observadora';
    document.body.appendChild(div);
    return div;
}
// --- INSTANCIAÇÃO ---
// Criamos o objeto que será vigiado
var inputObservable = new InputObservable(makeInput());
// Criamos os "vigias"
var p1 = new ParagraphObserver(makeParagraph());
var p2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
// --- CONEXÃO ---
// Inscrevemos os vigias no input. Agora eles fazem parte da lista!
inputObservable.subscribe(p1, p2, div1);
// O "Gatilho": Sempre que uma tecla subir (keyup), o input avisa os inscritos
inputObservable.element.addEventListener('keyup', function () {
    inputObservable.notify();
});
// --- TESTE DE DESINSCRIÇÃO ---
// Após 5 segundos, o p2 decide parar de observar.
// Você verá que o p1 e a div continuam mudando, mas o p2 fica "congelado".
setTimeout(function () {
    inputObservable.unsubscribe(p2);
    console.log('O segundo parágrafo parou de observar e não atualizará mais.');
}, 5000);
