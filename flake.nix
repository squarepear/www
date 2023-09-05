{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
    devenv.url = "github:cachix/devenv";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, devenv, flake-utils, ... } @ inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShell = devenv.lib.mkShell {
          inherit inputs pkgs;

          modules = [
            {
              packages = [
                pkgs.nodejs_20
                pkgs.nodePackages_latest.pnpm
              ];

              scripts.dev.exec = "pnpm run dev";
              scripts.build.exec = "pnpm run build";
            }
          ];
        };
      }
    );
}
