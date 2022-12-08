import Address from '../common/Address'
import User from '../common/User'
import Card, { CardType } from './models/Card'
import IssuerUser from './models/IssuerUser'

export default interface IssuerGateway {
  createUser(user: User): IssuerUser
  getUser(userId: string): IssuerUser
  createAccount(issuerUser: IssuerUser): any
  requestCard(user: IssuerUser, cardType: CardType, address?: Address): Card
  getCardById(cardId: string): Card
  getCards(userId: string): Card[]
  activateCard(cardId: string): Card
  setCardBlock(cardId: string, blocked: boolean): Card
  setContactless(cardId: string, allowContactless: boolean): Card
  getTransactions(accountId: string, fromDate?: Date, toDate?: Date): any
}
