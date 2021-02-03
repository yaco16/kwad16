import React from 'react';
import './style.scss';

const Search = () => (
<div className="form">
  <h2>Search in the site</h2>
  <input id="form__input" type="text" placeholder="What are you looking for ?" />
  <input id="form__submit" type="submit" value="Send" />
</div>
);

export default Search;
