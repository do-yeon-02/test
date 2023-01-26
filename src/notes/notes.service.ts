import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private NoteRepository: Repository<Note>,
  ) {}

  async findUserById(id: string): Promise<any> {
    console.log(typeof id);
    console.log(this.NoteRepository);

    const user = await this.NoteRepository.find();
    console.log(user);
    return user;
  }
}
