import { TripListResponse } from "./trips.model";

const tripsEndpoit = "/api/trips";

export function getTrips(): Promise<TripListResponse> {
  return fetch(tripsEndpoit).then((response) => response.json());
}
