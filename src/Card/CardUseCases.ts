import CoreUser from '../core/CoreUser'
import IssuerFactory from './IssuerFactory'
import IssuerGateway from './IssuerGateway'

export default class CardUseCases {
  private issuer: IssuerGateway
  private coreUser: CoreUser

  constructor(coreUser: CoreUser) {
    this.issuer = IssuerFactory.create()
    this.coreUser = coreUser
  }
}
