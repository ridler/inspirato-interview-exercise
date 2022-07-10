export interface TripListItem {
  curatedTripSetId: number;
  curatedTripSetName: string;
  curatedTripSetDescription: string;
  showTripValue: boolean;
  checkInDate: string;
  checkOutDate: string;
  numberOfDays: number;
  curatedTripMasterInventoryId: number;
  unitName: string;
  unitID: number;
  unitSourceID: number;
  rid: string;
  unitParentCategoryID: number;
  parentCategoryName: string;
  propertyID: number;
  propertyName?: any;
  locationID: number;
  locationName: string;
  locationGroupID: number;
  locationGroupName: string;
  unitStyleID: number;
  unitStyleName: string;
  coverImage: string;
  bedrooms: number;
  bathrooms: string;
  occupancy: number;
  squareFootage: number;
  umbracoNodeID: number;
  unitURL: string;
  value: number;
  overrideUrl?: any;
  featuredOrder: number;
  heroImage: string;
  isNew: boolean;
  dataMonthId: string;
  dataMonthName: string;
}

export interface TripListResponse {
    tripSet: TripListItem[];
}

