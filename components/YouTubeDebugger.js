import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.clickBitrate = this.clickBitrate.bind(this)
    this.clickResolution = this.clickResolution.bind(this)
  }

  clickBitrate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, { bitrate: 12 })
    })
  }

  clickResolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, { video: Object.assign({}, this.state.settings.video, { resolution: "720p"})
      })
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.clickBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.clickResolution}>Resolution</button>
      </div>
    )
  }
}
