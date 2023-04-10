import React from "react";
export default class Perros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perros: []
        }

        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json() )
        .then ( (result) => {
            console.log(perros)
            this.setState({
                perros: result
            });
        })
    }

    render() {
        return(
            <>








            </>
        )
    }
}