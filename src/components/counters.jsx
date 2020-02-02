import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const {
            onReset,
            counters,
            onDelete,
            onIncrement,
            onDecrement
        } = this.props;
        return (
            <div className="container container-fluid">
                <div>
                    <button
                        onClick={onReset}
                        className="btn btn-primary btn-sm m-2"
                    >
                        Reset
                    </button>
                    {counters.map(counter => (
                        <Counter
                            key={counter.id}
                            value={counter.value}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            counter={counter}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Counters;
