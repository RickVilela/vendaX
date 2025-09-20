// users.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = []; // substitua por DB real depois

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async createUser(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: this.users.length + 1,
      name,
      email,
      password: hashedPassword,
    };
    this.users.push(newUser);
    return newUser;
  }
}
