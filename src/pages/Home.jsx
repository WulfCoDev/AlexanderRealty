import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      // Pass any user input: address, neighborhood, city, or ZIP
      navigate(`/listings?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/listings");
    }
  };

  return (
    <section className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Find Your Home</h1>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex gap-2">
        <input
          type="text"
          placeholder="Enter address, neighborhood, city, or ZIP..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </section>
  );
}
