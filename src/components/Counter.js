const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primery">DEC</button>
            <button onClick={inc} className="btn btn-primery">INC</button>
            <button onClick={rnd} className="btn btn-primery">RND</button>
        </div>
    )
}

export default Counter;