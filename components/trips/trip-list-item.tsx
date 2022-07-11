import { FC } from "react";
import { Box, Image, Tag } from "@chakra-ui/react";

import { TripListItem } from "../../data/trips/trips.model";
import { CMSBaseUrl } from "../../config/cms";
import { ColorScheme } from "../../config/colors";

export const InspTripListItem: FC<{ trip: TripListItem }> = ({ trip }) => {
  // TODO: use a library like date-fns to make this more maintainable
  const checkInDate = new Date(trip.checkInDate);
  return (
    <Box border="1px solid lightgrey">
      <Image src={`${CMSBaseUrl}${trip.heroImage}?width=760`} loading="lazy" />
      <Box p="3">
        <p>{trip.unitName}</p>
        <p>{trip.locationName}</p>
        <Tag my="2" mr="4" colorScheme={ColorScheme.tripStyle}>{trip.unitStyleName}</Tag>
        <Tag my="2" colorScheme={ColorScheme.propertyType}>{trip.parentCategoryName}</Tag>
        <p>{checkInDate.toLocaleDateString()}</p>
      </Box>
    </Box>
  );
};
