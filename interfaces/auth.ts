import { User } from "./entities/user";

export interface AuthResponse {
  jwt: string;
  user: User;
}
