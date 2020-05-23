import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Category } from './Category';

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  short_description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  list_price: number;

  @Column()
  sell_price: number;

  @ManyToOne(() => Category, (category: Category) => category.products)
  category: Category
  
}