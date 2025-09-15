import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "../api/listings";
import { Link, useLocation } from "react-router-dom";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function Listings() {
  const queryParams = useQueryParams();
  const search = queryParams.get("search") || "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["listings", search],
    queryFn: () => fetchListings(search),
  });

  if (isLoading) return <p className="p-6">Loading listings...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading listings.</p>;

  // ✅ Extract the array of properties
  const listings = data?.searchResults?.map((item) => item.property) || [];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Available Listings for "{search}"
      </h2>

      {listings.length === 0 ? (
        <p>No listings found for "{search}".</p>
      ) : (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <li key={listing.zpid} className="border rounded-lg shadow-sm overflow-hidden">
              {/* Image */}
             <img
  src={
    listing.media?.propertyPhotoLinks?.highResolutionLink ||
    listing.media?.allPropertyPhotos?.highResolution?.[0] ||
    "https://via.placeholder.com/400x300?text=No+Image"
  }
  alt={listing.address?.streetAddress || "Listing image"}
  className="w-full h-48 object-cover object-center"
/>


              {/* Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {listing.address?.streetAddress || "Unknown Address"}
                </h3>
                <p className="text-gray-600">
                  ${listing.price?.value?.toLocaleString() || "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  {listing.bedrooms || "?"} bd | {listing.bathrooms || "?"} ba
                </p>
                <p className="text-sm text-gray-500">
                  {listing.livingArea ? `${listing.livingArea} sqft` : ""}
                </p>
                <Link
                  to={`/listings/${listing.zpid}`}
                  className="text-blue-500 hover:underline block mt-2"
                >
                  View Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
