import User from '../common/User'

export enum CoreUserRole {
  user,
  admin
}

export default class CoreUser extends User {
  private role: CoreUserRole
  constructor(id: string, name: string, email: string, document: string, role: CoreUserRole) {
    super(id, name, email, document)
    this.role = role
  }

  get getRole() {
    return this.role
  }
}
