import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-950 text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {error.statusText || error.message || "Something went wrong."}
      </p>
      <button 
        onClick={() => window.location.href = "/"}
        className="mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg hover:bg-black transition-colors"
      >
        Go back home
      </button>
    </div>
  );
};

export default Error;
