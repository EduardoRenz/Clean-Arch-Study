import CardRepository from '../../src/Card/interfaces/CardRepository'
import Card, { CardType } from '../../src/Card/models/Card'
import User from '../../src/common/User'

const cards = [{ userId: '0', cardId: '0', type: 'VIRTUAL' }]

export default class MockCardRepository implements CardRepository {
  save(card: Card, user: User): any {
    cards.push({ userId: user.getId, cardId: card.id, type: CardType[card.type] })
    return card.id
  }
  getById(cardId: string): Card | undefined {
    const response = cards.find((card) => card.cardId === cardId)
    if (response) return new Card(response.cardId, response.type as unknown as CardType)
  }

  getCardsByUserId(userId: string): Card[] {
    const response = cards.filter((card) => card.userId === userId)
    const responseCards = []
    for (const responseCard of response) {
      responseCards.push(new Card(responseCard.cardId, responseCard.type as unknown as CardType))
    }
    return responseCards
  }
}
