This is my Etch-a-Sketch project for The Odin Project.

The goal is to create a grid of elements via Javascript and insert them into the page.

The number of elements inside this grid should be customizable by the user. The container size should not change.

Random color mode (optional challenge) changes the triggered div's background color to a random hexidecimal value.

Rainbow mode (inspired by DionCDZ's amazing solution linked below) incrememnts the hue by 1 degree every square that is filled.
https://dioncdz.github.io/Etch-A-Sketch/

Noticable lag was introduced in the mid-three-digit grid sizes, so it's capped to 250 upon submit.

This is also the first time I've used Javascript modules. I would use Webpack on a production run, since the support for modules is still lacking.