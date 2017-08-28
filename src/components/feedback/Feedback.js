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
            <ScrollView style={{backgroundColor: '#F5FCFF'}}>
                <Card
                    imageWrapperStyle={{ marginTop: -36}}
                    containerStyle={{ marginBottom: 10}}
                    image={require('../../images/MARCA.png')}>

                    <Text style={{fontSize: 18, justifyContent: 'space-around', fontFamily: 'Lato-Regular', }}>
                        {'Nós da equipe Takbando, estamos sempre trabalhando para maior satisfação dos nossos usuários, por isso contamos com sua ajuda, seja ela com elogios, criticas ou sugestões. Dúvidas? Estamos aqui para esclarecê-las! '}
                    </Text>

                    <Divider style={{ backgroundColor: '#7cc532' }} />

                    <View style={{ marginBottom: 20}}>
                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>Name</FormLabel>
                        <FormInput underlineColorAndroid='#999'/>

                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>E-mail</FormLabel>
                        <FormInput underlineColorAndroid='#999'/>

                        <FormLabel labelStyle={{ fontSize: 16, fontFamily: 'Comfortaa-Regular'}}>Mensagem</FormLabel>
                        <FormInput underlineColorAndroid='#999'/>
                    </View>

                    <Button
                        icon={{name: 'sc-telegram', type: 'evilicon', size: 22}}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        iconRight={true}
                        textStyle={{ fontWeight: '500' }}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
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