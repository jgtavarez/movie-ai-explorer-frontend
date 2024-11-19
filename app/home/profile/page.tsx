import { ProfileCard } from "./ui/ProfileCard";
import Image from "next/image";

export default async function ProfilePage() {
  return (
    <main className="flex-1 overflow-auto bg-gray-200">
      <div className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
            alt="Profile background image"
            layout="fill"
            className="object-cover"
            quality={80}
            priority
          />
          {/* Overlay for background image */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Profile information card */}
      <ProfileCard />
    </main>
  );
}
