import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm'
import { Product } from './Product';

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  products: Product[];

  @OneToMany(type => Category, (category: Category) => category.parent, {cascadeInsert: true, cascadeUpdate: true} as any)
  child: Category[];

  @ManyToOne(type => Category, (category: Category) => category.child, {cascadeInsert: true, cascadeUpdate: true} as any)
  parent: Category;
  
}