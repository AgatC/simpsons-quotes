import React, { Component } from 'react';

class Working extends Component {
    handleClick = () => {
        this.setState({ on: !this.state.on });

    };
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = { on: props.on };
    }

    render() {
        const IsWorking = this.state.on ? 'HomerIsWorking' : 'OnBreak';
        return (
            <div className="IsWorking">

                <button onClick={this.handleClick}
                    className={''}>{IsWorking.toUpperCase()}</button>
                <figure className={IsWorking} />
            </div >
        );
    }
}

export default Working;
