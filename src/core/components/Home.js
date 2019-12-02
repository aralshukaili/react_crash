import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useHistory, useLocation } from "react-router-dom";

import { changeLocale } from "../state/actions";

export default function Home() {
  const rtl = useSelector(state => state.core.rtl);
  const text = useSelector(state => state.google.text);
  const loading = useSelector(state => state.google.loading);
  const error = useSelector(state => state.google.error);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  function changeToArabic() {
    dispatch(changeLocale({ locale: "ar" }));
  }

  function goToLanding() {
    history.push("/");
  }

  function filter() {
    history.push(location.pathname + "?q=Awadh&type=icecream");
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log(query.get("type"));
  }, [location.search]);

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <div>Home</div>
      <button onClick={changeToArabic}>Change to Arabic</button>
      <button onClick={() => dispatch({ type: "GET_GOOGLE_REQUEST" })}>
        Google
      </button>
      {loading && "I am loading"}
      {text || error}
      <Link to="/">GO TO LANDING</Link>
      <br></br>
      <button onClick={goToLanding}>GO TO LANDING PROGRAMATICALLY</button>
      <br></br>
      <button onClick={filter}>Filter</button>
    </div>
  );
}
