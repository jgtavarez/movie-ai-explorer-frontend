import { BaseEntity } from "./BaseEntity";

export interface User extends BaseEntity {
  name: string;
  email: string;
  active: boolean;
}
