interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationAndDimension {
  specificAccessInformation: string[];
  level: string;
  roadNumber: string;
  roadName: string;
  contactDetailsTelephoneNumber: string;
  coordinatesForDisplay: Coordinates;
}

export interface ParkingResult {
  name: string;
  lastupdate: string;
  totalcapacity: number;
  availablecapacity: number;
  occupation: number;
  type: string;
  description: string;
  id: string;
  openingtimesdescription: string;
  isopennow: boolean;
  temporaryclosed: boolean;
  operatorinformation: string;
  freeparking: boolean;
  urllinkaddress: string;
  occupancytrend: string;
  locationanddimension: LocationAndDimension;
  location: {
    lon: number;
    lat: number;
  };
  text: string | null;
  categorie: string;
  dashboard: 'True' | 'False';
}

export interface GaragesInterface {
  total_count: number;
  results: ParkingResult[];
}
