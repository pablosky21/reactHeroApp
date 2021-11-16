import React, { useMemo, useState } from "react";
import qeuryString from "query-string";
import { useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForms";
import HeroCard from "../heroes/HeroCard";
import getHeroesSearch from "../../selectors/getHeroesSearch";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = qeuryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { searchText } = formValues;
  const heroesFilteres = useMemo(() => getHeroesSearch(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchText"
              onChange={handleInputChange}
              autoComplete="false"
              placeholder="Fin your hero"
              className="form-control"
              value={searchText}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFilteres.length === 0 && (
            <div className="alert alert-danger">THere is no a hero with {q}</div>
          )}
          {heroesFilteres.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
