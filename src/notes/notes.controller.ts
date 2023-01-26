import { Controller, Get, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
@Controller('api/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('wrt/:sCateId')
  async signUp(@Param('sCateId') sCateId: string) {
    return await this.notesService.findUserById(sCateId);
  }
}
