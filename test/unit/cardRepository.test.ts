import Card, { CardType } from '../../src/Card/models/Card'
import CoreUser, { CoreUserRole } from '../../src/core/CoreUser'
import MockCardRepository from '../mocks/MockCardRepository'

describe('Card Repository Testes', () => {
  it('Should add a new card to repository', () => {
    const repository = new MockCardRepository()
    const card = new Card('0', CardType.PLASTIC)
    const user = new CoreUser('1', 'Test user 1', 'user@tgeste.com', '00000000000', CoreUserRole.user)
    const response = repository.save(card, user)
    expect(response).toBe('0')
  })

  it('Should return a card by id', () => {
    const repository = new MockCardRepository()
    const card = repository.getById('0')
    expect(card).toBeInstanceOf(Card)
    expect(card?.type).toBe(CardType[CardType.VIRTUAL])
  })

  it('Should return cards by user id', () => {
    const repository = new MockCardRepository()
    const cards = repository.getCardsByUserId('0')
    expect(cards[0]).toBeInstanceOf(Card)
    expect(cards[0]?.type).toBe(CardType[CardType.VIRTUAL])
    expect(cards.length).toBe(1)
  })
})
