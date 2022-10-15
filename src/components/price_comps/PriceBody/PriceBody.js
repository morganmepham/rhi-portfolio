import React from "react";
import './PriceBody.css'
import BookIntroButton from "../BookIntroButton/BookIntroButton";

const PriceBody = () => {
    const prices = {
        lessonPrice: '£20 per Hour',
        lessonLength: '1 Hour',
        deals: [
            {lessons: '5', forPriceOf: '4', total: '80'},
            {lessons: '10', forPriceOf: '7', total: '140'}
        ]
    }

    return (
        <div className="price_body-div">
            <h1 className="price-title">Prices</h1>
            <div className="price-box-div">
                <h2 className="price-box-title">Basic Rate</h2>
                <h3 className="lesson-length">{`${prices.lessonLength} sessions`}</h3>
                <h3 className="basic-rate-text">{prices.lessonPrice}</h3>
                <BookIntroButton />
            </div>
            {prices.deals.map((deal) => {
                return <div className="price-box-div">
                    <h2 className="price-box-title">{`${deal.lessons} for the price of ${deal.forPriceOf}`}</h2>
                    <h3 className="lesson-length">{prices.lessonLength} sessions</h3>
                    <h3 className="deal-total">{`Total £${deal.total}`}</h3>
                    <BookIntroButton />
                </div>
            })}
        </div>
    );
}
 
export default PriceBody;