export default class Address {
  private zipCode: string
  private country: string
  private state: string
  private city: string
  private street: string
  private number: string
  private complement?: string
  private extraInfo?: string

  constructor(
    zipCode: string,
    country: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement?: string,
    extraInfo?: string
  ) {
    this.zipCode = zipCode
    this.country = country
    this.state = state
    this.city = city
    ;(this.street = street), (this.number = number)
    this.complement = complement
    this.extraInfo = extraInfo
  }

  get getZipCode() {
    return this.zipCode
  }

  get getCountry() {
    return this.country
  }

  get getState() {
    return this.state
  }

  get getCity() {
    return this.city
  }

  get getStreet() {
    return this.street
  }

  get getNumber() {
    return this.number
  }

  get getComplement() {
    return this.complement
  }

  get getExtraInfo() {
    return this.extraInfo
  }
}
