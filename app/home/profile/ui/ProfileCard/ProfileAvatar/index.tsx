import { getUser } from "../../../../../../actions/user";

export const ProfileAvatar = async () => {
  const user = await getUser();
  
  return (
    <div className="shadow-xl rounded-full absolute -mt-16 left-0 right-0 m-auto bg-blue-500 w-36 h-36 flex items-center justify-center">
      <span className="text-white font-bold text-4xl">
        {user.name.charAt(0)}
      </span>
    </div>
  );
};