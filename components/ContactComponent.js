import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    static navigationOptions ={
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return(
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        title = "Contact Information"
                        wrapperStyle= {{margin: 20}}
                        >
                        <Text style= {{marginBottom: 10}}> 
                            1 Nucamp Way {"\n"}
                            Seattle, WA 98001 {'\n'} 
                            U.S.A. {'\n'} 
                            {'\n'} 
                            Phone: 1-206-555-1234 {'\n'} 
                            Email: campsites@nucamp.co
                        </Text>
                        <Button 
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;