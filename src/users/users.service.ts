import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'Milady', username: 'MiladyMaker', password: 'mil123' },
    { id: 2, name: 'Punk', username: 'CryptoPunks', password: 'punk123' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
