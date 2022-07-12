import { TripListItem, TripListResponse } from "./trips.model";

const jsonData = require("./trips.json") as TripListResponse;

/**
 * This module acts as a "data layer". It is responsible for querying trip data, and is agnostic of
 * transfer formats or protocols
 */

type TripSortFields = keyof TripListItem & "checkInDate";
type TripSortDirection = "asc" | "desc";

export interface TripFilters {
  unitParentCategoryID: number[];
  unitStyleID: number[];
}

function sortByDate(
  dateField: keyof TripListItem,
  direction: TripSortDirection
) {
  return direction === "asc"
    ? (a: TripListItem, b: TripListItem) =>
        new Date(a[dateField]) > new Date(b[dateField]) ? 1 : -1
    : (a: TripListItem, b: TripListItem) =>
        new Date(a[dateField]) < new Date(b[dateField]) ? 1 : -1;
}

function filterByEnumId(
  trips: TripListItem[],
  field: keyof TripListItem,
  idQuery: number[]
) {
  return trips.filter((trip) => idQuery.includes(trip[field]));
}

/**
 * This is a hacked stub of what a database query engine might take care of in a real application
 */
export function retrieveTrips(
  sortField: TripSortFields,
  sortDirection: TripSortDirection,
  filters?: Partial<TripFilters>
): TripListItem[] {
  let trips = jsonData.tripSet;
  // TODO: filter and sort in one step (like with a database).
  if (filters) {
    Object.entries(filters).forEach(([field, query]) => {
      if (query.length)
        trips = filterByEnumId(trips, field as keyof TripListItem, query);
    });
  }
  if (sortField === "checkInDate") {
    return trips.sort(sortByDate(sortField, sortDirection));
  } else {
    return trips;
  }
}

export function retrieveStyleMap() {
  return jsonData.styles;
}

export function retrieveCategoryMap() {
  return jsonData.parentCategories;
}
