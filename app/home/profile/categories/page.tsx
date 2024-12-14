import { getCategories } from "@/lib/queries/categories";
import { SelectCategories } from "./ui/SelectCategories";
import { getUser } from "@/lib/queries/user";
import { updateUser } from "@/lib/actions/user";

export default async function CategoriesPage() {
  const categories = await getCategories();
  const user = await getUser();

  const selected = user.categories.map((category) => category.id);

  return (
    <div className="dark:bg-gray-900 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center text-gray-600 dark:text-gray-200">
        Choose Your Favorites
      </h1>

      {/* Render Categories */}
      <SelectCategories
        categories={categories}
        selected={selected}
        action={updateUser}
      />
    </div>
  );
}
