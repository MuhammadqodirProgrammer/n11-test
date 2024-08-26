import { Component } from "react"

export class LifeCycleMethods extends Component {

    state = {
        count: 0,
        userName: "Ali"
    }

    // Componentda domga chilzilgandan keyin  ishlaydi(chaqiriladi) 
    componentDidMount() {
        console.log("Component domga chizildi ");
        document.title = `Cliced ${this.state.count}  `
        // apiga so'rov yuborish , 
        console.log(this.props.count, "props");
    }

    // // Bu componenta dom 
    componentDidUpdate() {
        console.log("Ozgardi yani update boldi ");
        document.title = `Cliced ${this.state.count}  `
        if (this.state.count > 10) {
            alert("10 tadan kop bosish mumkin emas")
        }
    }
    intervalId = setInterval(() => {
        console.log("hello");
    }, 1000);
    // Componentda domdan kill (olib tashlanganda)
    componentWillUnmount() {
        console.log("O'ldim !!!");
        clearInterval(this.intervalId)
    }

    render() {
        return <div className="border border-red-700 p-5    ">
            <h1>LifeCycleMethods</h1>

            <h2>count  {this.state.count}    </h2>

            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}  > Buttun   </button>

        </div>
    }
}