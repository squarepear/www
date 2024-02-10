import type { Project } from './projectType'

export default <Project>{
  name: 'This Website',
  id: 'this_website',
  startDate: new Date('2021-06-07'),
  endDate: null,
  shortDescription: 'The website you are currently on!',
  description: `
    This website is built using Nuxt.js, a framework for Vue.js. It is hosted on
    Netlify. I use Netlify to automatically build and deploy the website when I
    push to the GitHub repository. I chose Nuxt.js because it is easy to use and
    I had some previous experience with Vue.js. I am not a designer, but I tried
    to make the website look nice using all custom CSS so I could learn more
    about how CSS works. I also used TypeScript to make the code easier to read
    and maintain.
    In the future, I plan to add a database or CMS to manage my projects page.
    I am also planning to add a blog page to the website using the new CMS.
  `,
  icon: '/icon.svg',
  images: [],
  links: [
    ['GitHub Repository', 'https://github.com/SquarePear/www'],
    ['Website URL', 'https://jeffreyharmon.dev'],
  ],
}
