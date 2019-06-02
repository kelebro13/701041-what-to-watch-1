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

    renderVideo(previewImage, previewVideoLink) {
      return (
        <video ref={this.videoRef} poster={previewImage} muted={true} width="280" height="175" src={previewVideoLink} />
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
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
