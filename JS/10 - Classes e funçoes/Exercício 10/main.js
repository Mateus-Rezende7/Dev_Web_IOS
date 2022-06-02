


date = new Date();
    dataArray = Array(3);
    dataArray[0] = date.getFullYear();
    dataArray[1] = date.getMonth() + 1;
    dataArray[2] = date.getDate();

idade = 0
aniversario = 0
j = 0



class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome; 
        this.dataNascimento = new Date(dataNascimento); 
        this.idade = idade; 
    };
    getIdade(){ 
        this.dataNascimentoArray = Array(3); 
        this.dataNascimentoArray[0] = this.dataNascimento.getFullYear(); 
        this.dataNascimentoArray[1] = this.dataNascimento.getMonth() +1; 
        this.dataNascimentoArray[2] = this.dataNascimento.getDate();
        
        if (this.dataNascimentoArray[1] < dataArray[1]){ 
            idade = dataArray[0] - this.dataNascimentoArray[0]; 
        }
        else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){
            idade = dataArray[0] - this.dataNascimentoArray[0]; 
        }
        else if(this.dataNascimentoArray[1] >= dataArray[1]){ 
            idade = dataArray[0] - this.dataNascimentoArray[0] -1; 
        };
        return idade;
    };
    mostrarConsole(){ 
        for(j; j<pessoas.length; j++){
            console.log(`${pessoas[j].nome} tem ${pessoas[j].getIdade()} anos e ${pessoas[j].niver() ? 'já fez aniversário' : 'ainda não fez aniversário'} esse ano.`)
                          
            console.log('\n') 
        }
    }
};


pessoas = Array(10);

pessoas[0] = new pessoa('Carlos', '1992-06-29');
pessoas[1] = new pessoa('Joana', '1998-03-07');
pessoas[2] = new pessoa('Cleber', '1890-03-16');
pessoas[3] = new pessoa('Leandro', '1997-07-15');
pessoas[4] = new pessoa('Angela', '2003-04-20');
pessoas[5] = new pessoa('Josefina', '2009-02-11');
pessoas[6] = new pessoa('Mateus', '2002-05-22');
pessoas[7] = new pessoa('Josefina', '1973-08-10');
pessoas[8] = new pessoa('Juca', '1890-01-01');
pessoas[9] = new pessoa('Aatrox', '1200-11-07');


pessoa.prototype.niver = function (){ 
    if (this.dataNascimentoArray[1] < dataArray[1]){ 
        aniversario = true 
    }
    else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){ 
        aniversario = true 
    }
    else if(this.dataNascimentoArray[1] >= dataArray[1]){ 
        aniversario = false 
    };
    return aniversario;
};

pessoas[0].mostrarConsole()