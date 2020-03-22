var exibeMensagem = function () {
    if (true) {
    let escopoFuncao = 'escopoFuncao';
    console.log('dentro escopo', escopoFuncao);
    }
    //console.log('fora escopo', escopoFuncao);
    }
    exibeMensagem();