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

  public toObject(): any {
    return {
      id: this.id,
      type: CardType[this.type]
    }
  }
}
