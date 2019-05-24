const withVideo = (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
      this.renderVideo = this.renderVideo.bind(this);
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

    renderVideo() {
      const {posterSrc, sources} = this.props.film;
      return (
        <video ref={this.videoRef} poster={posterSrc} muted={true} width="280" height="175">
          {sources.webm.length > 0 && <source src={sources.webm} type='video/webm; codecs="vp8, vorbis"'/>}
          {sources.mp4.length > 0 && <source src={sources.mp4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>}
        </video>
      );
    }
    render() {
      return (
        <Component
          {...this.props}
          renderVideo={this.renderVideo}
        />
      );
    }
  }

  WithVideo.propTypes = {
    film: PropTypes.shape({
      posterSrc: PropTypes.string.isRequired,
      sources: PropTypes.shape({
        mp4: PropTypes.string,
        webm: PropTypes.string
      }).isRequired
    }).isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
