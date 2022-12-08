import User, { Gender } from '../../common/User'

export default class IssuerUser extends User {
  private gender: Gender

  constructor(id: string, name: string, email: string, gender: Gender) {
    super(id, name, email)
    this.gender = gender
  }

  public static fromUser(user: User, gender: Gender): IssuerUser {
    return new IssuerUser(user.getId, user.getName, user.getEmail, gender)
  }

  public getGender() {
    return this.gender
  }
}
