import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import {
    FormInput,
    FormLabel,
    FormValidationMessage,
    Button,
    Icon,
    Card,
    Divider
} from 'react-native-elements';
import{ handlerMessageToast, API_URI} from '../../config/utils';


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

    onFeedback = () => {
        const { name, email, message } = this.state;
        if (name, email, message !== '') {
            fetch(`${API_URI}/feedback`, {
                method: 'POST',
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "9c2218c5-34d7-8f6f-ca4b-babdf85c050a"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                })
            })
            .then((response) => {
                if (response.status === 200) handlerMessageToast('Feedback salvo com sucesso!');
                else handlerMessageToast('Ocorreu algum erro ao tentar salvar seu feedback.');
            })
            .catch((error) => {
                handlerMessageToast(error.message);
            });
        } else {
            handlerMessageToast('Por favor, preencha todos os campos...');
        }
    }

    render () {
        return (
            <ScrollView 
                keyboardShouldPersistTaps='always'
                keyboardDismissMode='interactive'    
                style={{backgroundColor: '#F5FCFF'}}>
                <Card
                    imageWrapperStyle={{ marginTop: -36}}
                    containerStyle={{ marginBottom: 10}}
                    image={require('../../images/MARCA.png')}>

                    <Text style={{fontSize: 18, justifyContent: 'space-around', fontFamily: 'Lato-Regular', }}>
                        {'Nós da equipe Takbando, estamos sempre trabalhando para maior satisfação dos nossos usuários, por isso contamos com sua ajuda, seja ela com elogios, criticas ou sugestões. Dúvidas? Estamos aqui para esclarecê-las! '}
                    </Text>

                    <Divider style={{ backgroundColor: '#7cc532' }} />

                    <View style={{ marginBottom: 20}}>
                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>Name *</FormLabel>
                        <FormInput underlineColorAndroid='#999' onChangeText={(name) => this.setState({name})} value={this.state.name} />

                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>E-mail *</FormLabel>
                        <FormInput underlineColorAndroid='#999' onChangeText={(email) => this.setState({email})} value={this.state.email} />

                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>Mensagem *</FormLabel>
                        <FormInput underlineColorAndroid='#999' onChangeText={(message) => this.setState({message})} value={this.state.message} />
                    </View>

                    <Button
                        icon={{name: 'sc-telegram', type: 'evilicon', size: 22}}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        iconRight={true}
                        textStyle={{ fontWeight: '500' }}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress={this.onFeedback}
                        title='ENVIAR' />
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});