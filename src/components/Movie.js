import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Moive = ({id, coverImg, title, summary, genres}) => {
    return (
        <div>
        <img src={coverImg} alt="coverImg" />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{ summary.length > 235 ? `${summary.slice(0, 235)}...` : summary }</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    )
}

Moive.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Moive