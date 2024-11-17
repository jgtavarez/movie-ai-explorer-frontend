import { User } from "./entities/User";

export interface AuthResponse {
  jwt: string;
  user: Pick<User, "id">;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
