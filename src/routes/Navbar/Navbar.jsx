import React, { Fragment } from "react";
import "./_Navbar.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className={
          "text-2xl flex justify-center items-center gap-10 mx-auto mt-10"
        }
        onClick={(e) => {
          if (e.target.closest(".nav__link")) {
            Array.from(e.target.closest("nav").children).forEach((el) =>
              el.classList.remove("active")
            );
            e.target.closest(".nav__link").classList.add("active");
          }
        }}
      >
        <Link to={"/"} className={"nav__link active"}>
          Home
        </Link>
        <Link to={"/reviews"} className={"nav__link"}>
          Reviews
        </Link>
        <Link to={"/dashboard"} className={"nav__link"}>
          Dashboard
        </Link>
        <Link to={"/blog"} className={"nav__link"}>
          Blog
        </Link>
        <Link to={"/about"} className={"nav__link"}>
          About
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
