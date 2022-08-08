import TradeListFactory from "../lib/TradeListFactory";
import ITrade from "../interfaces/ITrade";

const assets = ["PETR4", "WDOZ21", "VALE3", "BANC3"];
const actualDate = new Date();
const tradeListWithTrades = TradeListFactory([
  {
    negotiation_id: 1,
    negotiation_asset: "VALE3",
    negotiation_date: actualDate,
    negotiation_value: 55.23,
  },
  {
    negotiation_id: 2,
    negotiation_asset: "PETR4",
    negotiation_date: actualDate,
    negotiation_value: 23.54,
  },
  {
    negotiation_id: 3,
    negotiation_asset: "ALUP11",
    negotiation_date: actualDate,
    negotiation_value: 79.87,
  },
  {
    negotiation_id: 4,
    negotiation_asset: "WDOZ21",
    negotiation_date: actualDate,
    negotiation_value: 56.13,
  },
  {
    negotiation_id: 5,
    negotiation_asset: "VALE3",
    negotiation_date: actualDate,
    negotiation_value: 69.9,
  },
  {
    negotiation_id: 6,
    negotiation_asset: "ALUP11",
    negotiation_date: actualDate,
    negotiation_value: 11.23,
  },
  {
    negotiation_id: 7,
    negotiation_asset: "WDOZ21",
    negotiation_date: actualDate,
    negotiation_value: 26.42,
  },
  {
    negotiation_id: 8,
    negotiation_asset: "WDOZ21",
    negotiation_date: actualDate,
    negotiation_value: 29.39,
  },
  {
    negotiation_id: 9,
    negotiation_asset: "MENG42",
    negotiation_date: actualDate,
    negotiation_value: 100.0,
  },
  {
    negotiation_id: 10,
    negotiation_asset: "ALUP11",
    negotiation_date: actualDate,
    negotiation_value: 43.15,
  },
  {
    negotiation_id: 11,
    negotiation_asset: "VALE3",
    negotiation_date: actualDate,
    negotiation_value: 76.15,
  },
]);

describe("*TradeList - Constructor*", () => {
  it("|Constructor - Vazio|", () => {
    const testTradeListConstructor = TradeListFactory();
    //Deve retornar um array
    expect(Array.isArray(testTradeListConstructor.getTrades())).toBe(true);
    expect(testTradeListConstructor.getTrades()).toEqual([]);
  });

  it("|Constructor - Com lista vazia|", () => {
    const testTradeListConstructor = TradeListFactory([]);
    expect(Array.isArray(testTradeListConstructor.getTrades())).toBe(true);
    expect(testTradeListConstructor.getTrades()).toEqual([]);
  });

  it("|Constructor - Com lista normal|", () => {
    const testTradeListConstructor = TradeListFactory([
      {
        negotiation_id: 1,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 55.23,
      },
      {
        negotiation_id: 2,
        negotiation_asset: "PETR4",
        negotiation_date: actualDate,
        negotiation_value: 23.54,
      },
      {
        negotiation_id: 3,
        negotiation_asset: "MENG42",
        negotiation_date: actualDate,
        negotiation_value: 69.87,
      },
    ]);

    expect(Array.isArray(testTradeListConstructor.getTrades())).toBe(true);
    expect(testTradeListConstructor.getTrades()).toEqual([
      {
        negotiation_id: 1,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 55.23,
      },
      {
        negotiation_id: 2,
        negotiation_asset: "PETR4",
        negotiation_date: actualDate,
        negotiation_value: 23.54,
      },
      {
        negotiation_id: 3,
        negotiation_asset: "MENG42",
        negotiation_date: actualDate,
        negotiation_value: 69.87,
      },
    ]);
  });
});

describe("*TradeList - Getters e Setters*", () => {
  const testTradeListGS = TradeListFactory();
  it("|Getters e Setters - Getter|", () => {
    //O retorno não pode ser null
    expect(testTradeListGS.getTrades()).not.toBeNull();
    //O retorno não pode ser undefined
    expect(testTradeListGS.getTrades()).not.toBeUndefined();
    //O retorno deve ser um Array
    expect(Array.isArray(testTradeListGS.getTrades())).toBe(true);
    //Os objetos devem ser do tipo ITrade
    expect.objectContaining<ITrade[]>(testTradeListGS.getTrades());
  });
  it("|Getters e Setters - Setter|", () => {
    testTradeListGS.setTrades([
      {
        negotiation_id: 1,
        negotiation_asset: "Vale?",
        negotiation_date: actualDate,
        negotiation_value: 53.52,
      },
    ]);
    expect(testTradeListGS.getTrades()).toEqual<ITrade[]>([
      {
        negotiation_id: 1,
        negotiation_asset: "Vale?",
        negotiation_date: actualDate,
        negotiation_value: 53.52,
      },
    ]);
  });
});

describe("*TradeList - Listamento básico*", () => {
  it("|Listamento básico - Com um preço de execução maior que algum passado como entrada|", () => {
    expect(tradeListWithTrades.getTradesByAboveValue(50)).toEqual<ITrade[]>([
      {
        negotiation_id: 1,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 55.23,
      },
      {
        negotiation_id: 3,
        negotiation_asset: "ALUP11",
        negotiation_date: actualDate,
        negotiation_value: 79.87,
      },
      {
        negotiation_id: 4,
        negotiation_asset: "WDOZ21",
        negotiation_date: actualDate,
        negotiation_value: 56.13,
      },
      {
        negotiation_id: 5,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 69.9,
      },
      {
        negotiation_id: 9,
        negotiation_asset: "MENG42",
        negotiation_date: actualDate,
        negotiation_value: 100.0,
      },
      {
        negotiation_id: 11,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 76.15,
      },
    ]);
  });

  it("|Listamento básico - Com um preço de execução maior que algum valor passado como entrada E de um ativo específico|", () => {
    expect(tradeListWithTrades.getTradesByAboveValue(50, "VALE3")).toEqual<
      ITrade[]
    >([
      {
        negotiation_id: 1,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 55.23,
      },
      {
        negotiation_id: 5,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 69.9,
      },
      {
        negotiation_id: 11,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 76.15,
      },
    ]);
  });

  it("|Listamento básico - Com um preço de execução menor que algum valor passado como entrada|", () => {
    expect(tradeListWithTrades.getTradesByBelowValue(50)).toEqual<ITrade[]>([
      {
        negotiation_id: 2,
        negotiation_asset: "PETR4",
        negotiation_date: actualDate,
        negotiation_value: 23.54,
      },
      {
        negotiation_id: 6,
        negotiation_asset: "ALUP11",
        negotiation_date: actualDate,
        negotiation_value: 11.23,
      },
      {
        negotiation_id: 7,
        negotiation_asset: "WDOZ21",
        negotiation_date: actualDate,
        negotiation_value: 26.42,
      },
      {
        negotiation_id: 8,
        negotiation_asset: "WDOZ21",
        negotiation_date: actualDate,
        negotiation_value: 29.39,
      },
      {
        negotiation_id: 10,
        negotiation_asset: "ALUP11",
        negotiation_date: actualDate,
        negotiation_value: 43.15,
      },
    ]);
  });

  it("|Listamento básico - Com um preço de execução menor que algum valor passado como entrada de um ativo específico|", () => {
    expect(tradeListWithTrades.getTradesByBelowValue(50, "WDOZ21")).toEqual<
      ITrade[]
    >([
      {
        negotiation_id: 7,
        negotiation_asset: "WDOZ21",
        negotiation_date: actualDate,
        negotiation_value: 26.42,
      },
      {
        negotiation_id: 8,
        negotiation_asset: "WDOZ21",
        negotiation_date: actualDate,
        negotiation_value: 29.39,
      },
    ]);
  });
});

describe("*TradeList - Listamento de ativos específicos*", () => {
  it("|Listamento de ativos específicos - Listar trades de um ativo específico|", () => {
    //Provavelmente não vai funfar
    expect(tradeListWithTrades.getTradesByAsset("VALE3")).toEqual<ITrade[]>([
      {
        negotiation_id: 1,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 55.23,
      },
      {
        negotiation_id: 5,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 69.9,
      },
      {
        negotiation_id: 11,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 76.15,
      },
    ]);
  });

  describe("Listamento de ativos específicos - Mostrar o Trade mais recente", () => {
    it("|Listamento de ativos específicos - Trade mais recente entre todos os Trades|", () => {
      expect(tradeListWithTrades.getNewestTrade()).toEqual({
        negotiation_id: 11,
        negotiation_asset: "VALE3",
        negotiation_date: actualDate,
        negotiation_value: 76.15,
      });
    });

    it("|Listamento de ativos específicos - Trade mais recente de um ativo específico|", () => {
      expect(tradeListWithTrades.getNewestTrade("ALUP11")).toEqual({
        negotiation_id: 10,
        negotiation_asset: "ALUP11",
        negotiation_date: actualDate,
        negotiation_value: 43.15,
      });
    });
  });
});
