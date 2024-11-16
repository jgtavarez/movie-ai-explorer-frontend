export default function OnboardingPage() {
  const categories = [
    "Action",
    "Adventure",
    "Comedy",
    "Horror",
    "Musical",
    "Romance",
  ];
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-gray-200 text-5xl">Who&apos;s watching?</h1>

      <div className="flex flex-row flex-wrap gap-5 mt-8">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="flex flex-col items-center group gap-2"
          >
            <img
              className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
              src="https://picsum.photos/seed/a/150/150"
            />
            <p className="text-gray-500 group-hover:text-gray-300">
              {category}
            </p>
          </a>
        ))}
      </div>

      <button className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400">
        Manage Profiles
      </button>
    </div>
  );
}
