import ITrade from "../interfaces/ITrade";
import tradeGenerator from "../lib/tradeGenerator";

const assets = ["PETR4", "WDOZ21", "VALE3", "BANC3"];

describe("*tradeGenerator - Geração de Trades*", () => {
  it("|Geração de Trades|", () => {
    expect(typeof tradeGenerator).toBe("function");
    expect(Array.isArray(tradeGenerator(assets, 20))).toBe(true);
    expect(tradeGenerator(assets, 20)).toHaveLength(20);
    expect.objectContaining<ITrade[]>(tradeGenerator(assets, 20));
  });
});
