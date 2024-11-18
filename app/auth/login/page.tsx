import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
          Login
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300">
          Sign in to access your account
        </p>
      </div>
      <LoginForm />
    </>
  );
}
