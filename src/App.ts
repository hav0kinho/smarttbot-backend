import tradeGenerator from "./lib/tradeGenerator";
import TradeListFactory from "./lib/TradeListFactory";
//INTERFACES
import ITrade from "./interfaces/ITrade";
import ITradeList from "./interfaces/ITradeList";

const App = () => {
  //Coloque aqui os ativos que você deseja
  const assets: string[] = ["WING20", "PETR4", "VALE3", "WDOZ21"];
  //Coloque aqui o número de trades que você quer gerar;
  const numberOfGeneratedTrades: number = 100;

  //"myTrades" contém a lista de trades geradas
  const myTrades: ITrade[] = tradeGenerator(assets, numberOfGeneratedTrades);
  /*"myTradeList" contém um objeto gerado por uma Factory que recebe como parâmetro uma lista de ITrades.;
  Aqui você pode usufruir de todos os metodos da Interface*/
  const myTradeList: ITradeList = TradeListFactory(myTrades);

  //Após essa linha você pode aproveitar as funcionalidades do myTradeList
  //EX:
  //Da um log em todos os trades
  console.log(myTradeList.getTrades());

  console.log("Funcionando");
};

App();
