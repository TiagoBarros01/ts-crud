import { MigrationInterface, QueryRunner, Table, TableOptions } from 'typeorm';

const videoTable: TableOptions = {
  name: 'videos',

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
      name: 'category_id',
      type: 'uuid',
    },
    {
      name: 'duration',
      type: 'numeric',
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    },
  ],

  foreignKeys: [
    {
      name: 'fk_videos_category',
      referencedTableName: 'categories',
      referencedColumnNames: ['id'],
      columnNames: ['category_id'],
    },
  ],
};

export class CreateVideos1639522438722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(videoTable));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("videos");
  }
}
