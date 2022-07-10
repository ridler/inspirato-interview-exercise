import { FC } from "react";
import { Box, Image } from "@chakra-ui/react";

import { TripListItem } from "../../data/trips/trips.model";
import { CMSBaseUrl } from "../../config/cms";

export const InspTripListItem: FC<{ trip: TripListItem }> = ({ trip }) => {
  return (
    <Box p="6">
      <Image src={`${CMSBaseUrl}${trip.heroImage}?width=400`} />
      <Box>
        <title>{trip.unitName}</title>
        <p>{trip.unitStyleName}</p>
        <p>{trip.checkInDate}</p>
        <p>{trip.parentCategoryName}</p>
      </Box>
    </Box>
  );
};
