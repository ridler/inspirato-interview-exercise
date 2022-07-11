import { TripListItem, TripListResponse } from "./trips.model";

const jsonData = require("./trips.json") as TripListResponse;

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
        new Date(a[dateField]) > new Date(b[dateField]) ? 1 : 0
    : (a: TripListItem, b: TripListItem) =>
        new Date(a[dateField]) < new Date(b[dateField]) ? 1 : 0;
}

function filterByEnumId(
  trips: TripListItem[],
  field: keyof TripListItem,
  idQuery: number[]
) {
  return trips.filter((trip) => idQuery.includes(trip[field]));
}

export function retrieveTrips(
  sortField: TripSortFields,
  sortDirection: TripSortDirection,
  filters?: Partial<TripFilters>
): TripListItem[] {
  console.log(filters);
  let trips = jsonData.tripSet;
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
