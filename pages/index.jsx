import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="text-center p-6 bg-white rounded-2xl shadow-md">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          Navigate to Sign Up page
        </p>
        <button
          onClick={() => router.push("/signUp")}
          className="px-5 py-2 rounded-lg bg-blue text-white font-medium hover:bg-blue-700 transition duration-300"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Home;
