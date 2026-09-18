export interface SuburbLocation {
  name: string;
  postcode: string;
  region: "Central & Inner City" | "Northside" | "Southside" | "East & Bay" | "Western Suburbs";
  popular?: boolean;
}

export const BRISBANE_SUBURBS: SuburbLocation[] = [
  { name: "New Farm", postcode: "4005", region: "Central & Inner City", popular: true },
  { name: "Teneriffe", postcode: "4005", region: "Central & Inner City", popular: true },
  { name: "Ascot", postcode: "4007", region: "Northside", popular: true },
  { name: "Hamilton", postcode: "4007", region: "Northside", popular: true },
  { name: "Paddington", postcode: "4064", region: "Central & Inner City", popular: true },
  { name: "Bulimba", postcode: "4171", region: "East & Bay", popular: true },
  { name: "Hawthorne", postcode: "4171", region: "East & Bay", popular: true },
  { name: "Kangaroo Point", postcode: "4169", region: "Central & Inner City", popular: true },
  { name: "Indooroopilly", postcode: "4068", region: "Western Suburbs", popular: true },
  { name: "St Lucia", postcode: "4067", region: "Western Suburbs" },
  { name: "Clayfield", postcode: "4011", region: "Northside" },
  { name: "Spring Hill", postcode: "4000", region: "Central & Inner City" },
  { name: "South Brisbane", postcode: "4101", region: "Central & Inner City" },
  { name: "West End", postcode: "4101", region: "Central & Inner City" },
  { name: "Woolloongabba", postcode: "4102", region: "Southside" },
  { name: "Camp Hill", postcode: "4152", region: "East & Bay" },
  { name: "Carindale", postcode: "4152", region: "East & Bay" },
  { name: "Chermside", postcode: "4032", region: "Northside" },
  { name: "Kenmore", postcode: "4069", region: "Western Suburbs" },
  { name: "Sunnybank", postcode: "4109", region: "Southside" }
];
