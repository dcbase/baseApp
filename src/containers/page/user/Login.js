/**
 *
 */
import React,{ Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { Input } from '../../../components/common'
import $http from '../../../assets/utils/request'
import {Actions} from "react-native-router-flux"



export default class Login extends Component {
    state={
        userName:'yunwei1',
        passWord:'123456'
    }

    constructor(props) {
        super(props)
    }

    renderInput() {
        return (
            <View style={{marginTop: 40}}>
                <Input defaultValue={this.state.userName} label="用户名" placeholder="请输入账号" onChange={userName => this.state.userName = userName} value={this.state.userName}/>
                <Input defaultValue={this.state.passWord} label="密码" placeholder="请输入密码" onChange={passWord => this.state.passWord = passWord} value={this.state.passWord} securty />
            </View>
        )
    }

    loginClick = () => {
        let params=this.state
        $http.$post('http://localhost:8081/userCenter/login',params).then( res =>{
            Actions.lightbox()
        })
    }

    renderLoginBtn() {
        return (
            <View>
                <TouchableOpacity onPress={this.loginClick}
                    style={styles.loginBtn}
                    activeOpacity={0.8}>
                    <Text style={styles.loginBtnText}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:24,color:'#333',marginTop:60, fontWeight:'bold'}}>用户登录</Text>
                </View>
                <ScrollView>
                    {this.renderInput()}
                    {this.renderLoginBtn()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        padding:20
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
