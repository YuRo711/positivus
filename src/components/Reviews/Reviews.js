import AliceCarousel from "react-alice-carousel";
import { reviews } from "../../utils/constants";
import "./Reviews.css";
import { useState } from "react";

function Reviews() {
  const items = reviews.map((data) => {
    return <div className="reviews__review">
      <div className="reviews__bubble">
        <p className="reviews__text">
          {data.text}
        </p>
      </div>
      <div className="reviews__author">
        <h4 className="reviews__name">{data.name}</h4>
        <p className="reviews__title">{data.title}</p>
      </div>
    </div>
  })

  return (
    <div className="reviews">
      <AliceCarousel
        items={items}
        paddingLeft={303}
        paddingRight={303}
        controlsStrategy="default"
        mouseTracking
      />
    </div>
  );
}

export default Reviews;