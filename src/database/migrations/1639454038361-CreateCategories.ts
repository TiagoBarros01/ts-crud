import { MigrationInterface, QueryRunner, Table, TableOptions } from 'typeorm';

const CategoryTable: TableOptions = {
  name: 'categories',
  
  columns: [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
    },
    {
      name: 'name',
      type: 'varchar',
      isUnique: true,
    },
    {
      name: 'description',
      type: 'varchar',
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    },
  ],
};

export class CreateCategories1639454038361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(CategoryTable));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
