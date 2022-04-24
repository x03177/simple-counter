const { useState } = React;

const Counter = () => {
    const [count, setCount] = useState(995);

    return (
        <div className="counter-wrap">
            <div className="counter">
                <div className="count-step">
                    <button type="button" className="btn-sign btn-count-minus"
                        onClick={() => setCount(count - 1)}
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                </div>
                <div className="count-number">{count}</div>
                <div className="count-step">
                    <button type="button" className="btn-sign btn-count-plus"
                        onClick={() => setCount(count + 1)}
                        disabled={count >= 999}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'));

