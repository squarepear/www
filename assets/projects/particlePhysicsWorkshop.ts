import type { Project } from './projectType'

export default <Project>{
  name: 'Particle Physics Workshop',
  id: 'particle_physics_workshop',
  startDate: new Date('2020-12-05'),
  endDate: new Date('2021-01-15'),
  shortDescription:
    'A short programming workshop using p5.js and physics to make a cool animation!',
  description: `
    This is a workshop I created for Hack Club's workshop bounty program. Hack
    Club is a non-profit organization that helps high school students start
    coding clubsand learn to code. I decided to make a physics simulation
    because I have always enjoyed physics in school. It's also a great way to
    get interesting and exciting animations that are different every time!
  `,
  icon: 'https://cloud-qamojlfei-hack-club-bot.vercel.app/0particle_physics_icon.svg',
  images: [['Example', 'https://cloud-oddjiiq5k.vercel.app/0summary.gif']],
  links: [
    ['Workshop Page', 'https://workshops.hackclub.com/particle_physics/'],
    ['Hack Club', 'https://hackclub.com'],
  ],
}
