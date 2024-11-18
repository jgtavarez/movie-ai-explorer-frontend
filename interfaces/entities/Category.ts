import { BaseEntity } from "./BaseEntity";

export enum CategoryTitle {
  Action = "action",
  Adventure = "adventure",
  Comedy = "comedy",
  Horror = "horror",
  Musical = "musical",
  Romance = "romance",
}

export interface Category extends BaseEntity {
  title: CategoryTitle;
  image: string;
}
