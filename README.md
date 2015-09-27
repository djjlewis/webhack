# webhack

## Introduction

Over Christmas last year (2014) I decided to spend a few hours and have some fun with my kids coding up a simple HTML / JavaScript game.

I went for a nethack style theme, using ASCII characters as the only elements on the maps.

The map files are in JSON format with a few parametes such as the location of the treasure, and the actual map layout, which is basically to write characters as they will appear on the map. There are a few examples in the maps folder, and you are of course free to write your own. Currently the following are supported:

* . (normal landscape)
* T (trees, which can't be moved through)
* S (Water, you will drown if you enter)
* X (Lava, you will burn up and die if you fall in)

The player and monster start positions are defined in their respective.js files (not ideal) and will use the following characters:

* § - Monster character, moves randomly and will kill player if touched
* @ - Player, you control this with arrow keys

The map file to use is defined in the index.html.

Later on it would be nice to be able to pick the map from a start screen, or load levels as each map is completed.

Another idea I would like to implement is to have infinite scrolling, map perhaps with randomly generated terrain.

## Objective

At the moment it is very simple, guide your player using the arrow keys to the lava avoiding any water, lava and monsters. Once you have the treasure, retreat back to the top-left corner of the map (0,0) to win!



