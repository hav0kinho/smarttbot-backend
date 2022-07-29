import ITrade from "../interfaces/ITrade";
import ITradeList from "../interfaces/ITradeList";

/**
 * Factory que gera um objeto ITradeList dado uma lista de ITrade.
 * @param {ITrade[]} tradeList Lista de ITrade contendo todas as negociações que o usuário deseja converter para um único Objeto
 * @returns {ITradeList} Retorna uma ITradeList contendo a lista de ITrade e metodos de busca
 */

//Factory que criará objetos ITradeList
const TradeListFactory = (tradeList: ITrade[]): ITradeList => {
  //=-=-=-=-=-=-=-=-=-=-=-=-=-PRIVADO=-=-=-=-=-=-=-=-=-=-=-=-=-
  let _tradeList = tradeList;

  //=-=-=-=-=-=-=-=-=-=-=-=-PÚBLICO=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //========Getters e Setters=========
  const getTrades = (): ITrade[] => {
    return _tradeList;
  };
  const setTrades = (tradeList: ITrade[]): void => {
    _tradeList = tradeList;
  };
  //=============Métodos=============
  //Retorna um trade específico dependendo do ID
  const getTradeById = (id: number): ITrade | boolean => {
    for (let i = 0; i < _tradeList.length; i++) {
      if (_tradeList[i].negotiation_id === id) {
        return _tradeList[i];
      }
    }
    return false;
  };
  //Retorna um trade específico dependendo do Ativo/'asset'
  const getTradesByAsset = (asset: string): ITrade[] => {
    let tradesByAsset: ITrade[] = [];
    _tradeList.map((trade) => {
      if (trade.negotiation_asset === asset) {
        tradesByAsset.push(trade);
      }
    });
    return tradesByAsset;
  };

  /*Retorna um trade específico com o valor acima ou igual do que é dado pelo parâmetro 'value'. Também pode ser dado o nome do ativo, 
  assim conseguindo um trade ainda mais específico*/
  const getTradesByAboveValue = (value: number, asset: string): ITrade[] => {
    let tradesByAboveValue: ITrade[] = [];
    let tradeAsset: string | null = asset || null;

    if (tradeAsset != null) {
      _tradeList.map((trade) => {
        if (
          trade.negotiation_value >= value &&
          trade.negotiation_asset === tradeAsset
        ) {
          tradesByAboveValue.push(trade);
        }
      });
      return tradesByAboveValue;
    }

    _tradeList.map((trade) => {
      if (trade.negotiation_value >= value) {
        tradesByAboveValue.push(trade);
      }
    });
    return tradesByAboveValue;
  };

  /*Retorna um trade específico com o valor abaixo ou igual do que é dado pelo parâmetro 'value'. Também pode ser dado o nome do ativo, 
  assim conseguindo um trade ainda mais específico*/
  const getTradesByBelowValue = (value: number, asset: string): ITrade[] => {
    let tradesByBelowValue: ITrade[] = [];
    let tradeAsset: string | null = asset || null;

    if (tradeAsset != null) {
      _tradeList.map((trade) => {
        if (
          trade.negotiation_value <= value &&
          trade.negotiation_asset === tradeAsset
        ) {
          tradesByBelowValue.push(trade);
        }
      });
      return tradesByBelowValue;
    }

    _tradeList.map((trade) => {
      if (trade.negotiation_value <= value) {
        tradesByBelowValue.push(trade);
      }
    });
    return tradesByBelowValue;
  };
  /*Retorna um trade específico com o valor entre os dados pelos parâmetros 'min' e 'max'. Também pode ser dado o nome do ativo, 
  assim conseguindo um trade ainda mais específico*/
  const getTradesByBetweenValues = (
    min: number,
    max: number,
    asset: string
  ): ITrade[] => {
    let tradeAsset: string | null = asset || null;
    let tradesByBetweenValues: ITrade[] = [];

    if (asset != null) {
      for (let i = 0; i < _tradeList.length; i++) {
        if (_tradeList[i].negotiation_asset === tradeAsset) {
          if (
            _tradeList[i].negotiation_value >= min &&
            _tradeList[i].negotiation_value <= max
          ) {
            tradesByBetweenValues.push(_tradeList[i]);
          }
        }
      }
      return tradesByBetweenValues;
    }

    for (let i = 0; i < _tradeList.length; i++) {
      if (
        _tradeList[i].negotiation_value >= min &&
        _tradeList[i].negotiation_value <= max
      ) {
        tradesByBetweenValues.push(_tradeList[i]);
      }
    }
    return tradesByBetweenValues;
  };

  /*Retorna o trade mais recente realizado. Também pode ser dado o nome do ativo, assim conseguindo o trade mais recente de um determinado
  ativo */
  const getNewestTrade = (asset: string): ITrade | boolean => {
    let tradeAsset: string | null = asset || null;
    let tradesId: number[] = [];
    let newestId: number;
    let newestTrade: ITrade | boolean;
    //==============================================
    if (tradeAsset != null) {
      for (let i = 0; i < _tradeList.length; i++) {
        if (tradeAsset === _tradeList[i].negotiation_asset) {
          tradesId.push(_tradeList[i].negotiation_id);
        }
      }
      newestId = Math.max(...tradesId);
      newestTrade = getTradeById(newestId);

      return newestTrade;
    }

    for (let i = 0; i < _tradeList.length; i++) {
      tradesId.push(_tradeList[i].negotiation_id);
    }
    newestId = Math.max(...tradesId);
    newestTrade = getTradeById(newestId);

    return newestTrade;
  };

  //Retorno do Objeto
  return {
    getTrades: getTrades,
    setTrades: setTrades,
    getTradeById: getTradeById,
    getTradesByAsset: getTradesByAsset,
    getTradesByAboveValue: getTradesByAboveValue,
    getTradesByBetweenValues: getTradesByBetweenValues,
    getTradesByBelowValue: getTradesByBelowValue,
    getNewestTrade: getNewestTrade,
  };
};

export default TradeListFactory;
