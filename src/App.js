import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.scss";
import "./index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [, setIsLoading] = useState(true);

  const getQuote = () => {
    setIsLoading(true);
    fetch(
      "https://gist.githubusercontent.com/Ebazhanov/b9ca7c520b5fe0cd1284cc457f89b721/raw/786952e5376e5d96b28864554d5e9674f684cc52/quotes-new.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="s-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        followFinger={true}
        loop={true}
        freeMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
        className="swiper-slide"
      >
        {quotes.map((quote, i) => (
          <SwiperSlide>
            <div className="s-right">
              <p className="s-desc">{quote.author}</p>
              <h1 className="s-title">{quote.quote}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <footer>
        <div className="footer-text">© 2021 Ebazhanov</div>
      </footer>
    </div>
  );
}

export default App;
