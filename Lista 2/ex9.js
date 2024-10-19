const endereco = {
    rua:"Rua Lituania",
    numero: 1120,
    bairro: "Guadalajara",
    cidade: "Sorocaba"
};
for(let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
}