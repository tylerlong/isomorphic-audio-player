const player = {
  play: e => {
    const audio = document.createElement('audio')
    audio.autoplay = true
    audio.controls = true
    audio.hidden = true
    document.body.appendChild(audio)
    audio.onplay = function () {
      console.log('The audio has started to play')
    }
    audio.ontimeupdate = function () {
      console.log('The audio is being played')
    }
    audio.srcObject = e.streams[0]
    return audio
  }
}

module.exports = player
