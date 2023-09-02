import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
    
    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`; 
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    
    return(
  
        <div className="card">
            <img src={image} className="image"></img>

            <div className="info">
                <div className="details">
                    <h4 className="price">{price}</h4>
                    <h4 className="name">{name}</h4>
                </div>

                <div className="desc">
                    {description}
                    <span className = 'read-more' onClick={readmoreHandler}>
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>

            <button className="btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;