import React, { Component } from 'react';
import { View, Animated, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';


import { Actions } from 'react-native-router-flux';

export const Input = ({ label, securty, style, onChange, placeholder, defaultValue }) => (
    <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
            style={styles.inputItem}
            clearButtonMode='while-editing'
            secureTextEntry={securty ? true : false}
            placeholder={placeholder}
            defaultValue={defaultValue} onChangeText={text => onChange(text)}
        />
    </View>
)
export const BaseButton = ({ onPress, bg, title, style, textStyle, disabled=false }) => (
    <TouchableOpacity activeOpacity={0.5} disabled={disabled} onPress={onPress}  style={[styles.baseBtn,style]}>
        <Text style={[textStyle]}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        padding:20
    },
    baseBtn: {
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    loginBtn: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
        paddingVertical: 16,
        backgroundColor: '#0047CC',
        borderRadius: 6
    },
    loginBtnText: {
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
    },
    inputBox: {
        flex:1,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#C1C8D4',
        marginBottom:32
    },
    inputLabel: {
        flex:1,
        fontSize:14,
        color:'#77869E'
    },
    inputItem: {
        flex:1,
        fontSize:20,
        color:'#042C5C',
        paddingVertical:12
    }
})






















