import Address from '../common/Address'
import CoreUser from '../core/CoreUser'
import IssuerFactory from './factories/IssuerFactory'
import IssuerGateway from './interfaces/IssuerGateway'

import IssuerUser from './models/IssuerUser'
import { CardType } from './models/Card'
import CardRepository from './interfaces/CardRepository'
import CardRepositoryFactory from './factories/CardRepositoryFactory'

export default class CardUseCases {
  private coreUser: CoreUser
  private issuerUser: IssuerUser
  private issuer: IssuerGateway
  private repository: CardRepository

  constructor(coreUser: CoreUser, issuer?: IssuerGateway, repository?: CardRepository) {
    this.issuer = issuer ? issuer : IssuerFactory.create()
    this.repository = repository ? repository : CardRepositoryFactory.create()
    this.coreUser = coreUser

    const foundIssuerUser = this.issuer.getUserByDocument(this.coreUser.getDocument)

    if (!foundIssuerUser) throw new Error('Issuer user not found')
    this.issuerUser = foundIssuerUser
  }

  public requestCard(cardType: CardType, shippingAddress?: Address): any {
    const card = this.issuer.requestCard(this.issuerUser, cardType, shippingAddress)
    this.repository.save(card, this.coreUser)
    return card.toObject()
  }
}
