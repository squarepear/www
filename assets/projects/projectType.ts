export type Project = {
  name: string,
  id: string,
  startDate: Date,
  endDate: Date | null,
  shortDescription: string,
  description: string,
  icon: string,
  images?: [string, string][],
  links?: [string, string][]
}
