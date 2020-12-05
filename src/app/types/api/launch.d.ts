type TCores = {
  core: string,
  flight: number,
  gridfins: boolean,
  landing_attempt: boolean,
  landing_success: boolean | null,
  landing_type: string | null,
  landpad:  string | null,
  legs: boolean,
  reused: boolean
}

type TFailures = {
  altitude: number | null,
  reason: string,
  time: number
}

type TFairings = {
  recovered: boolean,
  recovery_attempt: boolean,
  reused: boolean,
  ships: string[]
}

type TLinks = {
  article: string | null,
  flickr: TFlickr
  patch: TPatch,
  presskit: string | null,
  reddit: TReddit,
  webcast: string | null,
  wikipedia: string | null,
  youtube_id: string | null
}

type TFlickr = {
  original: any[],
  small: any[]
}

type TPatch = {
  large: string | null,
  small: string | null
}

type TReddit = {
  campaign: string | null,
  launch: string | null,
  media: string | null,
  recovery: string | null
}

export type TLaunch = {
  auto_update: boolean,
  capsules: string[],
  cores: TCores[],
  crew: string[],
  date_local: string,
  date_precision: string,
  date_unix: number,
  date_utc: string,
  details: string,
  failures: TFailures[],
  fairings: TFairings,
  flight_number: number,
  id: string,
  launchpad: string,
  links: TLinks,
  name: string,
  net: boolean,
  payloads: string[],
  rocket: string,
  ships: string[],
  static_fire_date_unix: number,
  static_fire_date_utc: string,
  success: boolean,
  tbd: boolean,
  upcoming: boolean,
  window: number
}