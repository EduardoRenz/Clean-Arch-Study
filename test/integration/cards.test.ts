import CardUseCases from '../../src/Card/CardUseCases'
import Card, { CardType } from '../../src/Card/models/Card'
import CoreUser, { CoreUserRole } from '../../src/core/CoreUser'
import MockIssuer from '../mocks/MockIssuer'

describe('Card Integration tests', () => {
  it('Shoud fail to request a card due no issueruser', () => {
    const user = new CoreUser('1', 'John Doe', 'john@gmail.com', '123123123', CoreUserRole.user)

    expect(() => {
      const cardUseCase = new CardUseCases(user, new MockIssuer())
      cardUseCase.requestCard(CardType.VIRTUAL)
    }).toThrowError('Issuer user not found')
  })

  it('Shoud sucessfuly request a card', () => {
    const user = new CoreUser('1', 'John Doe', 'john@gmail.com', '00000000000', CoreUserRole.user)

    const cardUseCase = new CardUseCases(user, new MockIssuer())
    const card = cardUseCase.requestCard(CardType.VIRTUAL)

    expect(card.type).toBe('VIRTUAL')
  })
})
