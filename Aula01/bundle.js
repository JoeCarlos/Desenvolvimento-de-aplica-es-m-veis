"use strict";

var itens = [{
  nome: "Arroz 1kg",
  valor: 5.90
}, {
  nome: "Feijão Preto 1kg",
  valor: 8.90
}, {
  nome: "Farinha 1kg",
  valor: 1.50
}, {
  nome: "Leite 1l",
  valor: 4.50
}, {
  nome: "Fubá",
  valor: 2.10
}, {
  nome: "Bombons",
  valor: 10.00
}];

var desconto = function desconto(percentual, intens) {
  itens.map(function (item) {
    var valor_desconto = item.valor * (1 - percentual / 100);
    valor_desconto = valor_desconto.toFixed(2);
    item.valor = parseFloat(valor_desconto);
  });
  return itens;
};

console.log('cesta_desconto', desconto(10, itens));

var totalizar = function totalizar(itens) {
  return itens.reduce(function (acc, obj) {
    return acc + obj.valor;
  }, 0);
};

var total = totalizar(itens);
console.log('Total ', parseFloat(total.toFixed(2)));

var filtrar_itens_valor_ou_nome = function filtrar_itens_valor_ou_nome(valor, nome) {
  return itens.filter(function (elemento) {
    return elemento.valor >= valor || nome && elemento.nome.indexOf(nome) > -1;
  });
}; //var itens_filtrados = filtrar_itens_valor_ou_nome(2.10,"Fubá");


var itens_filtrados = filtrar_itens_valor_ou_nome(5, "Fubá");
console.log('Itens filtrados', itens_filtrados);

var busca_item = function busca_item(nome) {
  return itens.find(function (item) {
    return item.nome.indexOf(nome) > -1;
  });
};

var item_buscado = busca_item("Fubá");
console.log('item_buscado', item_buscado);

var desconto_condicional = function desconto_condicional(valor_elegivel, percentual_desconto) {
  var itens_filtrados = filtrar_itens_valor_ou_nome(valor_elegivel);
  return desconto(percentual_desconto, itens_filtrados);
};

var produtos_com_desconto_condicional = desconto_condicional(5.00, 20);
console.log('desconto_condicional', produtos_com_desconto_condicional);
