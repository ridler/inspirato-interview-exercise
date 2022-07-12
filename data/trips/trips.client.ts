import { TripListResponse } from "./trips.model";

const tripsEndpoit = "/api/trips";

/**
 * This is the client responsible for fetching trip data from the API
 * TODO: implement a client-side caching strategy
 */
export function getTrips(query: string): Promise<TripListResponse> {
  const url = `${tripsEndpoit}${query}`;
  return fetch(url).then((response) => response.json());
}
