import ITrade from "../interfaces/ITrade";
import ITradeList from "../interfaces/ITradeList";

//Função que irá gerar uma lista de trades
const tradeGenerator = (assets: string[], numberTrades: number): ITrade[] => {
  //Variaveis
  let generatedTrades: ITrade[] = [];
  let date: Date;
  let randomIndex: number;
  let randomValue: number;
  //Geração de Trades
  for (let i = 0; i < numberTrades; i++) {
    /*Geração de Valores aleatórios e da data atual (A geração é tão rápida que eu poderia colocar o 'new Date()' fora do FOR,
    já que todos vão ter a mesma data. Mas como isso vai depender da quantidade de dados gerados, decidi colocar dentro)*/
    randomIndex = Math.floor(Math.random() * assets.length);
    randomValue = Math.random() * 100 + 1;
    date = new Date();
    //Criação do trade
    let trade: ITrade = {
      negotiation_id: i,
      negotiation_asset: assets[randomIndex],
      negotiation_date: date,
      negotiation_value: Number(randomValue.toFixed(2)),
    };
    generatedTrades.push(trade);
  }

  return generatedTrades;
};

export default tradeGenerator;
