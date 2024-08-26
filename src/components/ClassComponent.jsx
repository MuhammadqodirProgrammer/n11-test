

import { Component, PureComponent } from "react"
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
export default class ComponentName extends Component {


    state = {
        theme: "light"
    }



    componentDidUpdate() {
        console.log(this.state.theme);
        if (this.state.theme === "dark") {
            document.body.classList.add("dark")
        }
        else if (this.state.theme === "light") {
            document.body.classList.remove("dark")
        }
    }

    render() {
        return (
            <div>
                <h1> theme : {this.state.theme}  </h1>

                <button className="px-4 py-3 bg-teal-900 rounded-lg text-white   "
                    onClick={() => {
                        this.state.theme == "dark" ? this.setState({
                            theme: "light"
                        }) : this.setState({
                            theme: "dark"
                        })
                    }}   >  {
                        this.state.theme == "light" ? <FaMoon /> : <LuSun />
                    } </button>




            </div>
        )
    }

}       