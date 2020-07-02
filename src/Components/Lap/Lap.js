import React from 'react';

const Lap = (props) => {
    return (
        <div>
           <ul className="list-group list-group-flush">
               {
                   props.lap.map((lap, index) => {
                       return (
                           <li key={index} className="list-group-item">
                               <h4>
                               <span className="text-dark">Minute: </span>
                               <span className="text-danger mx-5">{lap.min}</span>
                               <span className="text-dark">Second: </span>
                               <span className="text-danger mx-5">{lap.sec}</span>
                               <span className="text-dark">Mili: </span>
                               <span className="text-danger mx-5">{lap.mili}</span>
                               </h4>
                           </li>
                       )
                   })
               }
           </ul>
        </div>
    );
};

export default Lap;