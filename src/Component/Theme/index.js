import { Component } from "react";
import './index.css'

class Theme extends Component {
    state = {isDarkmode: true }

    change = () => {
        this.setState((perv)=>({isDarkmode:!perv.isDarkmode}))
    }

    render() {
        const {isDarkmode} = this.state
        const bg = isDarkmode ? 'dark-bg' : 'light-bg'
        const cart = isDarkmode ? 'dark-cart' : 'light-cart'
        const head = isDarkmode ? 'dark-head' : 'light-head'
        const btn = isDarkmode ? 'dark-btn' : 'light-btn'

        return(
        <div className={`bg ${bg}`}>
            <div className={` cart ${cart}`}>
            <h1 className={`haed ${head}`}>Click TO Change Mode</h1>
            <button onClick={this.change} className={`btn ${btn}`}> Light Mode</button>
            </div>
        </div>)
    }
}

export default Theme