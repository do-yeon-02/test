import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../common/entities/common.entity';

@Entity({
  name: 'NOTE',
})
export class Note extends CommonEntity {
  //   @PrimaryGeneratedColumn()
  //   id: string;

  @Column({ type: 'text', nullable: false })
  content: string;
}
