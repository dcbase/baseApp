import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import NavBar from '../../../components/navBar'
import {commonStyles} from "../../../assets/style/commonStyles"
import {Actions} from "react-native-router-flux"

export default class User extends Component{
    constructor(props){
        super(props)
        this.state={
            dailyLength:0
        }
    }

    _renderTitleItem() {
        return (
            <Text style={styles.titleItem}>我的</Text>
        );
    }

    componentDidMount() {

    }

    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    titleItem={() => this._renderTitleItem()}
                />
                <ScrollView contentContainerStyle={{padding:24,position:'relative'}}>
                    <View style={commonStyles.headerBg} />
                    <View style={{padding:16,borderRadius:8,backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image style={{width:40,height:40,borderRadius:20,marginRight:16}} source={require('../../../assets/images/user.jpg')} />
                                <Text>test</Text>
                            </View>
                            <Text>运维人员</Text>
                        </View>
                        <Text style={{fontSize:14,color:'#77869E',marginVertical:15}}>未完成任务统计</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={styles.userItem}>
                                <Text style={{fontSize:20,color:'#fff',marginBottom:10}}>10</Text>
                                <Text style={{fontSize:12,color:'#fff'}}>日常巡检</Text>
                            </View>
                            <View style={[styles.userItem,{marginHorizontal:20,backgroundColor:'#12D4AC'}]}>
                                <Text style={{fontSize:20,color:'#fff',marginBottom:10}}>8</Text>
                                <Text style={{fontSize:12,color:'#fff'}}>日常巡检</Text>
                            </View>
                            <View style={[styles.userItem,{backgroundColor:'#FF5B84'}]}>
                                <Text style={{fontSize:20,color:'#fff',marginBottom:10}}>8</Text>
                                <Text style={{fontSize:12,color:'#fff'}}>日常巡检</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.loginBtn,commonStyles.btnHeight]}
                            activeOpacity={0.8}
                            onPress={() => Actions.login() }
                        >
                            <Text style={styles.loginBtnText}>退出</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9edef'
    },
    titleItem: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    userItem: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        borderRadius:4,
        backgroundColor:'#3874E5'
    },
    loginBtn: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
        backgroundColor: '#0047CC',
        borderRadius: 6
    },
    loginBtnText: {
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
    },
});
