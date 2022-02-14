import { randomUUID as uuid } from "crypto";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Categories } from "../../Categories/entities/Categories";

@Entity("videos")
export class Videos {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Categories)
  @JoinColumn({ name: "category_id" })
  category: Categories;

  @Column()
  duration: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
