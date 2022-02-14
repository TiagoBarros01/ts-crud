import { randomUUID as uuid } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Categories {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
