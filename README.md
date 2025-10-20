# Parallel Sounds
An simple micro:bit extension that allows "playing" multiple notes at the same time; aslo features a simple sound envelope. Works better on hardware than on simulator.
# How to use
There is an single block: "play multitone". There are 3 parameters:
1. Notes (The frequencies of the notes you want to play)
2. Duration (How many miliseconds do the notes last)
3. Envelope (How volume/frequency modulates over time; You can choose between 5 presets: "piano", "violin", "guitar", "reverse piano", "no envelope".)

**NOTE**: You can change the volume using music.setVolume().


> Open this page at [https://b06danel.github.io/parallel-sounds/](https://b06danel.github.io/parallel-sounds/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/b06danel/parallel-sounds** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/b06danel/parallel-sounds** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
