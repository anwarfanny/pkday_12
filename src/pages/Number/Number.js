import { compnent, Component } from"react"

class Number extends Component {
    render() {
        const number = [1,2,3,4,5]
        const list = number.map((number) =>{
            return <li key={number}>{number}</li>
        })

        return (
            <div>
                <ul>{listItem}</ul>
                {/* <ul>
                {number.map((number) =>{
                    return <li key={number}>{number}</li>
                })</ul>*/}
            </div>
        )
    }
}
export default Number