"use client";
import { signout } from "../../../../../actions/auth/signout";

export const SignOut = () => {
  return (
    <button
      className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
      onClick={() => signout()}
    >
      Sign Out
    </button>
  );
};
