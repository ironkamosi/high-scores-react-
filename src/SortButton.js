import React from "react";

const SortButton = ({ handler }) => {
    return (
       <div>
            <button className="btn-sort-scores" onClick={handler}><h3>Toggle</h3></button>
       </div>
    )
}

export default SortButton 

