import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    RefreshControl
} from 'react-native'
import NavBar from '../../../components/navBar';
import {commonStyles} from "../../../assets/style/commonStyles"


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            dailyLength:0
        }
    }

    _renderTitleItem() {
        return (
            <Text style={commonStyles.titleItem}>主页</Text>
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
                <ScrollView contentContainerStyle={{paddingVertical:30,paddingHorizontal:24}}>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={ () => { } }
                                      style={[commonStyles.listBox]} >
                        <View style={[commonStyles.listBoxTip,{backgroundColor:'#000'}]}><Text style={{color:'#fff',fontSize:12}}>测</Text></View>
                        <View style={commonStyles.listBoxText}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={[commonStyles.listBoxTitle,{flex:2}]}>测试标题</Text>
                                <Text style={{flex:1,fontSize:10,color:'#77869E',textAlign:'right'}}>2019-10-10</Text>
                            </View>
                            <Text style={commonStyles.listBoxDesc}>测试地址</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={ () => { } }
                                      style={[commonStyles.listBox]} >
                        <View style={[commonStyles.listBoxTip,{backgroundColor:'#000'}]}><Text style={{color:'#fff',fontSize:12}}>测</Text></View>
                        <View style={commonStyles.listBoxText}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={[commonStyles.listBoxTitle,{flex:2}]}>测试标题</Text>
                                <Text style={{flex:1,fontSize:10,color:'#77869E',textAlign:'right'}}>2019-10-10</Text>
                            </View>
                            <Text style={commonStyles.listBoxDesc}>测试地址</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={ () => { } }
                                      style={[commonStyles.listBox]} >
                        <View style={[commonStyles.listBoxTip,{backgroundColor:'#000'}]}><Text style={{color:'#fff',fontSize:12}}>测</Text></View>
                        <View style={commonStyles.listBoxText}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={[commonStyles.listBoxTitle,{flex:2}]}>测试标题</Text>
                                <Text style={{flex:1,fontSize:10,color:'#77869E',textAlign:'right'}}>2019-10-10</Text>
                            </View>
                            <Text style={commonStyles.listBoxDesc}>测试地址</Text>
                        </View>
                    </TouchableOpacity>
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
