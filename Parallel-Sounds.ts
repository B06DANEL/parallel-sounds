//% color=300 weight=100 icon="\uf001" block="Parallel Sounds"
namespace psounds {
    export enum envelope_type {
        //% block="piano"
        piano = 0,
        //% block="violin"
        violin = 1,
        //% block="guitar"
        guitar = 2,
        //% block="reverse piano"
        reverse_piano = 3,
        //% block="no envelope"
        no_envelope = 4
    }

    //% blockId=playmultitone
    //% block="play multitone with notes $Notes for $Duration ms with $type"
    //% type.defl=EnvelopeType.envelope
    export function play_multitone(Notes: number[], Duration: number, type: envelope_type) {
        let Envelope: number[]
        switch (type) {
            case envelope_type.piano: Envelope = [0, 500, 0]; break
            case envelope_type.violin: Envelope = [500, 500, 12]; break
            case envelope_type.guitar: Envelope = [0, 500, 12]; break
            case envelope_type.reverse_piano: Envelope = [500, 0, 0]; break
            case envelope_type.no_envelope: Envelope = [0, 0, 0]; break
            default: Envelope = [0, 0, 0]
        }

        let v = input.runningTime()
        let volume = music.volume()
        let attack = Envelope[0]
        let release = Envelope[1]
        let tremolo = Envelope[2]
        let durationinplaying = 0

        if (Notes.length < 4) {
            while (durationinplaying < Duration-0.02) {
                durationinplaying = input.runningTime() - v
                for (let value of Notes) {
                    music.setVolume(volume * Math.min(Math.min(durationinplaying / attack, (Duration - durationinplaying) / release), 1))
                    music.ringTone(value + Math.sin(input.runningTime() / 20) * tremolo)
                    basic.pause(Math.max(1000 / value, 5))
                }
            }
        } else {
            while (durationinplaying < Duration-0.02) {
                durationinplaying = input.runningTime() - v
                for (let value of Notes) {
                    music.setVolume(volume * Math.min(Math.min(durationinplaying / attack, (Duration - durationinplaying) / release), 1))
                    music.ringTone(value + Math.sin(input.runningTime() / 20) * tremolo)
                    basic.pause(1000 / value)
                }
            }
        }
        music.ringTone(0)
        music.setVolume(volume)
    }
}
