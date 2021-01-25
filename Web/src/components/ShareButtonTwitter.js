import React from "react";

const ShareButtonTwitter = (props) => {
  const tweet =
    "¡Hola! Un DIAMANTE es solo un trozo de carbón que soportó una presión extraordinaria! Para mostrarlo al mundo, las < Div_as> me han ayudado a hacer esta tarjeta 💎";
  return (
    <div className="card js-card">
      <div className="card__created js-form-created">
        <h2 className="card__created-title">La tarjeta ha sido creada:</h2>
        <p className="card__created-link js-card-link">
          {props.apiObject.apiCardURL}
        </p>
        <a
          href={`https://twitter.com/intent/tweet?text=${tweet}&url=${props.apiObject.apiCardURL}`}
          target="_blank"
          rel="noreferrer"
          className="button__twitter js-button-twitter"
        >
          <i className="fab fa-twitter button__twitter-icon"></i>
          <h3 className="button__twitter-title">Compartir en twitter</h3>
        </a>
      </div>
    </div>
  );
};

export default ShareButtonTwitter;
