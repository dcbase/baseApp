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


export default class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            dailyLength:0
        }
    }

    _renderTitleItem() {
        return (
            <Text style={commonStyles.titleItem}>{this.props.title}</Text>
        );
    }

    _renderLeftItem() {
        return (
            <TouchableOpacity onPress={()=>{
                Actions.pop()
            }}>
                <Iconfont name='arrowsLeftLine' size={20} color='#ddd' style={{fontWeight:'700'}}/>
            </TouchableOpacity>
        );
    }

    componentDidMount() {

    }

    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    leftItem={() => this._renderLeftItem()}
                    titleItem={() => this._renderTitleItem()}
                />
                <ScrollView contentContainerStyle={{paddingHorizontal:24,paddingTop:24,paddingBottom:100}}>
                    <View style={commonStyles.headerBg} />
                    <View style={[styles.menuList,{marginBottom:13}]}>
                        {/*详情头部展示*/}
                        {this.state.infoData ? this._renderSitInfoItem(this.state.infoData) : null }
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
