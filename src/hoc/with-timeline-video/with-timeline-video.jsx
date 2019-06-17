const withTimelineVideo = (Component) => {
  class WithTimelineVideo extends React.PureComponent {

    static MILLISECOND_PER_SECOND = 1000;
    static START_TIME_INDEX = 11;
    static LENGTH_TIME = 8;

    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
        duration: 0
      };
      this.handleProgressChange = this.handleProgressChange.bind(this);
      this.handleDurationChange = this.handleDurationChange.bind(this);
    }

    handleProgressChange(currentTime) {
      this.setState({
        progress: this._getProgress(currentTime, this.state.duration)
      });
    }

    handleDurationChange(duration) {
      this.setState({duration});
    }

    render() {
      return (
        <Component
          {...this.props}
          progress={this.state.progress}
          duration={this._convertDurationToString(this.state.duration)}
          onProgressChange={this.handleProgressChange}
          onDurationChange={this.handleDurationChange}/>
      );
    }

    _getProgress(elapsedTime, duration) {
      if (duration === 0) {
        return 0;
      }
      return (elapsedTime * 100) / duration;
    }

    _convertDurationToString(duration) {
      const time = new Date(duration * WithTimelineVideo.MILLISECOND_PER_SECOND);
      return time.toISOString().substr(WithTimelineVideo.START_TIME_INDEX, WithTimelineVideo.LENGTH_TIME);
    }
  }

  WithTimelineVideo.propTypes = {};

  return WithTimelineVideo;
};

export default withTimelineVideo;
