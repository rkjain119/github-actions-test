import React from "react";
import "./styles.css";
import { useState } from "react";

const myData = {
  Movies: [
    {
      name: "The Dark Knight",
      rating: "9.0/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Inception",
      rating: "8.8/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Matrix",
      rating: "8.7/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Avengers: Endgame",
      rating: "8.4/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Uri: The Surgical Strike",
      rating: "8.2/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_UY268_CR2,0,182,268_AL__QL50.jpg"
    }
  ],

  Music: [
    {
      name: "Dynamite - BTS",
      rating: "8.6/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,g_face,w_200/v1611134231/220px-BTS_-_Dynamite__28official_cover_29_qycfhk.png"
    },
    {
      name: "Jeet - Ritviz",
      rating: "8.4/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611134412/ylfxr9lou1nqb_600_tdmtf3.jpg"
    },
    {
      name: "Wake Me Up - Avicii",
      rating: "8.1/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,q_100,w_200/v1611134586/edm-news-avicii-releases-wake-me-up-featuring-aloe-blacc-on-itunes_ynkr3h.jpg"
    },
    {
      name: "Hyms For The Weekend - Coldplay",
      rating: "8.1/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611134791/220px-Coldplay_2C_Hymn_for_the_Weekend_2C_Artwork_w8o29d.jpg"
    },
    {
      name: "No Regrets - KSHMR",
      rating: "8.0/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,q_100,w_200/v1611134926/R-13297114-1551610155-9379.jpeg_ggi4ci.jpg"
    }
  ],

  Books: [
    {
      name: "12 Rules For Life - JBP",
      rating: "8.3/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611135407/71DMt113sML_scmzdc.jpg"
    },
    {
      name: "Atomic Habits - James Clear",
      rating: "7.7/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611135385/91pR9wKJ3zL_uhljl2.jpg"
    },
    {
      name: "Think Like A Monk - Jay Shetty",
      rating: "7.5/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,w_200/v1611135586/71ru1Xg_VyL_kuzkd3.jpg"
    },
    {
      name: "Data And Goliath - Burce Spencer",
      rating: "7.3/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611135874/91ovAzoStaL_jxwptc.jpg"
    },
    {
      name: "Beyond Order - JBP",
      rating: "7.1/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_thumb,w_200,g_face/v1611135912/71xLmdLOQ0L_lm6hfq.jpg"
    }
  ],

  Crypto: [
    {
      name: "Bitcoin - BTC",
      rating: "8.6/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/v1611136364/BC_Logo__rgdp1o.png"
    },
    {
      name: "Dash Coin - DSH",
      rating: "8.0/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,w_256/v1611136143/dash-d_anl8me.png"
    },
    {
      name: "Etherium - ETH",
      rating: "8.0/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,w_256/v1611136125/etherium-3_hz2tvy.png"
    },
    {
      name: "Tether - USDT",
      rating: "7.5/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,w_256/v1611136549/tether-usdt-logo-FA55C7F397-seeklogo.com_kznlmo.png"
    },
    {
      name: "Doge coin - DOGE",
      rating: "6.6/10",
      cover:
        "https://res.cloudinary.com/dyl08vtii/image/upload/c_scale,w_256/v1611136207/Dogecoin_logo_huqfza.jpg"
    }
  ]
};

export default function App() {
  const [selectedCat, setCat] = useState("Music");
  function handleClickCat(cat) {
    setCat(cat);
    console.log({ cat });
  }

  return (
    <div className="app">
      <div className="heading">
        <h1>My Recommendations </h1>
      </div>
      <div className="btns">
        {Object.keys(myData).map((cat) => (
          <button onClick={() => handleClickCat(cat)}>{cat}</button>
        ))}
      </div>
      <ul className="listitems">
        {myData[selectedCat].map((my) => (
          <li className="card" key={my.name}>
            <img className="img" src={my.cover} alt="cover"></img>
            <div className="description">
              <div className="title">{my.name}</div>
              <div className="rating">
                My Ratings:<strong> {my.rating}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
