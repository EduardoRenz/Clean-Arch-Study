export enum CardType {
  PLASTIC,
  VIRTUAL
}

export default class Card {
  public id: string
  public type: CardType

  constructor(id: string, type: CardType) {
    this.id = id
    this.type = type
  }
}
