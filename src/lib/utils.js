import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const industryTypes = [
  "Information Technology (IT)",
  "Healthcare and Medical",
  "Finance and Banking",
  "Engineering and Manufacturing",
  "Education and Training",
  "Sales and Marketing",
  "Human Resources (HR)",
  "Legal Services",
  "Retail and E-commerce",
  "Hospitality and Tourism",
  "Construction and Real Estate",
  "Telecommunications",
  "Media and Entertainment",
  "Logistics and Supply Chain",
  "Pharmaceuticals and Biotechnology",
  "Energy and Utilities",
  "Automotive",
  "Aerospace and Defense",
  "Public Sector and Government",
  "Non-Profit and NGOs",
  "Food and Beverage",
  "Fashion and Apparel",
  "Sports and Recreation",
  "Agriculture and Farming",
  "Environmental and Sustainability Services"
];
