{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devenv.url = "github:cachix/devenv";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.devenv.flakeModule ];
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
        {
          devenv.shells.default = {
            packages = [
              pkgs.bun
            ];

            scripts = {
              dev.exec = ''
                bun --bun run dev
              '';

              build.exec = ''
                bun --bun run build
              '';

              run.exec = ''
                bun --bun run build
                bun --bun .output/server/index.mjs
              '';
            };
          };
        };
    };
}
