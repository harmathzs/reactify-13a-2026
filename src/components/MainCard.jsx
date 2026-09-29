import React from 'react'
export default class MainCard extends React.Component {
    componentDidMount = () => {
        console.log("MainCard props", this.props)
    }

    render() {
        return <>
            {this.props.title}
        </>
    }
}