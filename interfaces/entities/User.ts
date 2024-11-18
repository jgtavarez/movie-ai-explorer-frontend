import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

export interface User extends BaseEntity {
  name: string;
  email: string;
  active: boolean;
  categories: Category[];
}

// DTO

export interface UpdateUserInput {
  categories: string[];
}
