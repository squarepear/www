export type Project = {
  name: String,
  id: String,
  date: Date,
  shortDescription: String,
  description: String,
  icon: String,
  images?: [String, String][],
  links?: [String, String][]
}