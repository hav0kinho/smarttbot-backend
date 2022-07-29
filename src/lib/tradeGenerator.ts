import ITrade from "../interfaces/ITrade";
import ITradeList from "../interfaces/ITradeList";

/**
 * Uma função que "simula" negociações com trades. É gerado uma lista de ITrade contendo as informações de cada trade gerado durante
 * a execução da função, e então essa lista é retornada para o usuário.
 * @param {string[]} assets Lista de strings contendo todos os ativos que serão gerados aleatóriamente no trades
 * @param {number} numberTrades Quantidade de Trades que devem ser gerados
 * @returns {ITrade[]} Retorna uma lista de ITrade
 */

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
