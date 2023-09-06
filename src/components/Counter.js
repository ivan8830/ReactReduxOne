import { connect } from "react-redux";
import {inc, dec, rnd} from "../action";
//import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primery">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primery">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primery">RND</button>
        </div>
    )
}

/* class Counter extends Component {
    render() {
        const {counter, inc, dec, rnd} = this.props;
        return(
        <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primery">DEC</button>
        <button onClick={inc} className="btn btn-primery">INC</button>
        <button onClick={rnd} className="btn btn-primery">RND</button>
    </div>
    )
    }
} */

/* const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
} */

/* const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc: inc,
        dec: dec,
        rnd: rnd
        }

} */

/* export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
//export default connect(mapStateToProps, actions)(Counter);
export default Counter