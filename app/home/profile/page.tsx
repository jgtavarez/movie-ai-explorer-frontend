import { ProfileCard } from "./ui/ProfileCard";
import Image from "next/image";

export default async function ProfilePage() {
  return (
    <section
      className="bg-gray-200"
      style={{
        flex: "1 1 auto",
        overflow: "auto",
      }}
    >
      <div className="relative block h-500-px h-96 ">
        <div className="relative top-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
            alt="Profile background image"
            layout="fill"
            style={{
              objectFit: "cover",
            }}
            quality={80}
            priority
          />
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
      </div>

      {/* Card */}
      <ProfileCard />
    </section>
  );
}
