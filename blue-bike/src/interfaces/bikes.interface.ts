export interface BikesInterface {
  total_count: number;
  results: BikesResult[];
}

export interface BikesResult {
  last_seen: string;
  id: number;
  name: string;
  bikes_in_use: number;
  bikes_available: number;
  longitude: string;
  latitude: string;
  geopoint: Geopoint;
  type: string;
}

interface Geopoint {
  lon: number;
  lat: number;
}
