export interface IpAddressObject {
  as: As;
  ip: string;
  isp: string;
  location: Location;
}

export interface As {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
}

export interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}
