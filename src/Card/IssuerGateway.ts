import Address from '../common/Address'
import User from '../common/User'
import Card, { CardType } from './Card'
import IssuerUser from './IssuerUser'

export default interface IssuerGateway {
  createUser(user: User): IssuerUser
  getUser(userId: string): IssuerUser
  requestCard(user: IssuerUser, cardType: CardType, address?: Address): Card
  getCardById(cardId: string): Card
  getCards(userId: string): Card[]
  activateCard(cardId: string): Card
  toggleCardBlock(cardId: string, blocked: boolean): Card
}
