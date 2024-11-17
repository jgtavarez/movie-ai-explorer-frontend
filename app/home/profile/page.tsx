import { getUser } from "@/actions/user";
import { ProfileCard } from "./ui/ProfileCard";

export default async function ProfilePage() {
  const user = await getUser();

  return (
    <section
      className="bg-gray-200"
      style={{
        flex: "1 1 auto",
        overflow: "auto",
      }}
    >
      <section className="relative block h-500-px h-96 ">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)",
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      {/* Card */}
      <ProfileCard user={user} />
    </section>
  );
}