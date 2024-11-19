import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            We didn&apos;t reinvent the wheel
          </h2>
          <p className="mb-4">
            We are movie enthusiasts, AI experts and developers. Passionate
            about bringing the best movie recommendations and insights to you.
            Our AI technology is sophisticated enough to understand complex
            preferences, yet simple enough to have natural conversations. We
            combine cutting-edge artificial intelligence with deep movie
            knowledge to enhance your cinema experience.
          </p>
          <p>
            We are movie lovers, AI engineers and developers. Innovators and
            problem solvers. Focused on bringing you the best movie experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="office content 1"
            width={500}
            height={300}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="office content 2"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
