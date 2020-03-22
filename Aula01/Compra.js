const itens = [{nome: "Arroz 1kg", valor: 5.90},
                {nome: "Feijão Preto 1kg", valor: 8.90},
                { nome: "Farinha 1kg", valor: 1.50 },
                { nome: "Leite 1l", valor: 4.50 },
                { nome: "Fubá", valor: 2.10 },
                { nome: "Bombons", valor: 10.00}
               ]

const desconto = (percentual, intens) =>{
    itens.map(item =>{
        let valor_desconto = item.valor*(1-(percentual/100));
        valor_desconto = valor_desconto.toFixed(2);
        item.valor = parseFloat(valor_desconto);
    })
    return itens;
}
    console.log('cesta_desconto', desconto(10, itens));

const totalizar = function(itens){
    return itens.reduce(function(acc, obj){
        return acc + obj.valor;
    },0)
}
var total = totalizar(itens);
console.log('Total ', parseFloat(total.toFixed(2)));

const filtrar_itens_valor_ou_nome = function (valor, nome) {
    return itens.filter(function (elemento){
        return elemento.valor >= valor || (nome && elemento.nome.indexOf(nome)>-1);
    });
}
    //var itens_filtrados = filtrar_itens_valor_ou_nome(2.10,"Fubá");
    var itens_filtrados = filtrar_itens_valor_ou_nome(5,"Fubá");
    console.log('Itens filtrados', itens_filtrados);

    const busca_item = (nome) => {
        return itens.find(item => {
        return item.nome.indexOf(nome) > -1;
        })
       }
       var item_buscado = busca_item("Fubá");
       console.log('item_buscado', item_buscado);

       const desconto_condicional = (valor_elegivel, percentual_desconto) => {
        const itens_filtrados = filtrar_itens_valor_ou_nome(valor_elegivel);
        return desconto(percentual_desconto, itens_filtrados);
        }
        const produtos_com_desconto_condicional = desconto_condicional(5.00, 20);
        console.log('desconto_condicional', produtos_com_desconto_condicional)