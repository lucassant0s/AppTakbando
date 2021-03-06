import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import {
    Card,
    Button,
    Icon
} from 'react-native-elements';


export default class MessageListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: {}
        };
    }

    componentWillMount = () => {
        this.setState({
            message: this.props.message
        });
    }

    render () {
        return (
            <Card
                title={this.state.message.title}
                image={{ uri: this.state.message.image}}>
                    <Text style={{marginBottom: 10, fontSize: 18, justifyContent: 'space-between', fontFamily: 'Lato-Regular'}}>
                        {this.state.message.message}
                    </Text>
            </Card>
        );
    }
}