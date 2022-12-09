import Card from '../models/Card'

export default interface CardRepository {
  save(card: Card): any
  getById(cardId: string): Card | undefined
  getCardsByUserId(userId: string): Card[]
}
