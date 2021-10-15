export type Project = {
  name: string,
  id: string,
  date: Date,
  shortDescription: string,
  description: string,
  icon: string,
  images?: [string, string][],
  links?: [string, string][]
}