import {StyleSheet} from "react-native";
import {scaleSizeH, scaleSizeW} from "../utils/screen";

export const commonStyles = StyleSheet.create({
    headerBg:{
        position:'absolute',top:-200,left:0,right:0,backgroundColor:'#0047cc',height:250
    },
    titleItem: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    listBox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:8,
        padding:12,
        marginBottom:10,
        alignItems:'center'
    },
    listBoxDefault:{
        borderRadius:8,
        marginBottom:0,
        borderBottomWidth:1,
        borderBottomColor:'#E2E7EE'
    },
    listBoxNoBorder:{
        borderBottomWidth:0
    },
    listBoxTip:{
        width:32,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    listBoxText:{
        flex:1,
        marginLeft:16
    },
    listBoxTitle:{
        fontSize:14,
        lineHeight:24,
        fontWeight:'bold',
        color:'#042C5C'
    },
    listBoxDesc:{
        fontSize:12,
        lineHeight:24,
        color:'#77869E'
    },
    footer: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        flexDirection: 'row',
        height: 80,
        backgroundColor:'#fff',
        paddingTop:20,
        paddingHorizontal:24,
        shadowColor:'#77869E',
        shadowRadius:3,
        shadowOpacity:.3
    },
    btn: {
        flex:1,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        marginHorizontal:10
    },
    btnHeight:{
        height:40
    },
    btnText: {
        fontSize:13
    },
    btnDefault: {
        backgroundColor:'#0047CC',
        color:'#fff'
    },
    btnDefaultOpacity: {
        backgroundColor:'#7fa3e5'
    },
    btnWarn: {
        backgroundColor:'#FFB74D',
        color:'#fff'
    },
    btnDesc: {
        backgroundColor:'#E5EAF0'
    },
    colorWhite: {
        color:'#fff'
    },
    colorBlue: {
        color:'#042C5C'
    },
    marginRightSmall: {
        marginRight:10
    },
    marginRight: {
        marginRight:20
    },
    marginRightBig: {
        marginRight:30
    },
    listTitle: {
        fontSize:14,
        color:'#77869E',
        fontWeight:'bold'
    },
    bold: {
        fontWeight:'bold'
    },
    fs12: {
        fontSize:12
    },
    fs13: {
        fontSize:13
    },
    fs14: {
        fontSize:14
    },
    //照片样式
    photoItem: {
        position:'relative',
        marginLeft:scaleSizeW(6),
        marginRight:scaleSizeW(7),
        marginBottom:scaleSizeW(10),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#05173A',
        width:scaleSizeW(88),
        height:scaleSizeH(88)
    },
});

