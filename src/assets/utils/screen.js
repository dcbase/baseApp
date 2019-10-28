/**
 * Created by dachu_liu on 19/9/18.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
import {Dimensions, PixelRatio} from 'react-native'
// 获取屏幕的dp

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();
// 高保真的宽度和高度   可调整该尺寸
const designWidth = 375.0;
const designHeight = 812.0;

// 根据dp获取屏幕的px
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size: Number) {
    console.log("screenW======" + screenW)
    console.log("screenPxW======" + screenPxW)
    var scaleWidth = screenW / designWidth;
    var scaleHeight = screenH / designHeight;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size * scale / fontScale + 0.5);
    return size;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size: Number) {
    var scaleHeight = size * screenPxH / designHeight;
    size = Math.round((scaleHeight / pixelRatio + 0.5));
    return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size: Number) {
    var scaleWidth = size * screenPxW / designWidth;
    size = Math.round((scaleWidth / pixelRatio + 0.5));
    return size;
}
