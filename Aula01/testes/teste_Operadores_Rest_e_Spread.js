const Aluno = {
    nome: "José",
    idade: 21,
    periodo: 6
}

//Rest
 const {nome, ...resto} = Aluno;
 console.log(nome);
 console.log(resto);

 //Spread
 const aluno_ = {...Aluno, periodo: "Sexto", turno: "noite"}
 console.log(aluno_);