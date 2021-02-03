import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../utils/constats";

const RedirectPage = ({ match, history }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(BASE_URL + "/api/shortUrl/" + match.params.url)
      .then((res) => {
        console.log(res.data);
        window.location.assign(
          res.data.fullUrl.startsWith("http")
            ? res.data.fullUrl
            : "https://" + res.data.fullUrl
        );
      })
      .catch((err) => setError(true));
  });
  return error ? <div>Url not found</div> : <div>redirecting...</div>;
};

export default RedirectPage;
