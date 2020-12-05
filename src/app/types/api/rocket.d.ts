type TDiameter = {
  feet: number,
  meters: number
}

type TEngines = {
  engine_loss_max: number,
  isp: {
    sea_level: number,
    vacuum: number
  },
  layout: string,
  number: number,
  propellant_1: string,
  propellant_2: string,
  thrust_sea_level: {
    kN: number,
    lbf: number
  },
  thrust_to_weight: number,
  thrust_vacuum: {
    kN: number,
    lbf: number
  },
  type: string,
  version: string
}

type TFirstStage = {
  burn_time_sec: number,
  engines: number,
  fuel_amount_tons: number,
  reusable: boolean,
  thrust_sea_level: {
    kN: number,
    lbf: number
  }
  thrust_vacuum: {
    kN: number,
    lbf: number
  }
}

type THeight = {
  meters: number,
  feet: number
}

type TLandingLegs = {
  material: string | null,
  number: number
}

type TMass = {
  kg: number,
  lb: number
}

type TPayloadWeights = {
  id: string,
  kg: number,
  lb: number,
  name: string
}

type TSecondStage = {
  burn_time_sec: number,
  engines: number,
  fuel_amount_tons: number,
  payloads: {
    composite_fairing: {
      diameter: {
        feet: number,
        meters: number
      },
      height: {
        feet: number,
        meters: number
      }
    },
    option_1: string,
  },
  reusable: boolean,
  thrust: {
    kN: number,
    lbf: number
  }
}

export type TRocket = {
  active: boolean,
  boosters: number,
  company: string,
  cost_per_launch: number,
  country: string,
  description: string,
  diameter: TDiameter,
  engines: TEngines,
  first_flight: string,
  first_stage: TFirstStage,
  flickr_images: string[],
  height: THeight,
  id: string,
  landing_legs: TLandingLegs,
  mass: TMass,
  name: string,
  payload_weights: TPayloadWeights[],
  second_stage: TSecondStage,
  stages: number,
  success_rate_pct: number,
  type: string,
  wikipedia: string
}