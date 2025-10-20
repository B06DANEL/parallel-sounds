music.setVolume(127)
for (let index = 0; index <= 7; index++) {
    psounds.play_multitone([
        2 ** ((96 + index) / 12),
        2 ** ((96 + (4 + index)) / 12),
        2 ** ((96 + (7 + index)) / 12),
        21 ** ((96 + (12 + index)) / 12)
    ], 1000, psounds.envelope.piano)
}