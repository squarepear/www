{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";
    devenv.inputs.flake-parts.follows = "flake-parts";
  };

  outputs =
    inputs@{ self, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.devenv.flakeModule ];
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        {
          config,
          self',
          inputs',
          pkgs,
          system,
          ...
        }:
        let
          shortRev = self.shortRev or (builtins.substring 0 7 self.dirtyRev);
          rev = self.rev or self.dirtyRev;
        in
        {
          devenv.shells.default = {
            packages = [
              pkgs.hugo
            ];
          };

          packages.default = pkgs.stdenv.mkDerivation {
            pname = "jeffreyharmondev";
            version = shortRev;
            src = ./.;

            nativeBuildInputs = [
              pkgs.hugo
            ];

            buildPhase = ''
              export HUGO_REV="${rev}"
              export HUGO_SHORT_REV="${shortRev}"
              hugo build -d public --minify
            '';

            installPhase = ''
              mkdir -p $out
              cp -r public/* $out/
            '';
          };
        };
    };
}
