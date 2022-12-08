import Card, { CardType } from '../src/Card/models/Card'
import IssuerUser from '../src/Card/models/IssuerUser'
import Address from '../src/common/Address'
import CoreUser, { CoreUserRole } from '../src/core/CoreUser'
import MockIssuer from './mocks/MockIssuer'

const defaultAddress = new Address('98600000', 'BR', 'RS', 'Tres Passos', 'Test Stet', '42', 'Side of the road')

const coreUser = new CoreUser('1', 'Regular user', 'regular@test.com', '13124124', CoreUserRole.user)

test('It should create a IssuerUser', () => {
  const mockIssuer = new MockIssuer()
  const issuerUser = mockIssuer.createUser(coreUser)
  expect(issuerUser).toBeInstanceOf(IssuerUser)
})

test('It should Request a card', () => {
  const mockIssuer = new MockIssuer()
  const issuerUser = mockIssuer.createUser(coreUser)

  const requestedCard = mockIssuer.requestCard(issuerUser, CardType.PLASTIC, defaultAddress)

  expect(issuerUser).toBeInstanceOf(IssuerUser)
  expect(requestedCard).toBeInstanceOf(Card)
  expect(requestedCard.type).toBe(CardType.PLASTIC)
})
