import { TripListResponse, TripStyleById } from "./trips.model";

const tripsEndpoit = "/api/trips";

export function getTrips(query: string): Promise<TripListResponse> {
  const url = `${tripsEndpoit}${query}`;
  return fetch(url).then((response) => response.json());
}
