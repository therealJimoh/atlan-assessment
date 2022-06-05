import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import RandomUser from "../components/RandomUser";
import "./home.scss";

const User = () => {
  const [formValue, setFormValue] = useState("");
  const [toggle, setToggle] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResult, setFilteredResult] = useState([]);
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(15);

  const { SQLquery } = formValue;

  const onChange = (e) => {
    setFormValue({
      [e.target.name]: e.target.value,
    });
  };

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...formValue };
      console.log(formData);
      const randomuser = await axios.get(
        "https://randomuser.me/api/?page=9&results=390&seed=abc"
      );
      const result = randomuser.data.results;
      console.log(result);
      setUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  const searchItem = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      user.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(searchValue);
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(user);
    }
  };

  const filteredData = user.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  console.log(filteredData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexofLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexofLastUser - userPerPage;
  const currentUser = user.slice(indexOfFirstUser, indexofLastUser);
  const filter = filteredResult.slice(indexOfFirstUser, indexofLastUser);

  // if (!user) return null;

  return (
    <div className="home__container">
      <div className="home__wrapper">
        <div className="sort__fiter__box"></div>
        <div className="form__wrapper">
          <div className="search__filter">
            <label htmlFor="">
              Search to Filter through the available data
            </label>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => searchItem(e.target.value)}
            />
          </div>
          <div className="toggle_predefined">
            <button onClick={(e) => setToggle(e.target.innerHTML)}>
              SQLquery1
            </button>
            <button onClick={(e) => setToggle(e.target.innerHTML)}>
              SQLquery2
            </button>
          </div>
          <form onSubmit={fetchData}>
            <textarea
              name="SQLqueries"
              value={toggle === "" ? SQLquery : toggle}
              onChange={onChange}
              cols="30"
              rows="3"
              className="SQLqueries"
            ></textarea>
            <button type="submit" className="fetch">
              Fetch
            </button>
          </form>
        </div>
        <div className="output__wrapper">
          {searchInput.length > 1
            ? filter.map((data, id) => (
                <RandomUser
                  key={id}
                  firstname={data.name.first}
                  lastname={data.name.last}
                  gender={data.gender}
                  age={data.dob.age}
                  city={data.location.city}
                  state={data.location.state}
                />
              ))
            : currentUser.map((data, id) => (
                <RandomUser
                  key={id}
                  firstname={data.name.first}
                  lastname={data.name.last}
                  gender={data.gender}
                  age={data.dob.age}
                  city={data.location.city}
                  state={data.location.state}
                />
              ))}
          <Pagination
            userPerPage={userPerPage}
            totalUser={user.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
