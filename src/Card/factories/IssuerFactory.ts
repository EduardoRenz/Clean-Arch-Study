import MockIssuer from '../../../test/mocks/MockIssuer'
import IssuerGateway from '../interfaces/IssuerGateway'

export default class IssuerFactory {
  public static create(): IssuerGateway {
    return new MockIssuer()
  }
}
