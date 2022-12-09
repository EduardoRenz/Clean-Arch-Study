import Address from '../common/Address'
import CoreUser from '../core/CoreUser'
import IssuerFactory from './IssuerFactory'
import IssuerGateway from './interfaces/IssuerGateway'

import IssuerUser from './models/IssuerUser'
import { CardType } from './models/Card'

interface Output {
  id: string
  type: string
}

export default class CardUseCases {
  private issuer: IssuerGateway
  private coreUser: CoreUser
  private issuerUser: IssuerUser

  constructor(coreUser: CoreUser, issuer?: IssuerGateway) {
    this.issuer = issuer ? issuer : IssuerFactory.create()
    this.coreUser = coreUser

    const foundIssuerUser = this.issuer.getUserByDocument(this.coreUser.getDocument)

    if (!foundIssuerUser) throw new Error('Issuer user not found')
    this.issuerUser = foundIssuerUser
  }

  public requestCard(cardType: CardType, shippingAddress?: Address): Output {
    const card = this.issuer.requestCard(this.issuerUser, cardType, shippingAddress)
    return { id: card.id, type: CardType[card.type] }
  }
}
