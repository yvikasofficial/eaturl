import React, { useEffect, useState } from "react";
import Button from "./button";
import BASE_URL, { COLOR_BLUE } from "../utils/constats";
import { useDispatch, useSelector } from "react-redux";
import { shortUrl } from "../redux/shortUrl/shortUrl.actions";
import { ReactComponent as Copy } from "../assets/shrinker/copy.svg";
import { showErrorToast, showSuccessToast } from "../utils/notifications";

const AdvancedShrinker = () => {
  const [url, setUrl] = useState("");
  let data = useSelector((state) => state.shortUrl);
  const [shortedUrl, setShortedUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(shortUrl(url));
    setUrl("");
  };

  const copyText = async () => {
    try {
      if (!shortedUrl.length > 1) return;
      var text = BASE_URL + "/" + shortedUrl;
      await navigator.clipboard.writeText(text);
      showSuccessToast("Copying to clipboard was successful!");
    } catch (error) {
      showErrorToast("Unable to copy clipboard");
    }
  };

  // function copyToClipboard() {
  //   var text = BASE_URL + "/" + shortedUrl;
  //   window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  // }

  useEffect(() => {
    if (data.url) setShortedUrl(data.url);
  }, [data]);

  return (
    <section className="advanced-shrinker">
      <div className="advanced-shrinker__wrapper">
        <div className="advanced-shrinker__body">
          <input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (setShortedUrl.length > 1) {
                setShortedUrl("");
              }
            }}
            type="text"
            placeholder="Paste long url and shorten it"
          />
          <Button
            onClick={handleSubmit}
            height="50px"
            width="100px"
            backgroundColor={COLOR_BLUE}
            disabled={url.length < 4}
          >
            Shortner
          </Button>
        </div>

        <div className="advanced-shrinker__link">
          <span> {shortedUrl.length > 1 ? "eaturl.tk/" + shortedUrl : ""}</span>
          <Copy
            onClick={copyText}
            style={{ fillOpacity: shortedUrl.length > 1 ? 1 : 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedShrinker;
