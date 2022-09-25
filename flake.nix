{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.devshell.url = "github:numtide/devshell";

  outputs = { self, nixpkgs, flake-utils, devshell }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ devshell.overlay ];
      };
    in {
      devShell = pkgs.devshell.mkShell {
        name = "node-shell";
    
        packages = builtins.attrValues {
          inherit (pkgs) nodejs-18_x;
        };
      };
    });
}
