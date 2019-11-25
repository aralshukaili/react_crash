import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeLocale } from "../state/actions";

export default function Home() {
  const rtl = useSelector(state => state.core.rtl);

  const dispatch = useDispatch();

  function changeToArabic() {
    dispatch(changeLocale({ locale: "ar" }));
  }

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <div>Home</div>
      <button onClick={changeToArabic}>Change to Arabic</button>
    </div>
  );
}
