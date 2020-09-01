import React, { component, Component } from "react"

class forml extends Component {

    state = {
        name:"",
        data:"",
    }
    async requesData() {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos")

        if (response){
            let json = await response.json()
            console.log(json)
            alert("success fech data")
            this.setState
        }else {
            alert(`HTTP-Error ${response.status}`)
        }
    }
    render(){
        let showInfo =""
        if (this.state.data && this.state.data.length) {
            showInfo = "have data"
        } else{
            showInfo = "no data"
        }
        return (
            <div>
                <button className='btn btn-success' onClick={() => this.requestData}>
                    get Data
                </button>
                <br />
                {showInfo}
            </div>
        )
    }
}

export default forml