import { LoadingIcon } from "../icons";

export const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center space-x-1 text-sm title-theme">
        <LoadingIcon />
        <div>Loading...</div>
      </div>
    </div>
  );
};
