import { unstable_cache } from "next/cache";

export interface GoogleReviewSummary {
  rating: number;
  userRatingsTotal: number;
  placeUrl: string;
}

interface PlaceDetailsResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
  };
  status: string;
  error_message?: string;
}

async function fetchPlaceDetails(): Promise<GoogleReviewSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,url");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), {
      // Cached by unstable_cache below; disable default caching here to avoid double-cache.
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as PlaceDetailsResponse;
    if (data.status !== "OK" || !data.result) return null;
    const { rating, user_ratings_total, url: placeUrl } = data.result;
    if (typeof rating !== "number" || typeof user_ratings_total !== "number") {
      return null;
    }
    return {
      rating,
      userRatingsTotal: user_ratings_total,
      placeUrl: placeUrl ?? "",
    };
  } catch {
    return null;
  }
}

// Cache for 6 hours — Google Places billing is per-request.
export const getGoogleReviewSummary = unstable_cache(
  fetchPlaceDetails,
  ["google-review-summary"],
  { revalidate: 6 * 60 * 60 }
);
