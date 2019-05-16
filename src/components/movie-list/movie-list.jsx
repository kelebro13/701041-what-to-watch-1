import MovieCard from "../movie-card/movie-card";

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1
    };
    this.handleActiveCardChange = this.handleActiveCardChange.bind(this);
  }

  handleActiveCardChange(id = -1) {
    this.setState({
      activeCard: id
    });
  }

  handleTitleClick() {}

  handlePreviewClick() {}

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {
          films.map((film, index) => {
            return <MovieCard
              key={index}
              id={index}
              film={film}
              onActiveCardChange={this.handleActiveCardChange}
              onTitleClick={this.handleTitleClick}
              onPreviewClick={this.handlePreviewClick} />;
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    sources: PropTypes.shape({
      mp4: PropTypes.string,
      webm: PropTypes.string
    }).isRequired
  })).isRequired
};

export default MovieList;
