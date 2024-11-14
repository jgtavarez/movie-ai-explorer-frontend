export default function Loading() {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
      <>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-6 lg:mt-8">
          {[...Array(2)].map((_, i) => (
            <div key={`grid_1_${i}`} className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {[...Array(8)].map((_, i) => (
            <div key={`grid_2_${i}`} className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
