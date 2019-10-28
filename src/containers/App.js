import React, {Component} from "react"
import {Scene, Router, Actions, Modal, Stack, Lightbox} from "react-native-router-flux"


import TabBar from './TabBarContainer'
import Login from './page/user/Login'


const getSceneStyle = () => ({
    backgroundColor: "#e9edef",
    shadowOpacity: 1,
    shadowRadius: 3,
})


const scenes = Actions.create(
    <Scene key="root">
        <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox" hideNavBar={true}>
                <Stack key="init" back>
                    <Scene key="main" initial back={false} hideNavBar component={TabBar}/>
                </Stack>
                <Stack key="login" hideNavBar titleStyle={{alignSelf: "center"}}>
                    <Scene key="loginModal" initial component={Login} title="Login" back={false} hideNavBar/>
                </Stack>
            </Lightbox>
        </Modal>
    </Scene>
)

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router
                scenes={scenes}
                tintColor='white'
                getSceneStyle={getSceneStyle}
            />
        )
    }
}


const initApp = () => {
    return (
        <App/>
    )
}

export default initApp
