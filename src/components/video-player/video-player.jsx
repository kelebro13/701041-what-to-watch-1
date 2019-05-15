class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const {current: video} = this.videoRef;
    if (!prevProps.isPlaying && this.props.isPlaying) {
      video.play();
    } else if (prevProps.isPlaying && !this.props.isPlaying) {
      video.pause();
      video.load();
    }
  }

  render() {
    const {poster, sourceMp4 = ``, sourceWebm = ``} = this.props;
    return (
      <video ref={this.videoRef} poster={poster} muted={true} width="280" height="175">
        {sourceWebm.length > 0 && <source src={sourceWebm} type='video/webm; codecs="vp8, vorbis"'/>}
        {sourceMp4.length > 0 && <source src={sourceMp4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>}
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  poster: PropTypes.string.isRequired,
  sourceMp4: PropTypes.string,
  sourceWebm: PropTypes.string,
};

export default VideoPlayer;
