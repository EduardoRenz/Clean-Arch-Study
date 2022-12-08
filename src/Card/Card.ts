export enum CardType {
  PLASTIC,
  VIRTUAL
}

export default class Card {
  private type: CardType

  constructor(type: CardType) {
    this.type = type
  }
}
