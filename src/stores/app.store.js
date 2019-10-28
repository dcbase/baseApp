import { observable, computed, toJS } from 'mobx';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-simple-toast'
import request from '../assets/utils/request'
import storage from '../assets/utils/storage'

class AppStore {
    @observable user = {
        userName: undefined,
        passWord: undefined,
        userId: undefined,
        token: undefined,
        phone: undefined,
        name: undefined
    }

    @observable logging = false

    @observable menus = []

    @computed get logged () {
        return this.user.token ? true : false
    }

    @observable setting = {}

    async syncSetting (newSetting) {

        let defaultSetting = config.ENV

        try {
            //避免由于这次异步操作造成的异常被外部的 try...catch... 捕获
            let oldSetting = await storage.load({ key: 'setting' }).catch(e => {
                console.log(e)
            }) || {}
            if(!newSetting) {
                this.setting = {
                    ...defaultSetting,
                    ...oldSetting
                }
            } else {
                this.setting = {
                    ...defaultSetting,
                    ...oldSetting,
                    ...newSetting
                }
            }
            await storage.save({key: 'setting', data: toJS(this.setting)})

        } catch (error) {
            console.log(error)
        }
    }

    async checkLogin() {
        this.logging = true
        try {
            let user = await storage.load({
                key: 'user'
            })
            this.user = Object.assign(this.user, user)
            console.log('checkLogin:after::',JSON.stringify(this.user))
        } catch (error) {
            //
        }
        return this.logged
    }

    async login() {
        let { userName, passWord } = this.user

        if(!userName || !passWord) {
            Toast.show('账号密码不能为空！')
            return false
        }
        let params={
            userName,
            passWord
        }
        let _data=await request.$post('http://apms-test.fpi-inc.site/simple-user-center-server/userCenter/login',params)
        console.log(_data)
        if( _data.code !== 200 ){
            Toast.show(_data.msg)
            return false
        }
        let { userId, name, phone, token } = _data.data
        await storage.save({
            key: 'user',
            data: {
                userId,
                userName,
                token,
                name,
                phone
            }
        })
        this.user = Object.assign(this.user, _data.data)
        return true
    }

    async logout() {
        await storage.remove({
            key: 'user'
        })
        this.user = Object.assign(this.user, {
            userName: this.user.userName,
            passWord: undefined,
            id: undefined,
            token: undefined,
            phone: this.user.phone
        })

        await storage.save({
            key: 'user',
            data: this.user
        })

        Actions.login()

        return true
    }
}

export default new AppStore()
