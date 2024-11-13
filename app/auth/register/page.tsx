import { RegisterForm } from "./ui/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
          Register
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300">
          Sign up to access your account
        </p>
      </div>
      <RegisterForm />
    </>
  );
}
