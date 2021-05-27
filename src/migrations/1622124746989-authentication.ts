import {MigrationInterface, QueryRunner} from "typeorm";

export class authentication1622124746989 implements MigrationInterface {
    name = 'authentication1622124746989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `projects` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD `userId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `userId`");
        await queryRunner.query("DROP TABLE `projects`");
    }

}
