import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test_001')
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
