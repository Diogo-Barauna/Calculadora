function Calculator(){
    this.display = document.querySelector('.display');

    this.start = _ => { //Função que inicia a calculadora
        this.buttonClick();
        this.enterPress();
    };

    this.enterPress = _ =>{ //Soma os valores ao pressionar enter
        this.display.addEventListener('keypress',e => {
            if (e.keyCode === 13) this.calculate();
        });
    };

    this.clearDisplay = _ => this.display.value = ''; //Limpa o display

    this.popTyped = _ => this.display.value = this.display.value.slice(0,-1); //Apaga o ultimo número digitado

    this.calculate = _ =>{ //Faz o cálculo dos valores
        let operation = this.display.value;
        try { //Testa se é uma operação válida
            operation = eval(operation)
            this.display.value = operation
        }catch(e){ //Mensagem de erro
            this.display.classList.add('error');
            this.display.value = 'Conta inválida';
            setTimeout(() => {
            this.display.classList.remove('error');
            this.clearDisplay();
            }, 1500);
            return;
        };
    };
    this.buttonClick = _ => { //Captura os clicks do usuário 
        document.addEventListener('click',e => {
            const el = e.target;
                
            if(el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.popTyped();
            if(el.classList.contains('btn-eq')) this.calculate();
        });
    };

    this.btnToDisplay = (typed) => { //Adiciona o botão pressionado no display
        this.display.value += typed;
        this.display.focus();
    }
};
const calculator = new Calculator   
calculator.start(); 
