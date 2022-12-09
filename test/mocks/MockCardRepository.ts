import CardRepository from '../../src/Card/interfaces/CardRepository'
import Card from '../../src/Card/models/Card'

export default class MockCardRepository implements CardRepository {
  save(card: Card) {
    throw new Error('Method not implemented.')
  }
  getById(cardId: string): Card | undefined {
    throw new Error('Method not implemented.')
  }
  getCardsByUserId(userId: string): Card[] {
    throw new Error('Method not implemented.')
  }
}
