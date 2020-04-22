import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FavoriteRepository {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatarOwnerUrl: string;

  @Column()
  url: string;

  @CreateDateColumn({
    type: 'timestamptz',
    select: false,
  })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', select: false })
  updatedAt: Date;

  constructor(name, avatarOwnerUrl, url) {
    this.name = name;
    this.avatarOwnerUrl = avatarOwnerUrl;
    this.url = url;
  }
}
