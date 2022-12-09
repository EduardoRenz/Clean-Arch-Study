import User from '../../common/User'
import Card from '../models/Card'

export default interface CardRepository {
  save(card: Card, user: User): any
  getById(cardId: string): Card | undefined
  getCardsByUserId(userId: string): Card[]
}
