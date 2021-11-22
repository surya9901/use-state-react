import React from "react";

function Circle(props) {
    return (
        <div className="col-lg-4 mt-3">
            {props.data.count}
            <hr />
            <button className="circle"
                style={{ border: "1px", backgroundColor: props.data.id, padding: "50px" }}
                onClick={() => props.increment(props.data.id)}>
            </button>
            <div>

            </div>

        </div>
    );
}

export default Circle;