export enum Gender {
  M = 'Male',
  F = 'Female',
  N = 'None'
}

export default abstract class User {
  protected id: string
  protected name: string
  protected email: string

  constructor(id: string, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }

  public get getName(): string {
    return this.name
  }

  public get getEmail(): string {
    return this.email
  }

  public get getId(): string {
    return this.id
  }

  public setName(name: string) {
    this.name = name
  }

  public setEmail(email: string) {
    this.email = email
  }
}
