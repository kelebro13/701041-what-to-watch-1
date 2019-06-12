class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      duration: 0
    };
    this.videoRef = React.createRef();
    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
    this._videoInit = this._videoInit.bind(this);
  }

  componentDidMount() {
    const {current: video} = this.videoRef;
    this._videoInit(video);
  }

  render() {
    const {name, poster, videoLink, isActive} = this.props;
    const {progress, duration} = this.state;
    return (
      <div className="player" style={{position: `absolute`, zIndex: 2}}>
        <video ref={this.videoRef} src={videoLink} className="player__video" poster={poster}></video>

        <button type="button" className="player__exit" onClick={this._handleExitButtonClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{duration}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={this._handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isActive ? `#pause` : `#play-s`}></use>
              </svg>
              <span>{isActive ? `Pause` : `Play`}</span>
            </button>
            <div className="player__name">{name}</div>

            <button type="button" className="player__full-screen" onClick={this._handleFullScreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  _videoInit(video) {
    if (video !== null) {
      video.onloadeddata = () => {
        this.setState({
          duration: this._convertDurationToString(video.duration)
        });
        video.play();
        this.props.onActiveStatusChange();
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: this._getProgress(video.currentTime, video.duration)
        });
      };
    }
  }

  _handlePlayClick() {
    const {onActiveStatusChange} = this.props;
    const {current: video} = this.videoRef;
    if (!this.props.isActive) {
      video.play();
      onActiveStatusChange();
    } else if (this.props.isActive) {
      video.pause();
      onActiveStatusChange();
    }
  }

  _handleFullScreenClick() {
    const {current: video} = this.videoRef;
    video.requestFullscreen();
  }

  _handleExitButtonClick() {
    const {current: video} = this.videoRef;
    video.pause();
    video.currentTime = 0;
    const {onExit} = this.props;
    if (onExit) {
      onExit();
    }
  }

  _getProgress(elapsedTime, duration) {
    return (elapsedTime * 100) / duration;
  }

  _convertDurationToString(duration) {
    const time = new Date(duration * 1000);
    return time.toISOString().substr(11, 8);
  }
}

VideoPlayer.propTypes = {
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  videoLink: PropTypes.string,
  onExit: PropTypes.func,
  onActiveStatusChange: PropTypes.func
};

export default VideoPlayer;
