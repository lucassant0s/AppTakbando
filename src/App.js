import React, { Component } from 'react';
import { Rooter } from './config/routers';


export default class Application extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Rooter disableGestures={false} />
        );
    }
}