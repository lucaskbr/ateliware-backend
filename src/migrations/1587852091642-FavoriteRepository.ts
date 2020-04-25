import {MigrationInterface, QueryRunner} from "typeorm";

export class FavoriteRepository1587852091642 implements MigrationInterface {
    name = 'FavoriteRepository1587852091642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_repository" ("id" SERIAL NOT NULL, "github_id" integer NOT NULL, "name" character varying NOT NULL, "avatar_owner_url" character varying NOT NULL, "url" character varying NOT NULL, "description" character varying, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_fcad004d521ae29a4cb462b3126" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "favorite_repository"`, undefined);
    }

}
