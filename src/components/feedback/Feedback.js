import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    FormInput,
    FormLabel,
    FormValidationMessage,
    Button,
    Icon
} from 'react-native-elements';


export default class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: 'Feedback',
            drawerIcon: ({ tintColor }) => (
              <Icon
                name='feed' type='font-awesome'
              />
            ),
            headerLeft: <Icon name='bars' underlayColor='transparent' type='font-awesome' iconStyle={{ marginLeft: 10}} color='#fff' onPress={()=>{ navigation.navigate('DrawerOpen'); }} />
        }
    };

    render () {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View>
                    <Text>
                        Para melhorar nossa interação nossos usuários envie seu feeback.
                    </Text>
                </View>

                <View>
                    <FormLabel>Nome</FormLabel>
                    <FormInput onChangeText={(name) => this.setState({ name })}/>
                    <FormValidationMessage>Error message</FormValidationMessage>

                    <FormLabel>Email</FormLabel>
                    <FormInput onChangeText={(email) => this.setState({ email })}/>
                    <FormValidationMessage>Error message</FormValidationMessage>

                    <FormLabel>Mensagem</FormLabel>
                    <FormInput onChangeText={(message) => this.setState({ message })}/>
                    <FormValidationMessage>Error message</FormValidationMessage>
                </View>

                <View>
                    <Button
                        raised
                        icon={{name: 'cached'}}
                        title='BUTTON WITH ICON' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});