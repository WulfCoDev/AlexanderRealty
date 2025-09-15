import { useParams, Link } from "react-router-dom";

export default function ListingDetails() {
  const { id } = useParams();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold">Listing Details</h2>
      <p className="mt-4 text-gray-700">
        You are viewing details for listing ID: <span className="font-bold">{id}</span>
      </p>
      <Link to="/listings" className="text-blue-500 hover:underline block mt-4">
        ← Back to Listings
      </Link>
    </section>
  );
}
