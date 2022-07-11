import {
  Box,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import { InspTripListItem } from "../components/trips/trip-list-item";
import { ColorScheme } from "../config/colors";
import { getTrips } from "../data/trips/trips.client";
import {
  PropertyTypeById,
  TripListItem,
  TripStyleById,
} from "../data/trips/trips.model";
import styles from "../styles/Home.module.css";

const Trips: NextPage = () => {
  const [trips, setTrips] = useState<TripListItem[]>([]);
  const [tripStyleById, setTripStyleById] = useState<TripStyleById>({});
  const [propertyTypeById, setPropertyTypeById] = useState<PropertyTypeById>(
    {}
  );

  const [sort, setSort] = useState("checkInDate:asc");

  useEffect(() => {
    getTrips().then((tripsResponse) => {
      setTrips(tripsResponse.tripSet);
      setTripStyleById(tripsResponse.styles);
      setPropertyTypeById(tripsResponse.parentCategories);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Inspirato Trips</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="1200px">
          <Heading mb="4">Book a Trip</Heading>
          <Stack direction={["column", "row"]} my="6">
            <Wrap>
              <WrapItem>
                <Tag p="3" colorScheme={ColorScheme.tripStyle}>
                  <fieldset>
                    <legend>Trip Style</legend>
                    <CheckboxGroup colorScheme={ColorScheme.tripStyle}>
                      <Wrap spacing="6" my="2">
                        {Object.entries(tripStyleById).map(
                          ([styleId, label]) => (
                            <WrapItem key={styleId}>
                              <Checkbox value={styleId}>{label}</Checkbox>
                            </WrapItem>
                          )
                        )}
                      </Wrap>
                    </CheckboxGroup>
                  </fieldset>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme={ColorScheme.propertyType} p="3">
                  <fieldset>
                    <legend>Property Type</legend>
                    <CheckboxGroup colorScheme={ColorScheme.propertyType}>
                      <Wrap spacing="6" my="2">
                        {Object.entries(propertyTypeById).map(
                          ([propertyTypeId, label]) => (
                            <WrapItem key={propertyTypeId}>
                              <Checkbox value={propertyTypeId}>
                                {label}
                              </Checkbox>
                            </WrapItem>
                          )
                        )}
                      </Wrap>
                    </CheckboxGroup>
                  </fieldset>
                </Tag>
              </WrapItem>
            </Wrap>
            <Spacer />
            <Box minWidth="250px">
              <FormControl>
                <FormLabel htmlFor="sortSelect">Sort By</FormLabel>
                <Select
                  id="sortSelect"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="checkInDate:asc">
                    Check-In Date: Earliest
                  </option>
                  <option value="checkInDate:desc">
                    Check-In Date: Latest
                  </option>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <SimpleGrid minChildWidth="350px" spacing="6">
            {trips.map((trip, index) => (
              <Suspense key={index}>
                <InspTripListItem trip={trip} />
              </Suspense>
            ))}
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
};

export default Trips;
