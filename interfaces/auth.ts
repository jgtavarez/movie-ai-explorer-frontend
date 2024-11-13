import { User } from "./entities/User";

export interface AuthResponse {
  jwt: string;
  user: User;
}