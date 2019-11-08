const { nonstandard } = require('wrtc')
const Speaker = require('speaker')

const player = {
  play: e => {
    const audioSink = new nonstandard.RTCAudioSink(e.track)
    const speaker = new Speaker({ channels: 1, bitDepth: 16, sampleRate: 48000, signed: true })
    audioSink.ondata = data => {
      speaker.write(Buffer.from(data.samples.buffer))
    }
    return speaker
  }
}

module.exports = player
