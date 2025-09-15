export async function fetchListings(search = "", page = 1) {
  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
  const API_HOST = "zillow-working-api.p.rapidapi.com";

  const url = `https://${API_HOST}/search/byaddress?location=${encodeURIComponent(
    search
  )}&page=${page}&sortOrder=Homes_for_you&listingStatus=For_Sale&bed_min=No_Min&bed_max=No_Max&bathrooms=Any&homeType=Houses,Townhomes,Multi-family,Condos/Co-ops,Lots-Land,Apartments,Manufactured&maxHOA=Any&listingType=By_Agent&listingTypeOptions=Agent listed,New Construction,Fore-closures,Auctions&parkingSpots=Any&mustHaveBasement=No&daysOnZillow=Any&soldInLast=Any`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch listings");

  const data = await res.json();
  console.log("Zillow API Response:", data);
  return data;
}
