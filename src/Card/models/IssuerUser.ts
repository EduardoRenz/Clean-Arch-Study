import User, { Gender } from '../../common/User'

export default class IssuerUser extends User {
  private gender: Gender
  constructor(id: string, name: string, email: string, gender: Gender) {
    super(id, name, email)
    this.gender = gender
  }

  public getGender() {
    return this.gender
  }
}
