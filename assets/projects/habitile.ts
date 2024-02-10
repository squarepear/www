import type { Project } from './projectType'

export default <Project>{
  name: 'Habitile',
  id: 'habitile',
  startDate: new Date('2023-01-09'),
  endDate: new Date('2023-05-05'),
  shortDescription:
    'A fun two-player game where you try to get the most points by strategically placing tiles!',
  description: `
    Habitile is a game where you and your opponent take turns placing tiles on a
    board. Each tile has point values based on the tiles around it. The goal is
    to get the most points by the end of the game.

    I worked on this project with a multidisciplinary team of students from
    different majors (Computer Science, Art, and Music). It was a collaboration
    between Ball State University and Minnetrista, a local museum. We had one
    semester to complete the project with a team of 14 students.
  `, // TODO: add more details
  icon: '/icon.svg',
  images: [
    // ['Main Page', 'https://cloud-rgbz2a9ku-hack-club-bot.vercel.app/0mainpage.png'],
  ],
  links: [
    ['Game Page', 'https://studio-hungus.github.io/habitile/'],
    ['GitHub Repository', 'https://github.com/studio-hungus/habitile'],
  ],
}
