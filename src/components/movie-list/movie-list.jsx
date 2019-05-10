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
            const {title, src} = film;
            return <MovieCard
              key={index}
              id={index}
              src={src}
              title={title}
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
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default MovieList;
