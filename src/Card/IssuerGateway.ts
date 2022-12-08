import Address from '../common/Address'
import User from '../common/User'
import Card, { CardType } from './models/Card'
import IssuerUser from './models/IssuerUser'

export default interface IssuerGateway {
  createUser(user: User): IssuerUser
  getUser(userId: string): IssuerUser | undefined
  createAccount(issuerUser: IssuerUser): any
  requestCard(user: IssuerUser, cardType: CardType, address?: Address): Card
  getCardById(cardId: string): Card | undefined
  getCards(userId: string): Card[]
  activateCard(cardId: string): Card | undefined
  setCardBlock(cardId: string, blocked: boolean): Card | undefined
  setContactless(cardId: string, allowContactless: boolean): Card | undefined
  getTransactions(accountId: string, fromDate?: Date, toDate?: Date): any
}
