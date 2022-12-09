import MockCardRepository from '../../../test/mocks/MockCardRepository'
import CardRepository from '../interfaces/CardRepository'

export default class CardRepositoryFactory {
  public static create(): CardRepository {
    return new MockCardRepository()
  }
}
