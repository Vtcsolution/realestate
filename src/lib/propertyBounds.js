import { properties } from '../data/properties'

const priceValues = properties.map((property) => property.price)
export const PRICE_BOUNDS = [
  Math.floor(Math.min(...priceValues) / 500000) * 500000,
  Math.ceil(Math.max(...priceValues) / 500000) * 500000,
]

const areaValues = properties.map((property) => property.area)
export const AREA_BOUNDS = [
  Math.floor(Math.min(...areaValues) / 500) * 500,
  Math.ceil(Math.max(...areaValues) / 500) * 500,
]

export const LOCATIONS = [...new Set(properties.map((property) => property.location))].sort()
export const VIEWS = [...new Set(properties.map((property) => property.view))].sort()
