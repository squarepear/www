import {Project} from './projectType'

export default <Project> {
  name: 'p5 Commander',
  id: 'p5_commander',
  date: new Date('2021-03-08'),
  shortDescription: 'A tool to manage and display your p5 sketches!',
  description: `
    p5_commander is a tool to help you quickly and easily prototype or build p5 sketches.
    It is built to be simple and easy to use, while not getting in the way.
    I made p5_commander mainly for personal use, but I decided that I should make it public so others can use it as well.
  `,
  icon: 'https://cloud-4bk2oybs8-hack-club-bot.vercel.app/0p5_commander_icon.svg',
  images: [
    ['Main Page', 'https://cloud-rgbz2a9ku-hack-club-bot.vercel.app/0mainpage.png'],
  ],
  links: [
    ['GitHub Page', 'https://github.com/SquarePear/p5_commander'],
    ['p5.js', 'https://p5js.org'],
  ]
}
