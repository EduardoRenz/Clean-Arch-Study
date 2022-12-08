/* eslint-disable @typescript-eslint/no-unused-vars */
import IssuerGateway from '../../src/Card/IssuerGateway'
import Card, { CardType } from '../../src/Card/models/Card'
import IssuerUser from '../../src/Card/models/IssuerUser'
import Address from '../../src/common/Address'
import User, { Gender } from '../../src/common/User'

const issuerUsers = [
  new IssuerUser('0', 'Test user 0', 'user@tgeste.com', Gender.N),
  new IssuerUser('1', 'Test user 1', 'user@tgeste.com', Gender.N)
]

const cards = [new Card('0', CardType.PLASTIC), new Card('1', CardType.VIRTUAL)]

export default class MockIssuer implements IssuerGateway {
  createUser(user: User) {
    return IssuerUser.fromUser(user, Gender.M)
  }
  getUser(userId: string) {
    return issuerUsers.find((user) => user.getId === userId)
  }

  createAccount(issuerUser: IssuerUser) {
    return `Account created for ${issuerUser.getName}}`
  }

  requestCard(
    user: IssuerUser,
    cardType: CardType,
    address?: Address | undefined
  ): Card {
    return new Card('card-01', CardType.PLASTIC)
  }
  getCardById(cardId: string) {
    return cards.find((card) => card.id === cardId)
  }
  getCards(userId: string): Card[] {
    return cards
  }
  activateCard(cardId: string) {
    const card = cards.find((c) => c.id == cardId)
    return card
  }
  setCardBlock(cardId: string, blocked: boolean) {
    const card = cards.find((c) => c.id == cardId)
    return card
  }
  setContactless(cardId: string, allowContactless: boolean) {
    const card = cards.find((c) => c.id == cardId)
    return card
  }
  getTransactions(
    accountId: string,
    fromDate?: Date | undefined,
    toDate?: Date | undefined
  ) {
    throw new Error('Method not implemented.')
  }
}
