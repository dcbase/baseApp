/**
 * Created by dachu_liu on 2019/9/17.
 */
import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Home from './page/home/Home'
import User from './page/user/User'

const dataSource = [
    {icon:require('../assets/images/icon-daily.png'),selectedIcon:require('../assets/images/icon-daily-active.png'),tabPage:'Home',tabName:'主页',component:Home},
    {icon:require('../assets/images/icon-user.png'),selectedIcon:require('../assets/images/icon-user-active.png'),tabPage:'User',tabName:'我的',component:User}
]

var navigation = null;
export default class MainPage extends Component {

  constructor(props) {
    super(props)
    navigation = this.props.navigation
    this.state = {
      selectedTab: 'Home'
    }
  }

    render() {
        let tabViews = dataSource.map((item,i) => {
          return (
              <TabNavigator.Item
                  title={item.tabName}
                  selected={this.state.selectedTab===item.tabPage}
                  titleStyle={{color:'#77869E'}}
                  selectedTitleStyle={{color:'#0047CC'}}
                  renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                  renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon} />}
                  onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                  key={i}
              >
                  <item.component  navigation={navigation}/>
              </TabNavigator.Item>
          );
        })
        return (
          <View style={styles.container}>
            <TabNavigator tabBarStyle={styles.tabBar}>
                {tabViews}
            </TabNavigator>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    tabIcon:{
        width:23,
        height:23,
    },
    tabBar:{
        height:70,
        paddingBottom:10,
        alignItems:'center'
    }
})
