import {
  AfterInsert,
  Entity,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() email: string;

  @Column() password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('updated User', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('removed User', this.id);
  }
}
