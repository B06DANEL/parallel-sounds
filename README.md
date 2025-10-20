# Parallel Sounds
An simple micro:bit extension that allows "playing" multiple notes at the same time; aslo features a simple sound envelope. Works better on hardware than on simulator.
# How to use
There is an single block: "play multitone". There are 3 parameters:
1. Notes (The frequencies of the notes you want to play)
2. Duration (How many miliseconds do the notes last)
3. Envelope (How volume/frequency modulates over time; You can choose between 5 presets: "piano", "violin", "guitar", "reverse piano", "no envelope".)

**NOTE**: You can change the volume using music.setVolume().