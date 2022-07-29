# Desafio SmarttBot - Backend

Esse projeto é um sistema criado para geração aleatória de Trades para a empresa SmarttBot

## **⚙️ Funcionalidades ⚙️**

A estrutura e funcionalidade do projeto está dentro da pasta _src_, que é composta pelas pastas de: _interfaces_, _lib_ e o arquivo _App.ts_, que é onde o projeto é executado

### **💻 Interfaces 💻**

#### **ITrade**

Essa interface/tipo possui os parâmetros:

- negotiation_id
  - **Number**
  - Informa o ID do trade
- negotiation_asset
  - **String**
  - Informa o ativo que está sendo negociado o trade
- negotiation_date
  - **Date**
  - Informa a data que o trade foi negociado
- negotiation_value
  - **Number**
  - Informa o valor que o trade foi negociado

#### **ITradeList**

- getTrades()
  - **Retorna todos os ITrade armazenados**
- setTrades(tradeList: ITrade[])
  - **Seta a lista de ITrade**
- getTradeById(id: number)
  - **Retorna um ITrade com um ID específicico**
- getTradesByAsset(asset: string)
  - **Retorna uma lista de ITrade. Só são retornados os ITrade que tiverem o mesmo _negotiationAsset_ dado pelo parâmetro _asset_, ou seja, o mesmo Ativo**
- getTradesByAboveValue(value: number, asset?: string)
  - **Retorna uma lista de ITrade. Só são retornados os ITrade que tiverem um valor superior ao dado pelo parâmetro _value_. O usuário também pode especificar um _asset_ para ser retornado**
- getTradesByBetweenValues(min: number, max: number, asset?: string):
  - **Retorna uma lista de ITrade. Só são retornados os ITrade que tiverem um valor entre os dados pelos parâmetros _min_ e _max_. O usuário também pode especificar um _asset_ para ser retornado**
- getTradesByBelowValue(value: number, asset?: string)
  - **Retorna uma lista de ITrade. Só são retornados os ITrade que tiverem um valor menor ao dado pelo parâmetro _value_. O usuário também pode especificar um _asset_ para ser retornado**
- getNewestTrade(asset?: string)
  - **Retorna o último ITrade negociado. O usuário também pode especificar um _asset_ para ser retornado**

### **📝 Scripts 📝**

#### **tradeGenerator**

Parâmetros: _assets_ / _numberTrades_

Essa função é responsavel por gerar uma lista de ITrade que aleatória, com base nos ativos passados como parâmetros, sendo eles aleatórios para cada trade, e valores variados entre 1 e 100. Após ser gerada, essa lista é retornada

#### **TradeListFactory**

Parâmetros: _tradeList_

Uma Factory criada para criar objetos do tipo ITradeList. O seu "construtor" necessita apenas de uma lista de ITrade. É retornado um objeto do tipo ITradeList que possui todos os seus métodos, sendo eles relacionados a pesquisa de trades dentro do objeto

#### **App**

Arquivo que será executado o projeto. Aqui você pode "Brincar" com as funcionalidades. Na linha 9 e 11 você pode ver algumas constantes. Em _assets_ você pode alterar os ativos que serão gerados nos trades e em _numberOfGeneratedTrades_ a quantidade de Trades.

#### **Documentação Inata**

Foi feito também nesse projeto algumas documentações nos próprios arquivos.

![backend](https://user-images.githubusercontent.com/68474584/181830961-6ff3e2a5-72be-44af-a786-762867c16ab7.gif)

