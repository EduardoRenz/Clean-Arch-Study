import MockIssuer from '../../test/mocks/MockIssuer'
import IssuerGateway from './IssuerGateway'

export default class IssuerFactory {
  public static create(): IssuerGateway {
    return new MockIssuer()
  }
}
