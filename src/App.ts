import tradeGenerator from "./lib/tradeGenerator";
import TradeListFactory from "./lib/TradeListFactory";
//INTERFACES
import ITrade from "./interfaces/ITrade";
import ITradeList from "./interfaces/ITradeList";

const App = () => {
  const myTrades = tradeGenerator(["WING20", "PETR4", "VALE3", "WDOZ21"], 100);

  const myTradeList: ITradeList = TradeListFactory(myTrades);

  console.log("Funcionando");
};

App();
