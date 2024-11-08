//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ShoppingList')
export class ShoppingListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Items: string;

  @Column('integer', { nullable: true })
  Quantity: number;

  @Column('text', { nullable: true })
  Notes: string;
}