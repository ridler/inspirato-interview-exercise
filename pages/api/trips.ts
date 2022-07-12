// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TripListResponse } from "../../data/trips/trips.model";
import {
  retrieveCategoryMap,
  retrieveStyleMap,
  retrieveTrips,
  TripFilters,
} from "../../data/trips/trips.repository";

/**
 * This function is the API endpoint that sends JSON data relevant to the trips page
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TripListResponse>
) {
  // TODO: query parameter validation and general API security
  const { sort, tripStyle, propertyType } = req.query;
  const [sortField, sortDirection] = sort ? (sort as string).split(":") : [];

  const filters = (tripStyle || propertyType) ? {
    unitParentCategoryID: propertyType ? (Array.isArray(propertyType) ? propertyType.map(Number) : [Number(propertyType)]) : [],
    unitStyleID: tripStyle ? (Array.isArray(tripStyle) ? tripStyle.map(Number) : [Number(tripStyle)]) : [],
  } : undefined;

  const tripSet = retrieveTrips(
    sortField as "checkInDate",
    sortDirection as "asc" | "desc",
    filters as TripFilters,
  );

  res.status(200).json({
    tripSet,
    styles: retrieveStyleMap(),
    parentCategories: retrieveCategoryMap(),
  });
}
