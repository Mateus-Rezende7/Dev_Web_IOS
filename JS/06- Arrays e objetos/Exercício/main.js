var alunos = {
    
    aluno1 :  {
        nome : 'Mateus',
        nota : [(4+4+14+8) / 4],
        endereço : 'Minas gerais',
        idade: '20 anos',
        sobrenome:'Cleitin',
        materia:'Programação web',
        altura:'1.82',
        time:'Palmeiras', 
    },
    
    aluno2 : {
        nome:'Yara',
        nota:[(5+9+7+10) / 4],
        endereço:'São Paulo',
        idade:'21',
        sobrenome:'Alves',    
        materia:'Artes',
        altura:'1,65',
        time:'Portuguesa',        
    },

    aluno3 : {
        nome:'Sheylla',
        nota:[(10+2+15+1) / 4],
        endereço:'Ceará',
        idade:'24',
        sobrenome:'Furacão',
        materia:'Educação Física',
        altura:'1,90',
        time:'Juazeirense',
    },

    
}
media = 7 ;



console.log(`Aluno(a) ${alunos.aluno1.nome} com a nota total ${alunos.aluno1.nota} que mora no endereço ${alunos.aluno1.endereço} foi aprovado(a)`); 

console.log(`Aluno(a) ${alunos.aluno2.nome} com a nota  ${alunos.aluno2.nota} que mora no endereço ${alunos.aluno2.endereço} foi aprovado(a)`); 

console.log(`Aluno(a) ${alunos.aluno3.nome} com a nota total ${alunos.aluno3.nota} que mora no endereço ${alunos.aluno1.endereço} foi aprovado(a)`); 
