import React from 'react'

const Reviews = ({rating,color}) => {
    return (
        <div className='mb-3'>
            {
                rating >= 1 ? <i style={{color:`${color}`}} className="bi bi-star-fill"></i>
                    : rating >= 0.5 ? <i style={{color:`${color}`}} className="bi bi-star-half"></i>
                        : <i style={{color:`${color}`}} className="bi bi-star"></i>
            }
            {
                rating >= 2 ? <i style={{color:`${color}`}} className="bi bi-star-fill"></i>
                    : rating >= 1.5 ? <i style={{color:`${color}`}} className="bi bi-star-half"></i>
                        : <i style={{color:`${color}`}} className="bi bi-star"></i>
            }
            {
                rating >= 3 ? <i style={{color:`${color}`}} className="bi bi-star-fill"></i>
                    : rating >= 2.5 ? <i style={{color:`${color}`}} className="bi bi-star-half"></i>
                        : <i style={{color:`${color}`}} className="bi bi-star"></i>
            }
            {
                rating >= 4 ? <i style={{color:`${color}`}} className="bi bi-star-fill"></i>
                    : rating >= 3.5 ? <i style={{color:`${color}`}} className="bi bi-star-half"></i>
                        : <i style={{color:`${color}`}} className="bi bi-star"></i>
            }
            {
                rating >= 5 ? <i style={{color:`${color}`}} className="bi bi-star-fill"></i>
                    : rating >= 4.5 ? <i style={{color:`${color}`}} className="bi bi-star-half"></i>
                        : <i style={{color:`${color}`}} className="bi bi-star"></i>
            }
            <br />
            <span></span>
        </div>
    )
}

export default Reviews