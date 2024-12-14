import { getUser } from "@/lib/queries/user";

export const CategorySection = async () => {
  const user = await getUser();
  
  return (
    <div className="mb-4 text-base leading-relaxed description-theme">
      {user.categories.length ? (
        <>
          <p className="mb-4 description-theme">
            Here&apos;s a quick look at your favorites categories! These
            represent your interests and help us provide you
            with the best recommendations:
          </p>
          <div className="mb-4 description-theme">
            <span className="font-bold capitalize">
              {user.categories.map((c) => c.title).join(" - ")}
            </span>
          </div>
          <p className="mb-4 description-theme">
            Feel free to update your choices anytime to refine your
            experience further!
          </p>
        </>
      ) : (
        <p className="mb-4 leading-relaxed description-theme">
          You currently don&apos;t have any movie categories selected.
          Take a moment to choose some that resonate with your
          interests, this will help us get to know you better and
          provide personalized recommendations that suit your
          preferences!
        </p>
      )}
    </div>
  );
};