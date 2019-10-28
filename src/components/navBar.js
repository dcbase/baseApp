import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default class NavBar extends Component {

    static propTypes = {
        leftItem: PropTypes.func,
        titleItem: PropTypes.func,
        rightItem: PropTypes.func,
    };

    renderLeftItem() {
        if (this.props.leftItem === undefined) {
            return;
        }
        return this.props.leftItem();
    };

    renderTitleItem() {
        if (this.props.titleItem === undefined) {
            return;
        }
        return this.props.titleItem();
    };

    renderRightItem() {
        if (this.props.rightItem === undefined) {
            return;
        }
        return this.props.rightItem();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',paddingLeft:24}}>
                    {this.renderLeftItem()}
                </View>

                <View style={{flex:4,justifyContent: 'center',alignItems: 'center'}}>
                    {this.renderTitleItem()}
                </View>

                <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',paddingRight:24}}>
                    {this.renderRightItem()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: Platform.OS === 'ios' ? 84 : 44,
        backgroundColor: '#0047cc',
        flexDirection: 'row',//按行排列
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 30 : 0
    },
});
