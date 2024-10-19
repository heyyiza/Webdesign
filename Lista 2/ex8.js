const produto = {
    nome: "Bolsa",
    preco: 1500,
    quantidade: 3,
    calcularTotal: function(){
        return this.preco*this.quantidade;
    }
};
console.log(produto.calcularTotal());