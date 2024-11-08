//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ExpirationDateReminder')
export class ExpirationDateReminderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Product: string;

  @Column('date', { nullable: true })
  ExpirationDate: Date;

  @Column('date', { nullable: true })
  ReminderDate: Date;

  @Column('integer', { nullable: true })
  User: number;
}
