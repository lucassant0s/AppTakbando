import React, { Component } from 'react';
import {
    View,
    Linking,
    Image
} from 'react-native';
import { 
    SocialIcon
} from 'react-native-elements';
import { connect } from 'react-redux';


export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined // user has not logged in yet
        };
    }

    // Set up linking
    componentDidMount = () => {
        // Add event listener to handle OAuthLogin:// URLs
        Linking.addEventListener('url', this.handleOpenURL);

        // lAUNCHED FROM AN EXTERNAL url
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url });
            }
        });
    }

    componentWillUnmount = () => {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = ({url}) => {
        // Extract stringfield user string out of the URL
        const [, user_string] = url.match(/user=([^#]+)/);
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        });
       
    }

    loginWithFacebook = () => {
        this.props.navigation.navigate('RecipeStack')
    }

    loginWithGoogle = () => {
        this.props.navigation.navigate('RecipeStack')
    }

    // loginWithFacebook = () => this.openUrl('http://192.168.0.2:3000/auth/facebook');

    // loginWithGoogle = () => this.openUrl('http://192.168.0.2:3000/auth/google');

    openUrl = (url) => {
        Linking.openURL(url);
    }

    render() {
        console.log('props', this.props);
        return (
            <Image
                style={{flex: 1, width: 420}}
                source={require('../../images/backgroud_sign.png')}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                    }}
                >
                    <View>
                        <Image
                            style={{ width: 300, height: 200, alignSelf: 'center'}}
                            source={require('../../images/MARCA.png')}
                        />  
                    </View>
                    <View>
                        <SocialIcon
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                            onPress={this.loginWithFacebook}
                        />
                        <SocialIcon
                            title='Sign In With Google'
                            button
                            style={{backgroundColor: 'red'}}
                            type='google'
                            onPress={this.loginWithFacebook}
                        />
                    </View>
                </View>
            </Image>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => { dispatch(login(user)); }
    }
}

export default connect(mapDispatchToProps)(SignIn);
