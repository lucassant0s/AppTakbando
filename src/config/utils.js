import React, { Component } from 'react';
import {
    ToastAndroid,
    Platform
} from 'react-native';
import Toast from 'react-native-root-toast';


export const API_URI = 'https://fastfoodapi.herokuapp.com/api/v1';

export const handlerMessageToast = (message) => {
    if (Platform.OS === 'android') ToastAndroid.show(message, ToastAndroid.SHORT);
    else {
        Toast.show(message, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });
    }
}