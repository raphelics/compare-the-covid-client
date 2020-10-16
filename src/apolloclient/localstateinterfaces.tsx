export interface UserSearchData {
  id?: number,
  name?: string,
  country?: string,
  googlemap_URL?: string,
  location_type?: string,
  latitude: number,
  longitude: number,
}

export interface UserAlerts {
  confirmed: any[],
  suspected: any[],
  safe: any[],
}

export interface AuthenticatedUser {
  id?: number | null | undefined,
  token?: string,
}

export type SavedLocations = (number | null) [];