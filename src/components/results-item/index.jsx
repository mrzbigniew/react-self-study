import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from '../movie-image';

import styles from './styles/styles.scss';

const ResultsItem = ({
  poster_path, title, release_year, genre, onClick, // eslint-disable-line camelcase
}) => (
        <div className={styles.resultItem} onClick={onClick}>
            <div className={styles.resultItemImage}>
                <MovieImage width="200"
                    src={poster_path} // eslint-disable-line camelcase
                    alt={title}
                    className={styles.image}
                />
            </div>
            <div className="w-100 d-flex justify-content-between">
                <span>{title}</span>
                <span>
                    {
                        release_year // eslint-disable-line camelcase
                    }
                </span>
            </div>
            <div className="w-100 d-flex justify-content-start align-items-start">
                {genre}
            </div>
        </div>
);

ResultsItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_year: PropTypes.string,
  genre: PropTypes.string,
  onClick: PropTypes.func,
};

export default ResultsItem;
