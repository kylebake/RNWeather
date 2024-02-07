type System = {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

type MainData = {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

type Coordinate = {
  lat: number
  lon: number
}

type Cloud = {
  all: number
}

type Wind = {
  deg: number
  speed: number
}

export type WeatherDetail = {
  description: string
  icon: string
  id: number
  main: string
}

export type Weather = {
  base: string
  clouds: Cloud
  cod: number
  coord: Coordinate
  dt: number
  id: number
  main: MainData
  name: string
  sys: System
  timezone: number
  visbility: number
  weather: WeatherDetail[]
  wind: Wind
}
