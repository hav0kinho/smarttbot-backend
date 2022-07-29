import ITrade from "./ITrade";

export default interface ITradeList {
  getTrades(): ITrade[];

  setTrades(tradeList: ITrade[]): void;

  getTradeById(id: number): boolean | ITrade;

  getTradesByAsset(asset: string): ITrade[];

  getTradesByAboveValue(value: number, asset?: string): ITrade[];

  getTradesByBetweenValues(min: number, max: number, asset?: string): ITrade[];

  getTradesByBelowValue(value: number, asset?: string): ITrade[];

  getNewestTrade(asset?: string): ITrade | boolean;
}
