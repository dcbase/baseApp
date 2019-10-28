import Storage from "react-native-storage"
import  AsyncStorage from "@react-native-community/async-storage"

export default new Storage({
    storageBackend: AsyncStorage,
    //十年（一次登陆永久记住。。。）
    defaultExpires: 365 * 10 * 24 * 60 * 60 * 1000,
    enableCache: true
})

