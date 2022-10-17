import React from "react";
import './PriceBody.css'
import BookIntroButton from "../BookIntroButton/BookIntroButton";

const PriceBody = () => {


    const prices2 = {
        lessonLength: '1 Hour',
        basicRate: [
            {age: 'KS2, KS3, KS4', price: '15', id: 1},
            {age: 'GCSE', price: '18', id: 2},
            {age: 'AS/A-Level', price: '20', id: 3}
        ],
        deals: [
            {lessons: '5', prices: ['KS2, KS3, KS4 - £65', 'GCSE for £75', 'AS/A-Level - £80'], id: 1},
            {lessons: '10', prices: ['KS2, KS3, KS4 - £120', 'GCSE - £140', 'AS/A-Level - £150'], id: 2},
        ]
    }
    return (
        <div className="price_body-div">
            <h1 className="price-title">Prices</h1>
            <div className="price-box-div basic-rate-div">
                <h2 className="price-box-title basic-rate-title">Basic Rate</h2>
                <h3 className="lesson-length">{`${prices2.lessonLength} sessions`}</h3>
                {prices2.basicRate.map((rates) => {
                    return <h3 className="basic-rate-text" key = {rates.id}>{`${rates.age} - £${rates.price}ph`}</h3>
                })}
                <BookIntroButton />
            </div>
            {prices2.deals.map((deal) => {
                return <div className="price-box-div" key={prices2.deals.indexOf(deal)}>
                    <h2 className="price-box-title">{`${deal.lessons} Sessions`}</h2>
                    {deal.prices.map((price) => {
                        return <h3 className="totals-deals" key = {deal.prices.indexOf(price)}>{price}</h3>
                    })}
                    <BookIntroButton />
                </div>
            })}
        </div>
    );
}
 
export default PriceBody;