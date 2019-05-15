const VideoPlayer = (props) => {
  const {poster, sourceMp4 = ``, sourceWebm = ``} = props;
  return (
    <video poster={poster} autoPlay={true} muted={true}>
      {sourceWebm.length > 0 && <source src={sourceWebm} type='video/webm; codecs="vp8, vorbis"'/>}
      {sourceMp4.length > 0 && <source src={sourceMp4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>}
    </video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  sourceMp4: PropTypes.string,
  sourceWebm: PropTypes.string,
};

export default VideoPlayer;
