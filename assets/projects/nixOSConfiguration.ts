import type { Project } from './projectType'

export default <Project>{
  name: 'NixOS Configuration',
  id: 'nixos_configuration',
  startDate: new Date('2021-07-19'),
  endDate: null,
  shortDescription: 'A repository of my NixOS configuration files!',
  description: `
    NixOS is a Linux distribution that uses the Nix package manager. It is
    declarative, meaning that you can describe the state of your system in a
    configuration file. This repository contains my configuration files for
    NixOS. I use it to configure my desktop, Raspberry Pis, and a virtual
    machine for development on my macOS laptop. It ensures that my development
    environment is consistent across all of my devices.
    .
  `,
  icon: '/icon.svg',
  images: [],
  links: [
    ['GitHub Repository', 'https://github.com/SquarePear/nixos-configs'],
    ['NixOS Website', 'https://nixos.org'],
  ],
}
