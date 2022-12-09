export enum CardType {
  PLASTIC,
  VIRTUAL
}

interface CardOutput {
  id: string
  type: string
}

export default class Card {
  public id: string
  public type: CardType

  constructor(id: string, type: CardType) {
    this.id = id
    this.type = type
  }

  public toObject(): CardOutput {
    return {
      id: this.id,
      type: CardType[this.type]
    }
  }
}
