//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GroceryStore')
export class GroceryStoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Location: string;

  @Column('text', { nullable: true })
  ContactInformation: string;

  @Column('text', { nullable: true })
  OpeningHours: string;

  @Column('text', { nullable: true })
  Products: string;

  @Column('real', { nullable: true })
  Ratings: number;
}