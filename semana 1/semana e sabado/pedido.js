//Pedido
var pedido = 100
var quantidade = 2;
var total = 0;

switch(pedido){
    case 100:
        total = 1.20 * quantidade;
        console.log(`Você pediu cachorro quente ${total}`);
        break;
    case 101:
        total = 1.30 * quantidade;
        console.log(`Você pediu bauru simples ${total}`);
        break;
    case 102:
        total = 1.50 * quantidade;
        console.log(`Você pediu bauru com ovos ${total}`);
        break;
    default: 
        console.log('Codigo nao existe!');
}

