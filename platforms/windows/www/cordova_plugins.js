cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
        "pluginId": "cordova-plugin-splashscreen",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-device.DeviceProxy",
        "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
        "pluginId": "cordova-plugin-device",
        "merges": [
            ""
        ]
    },
    {
        "id": "phonegap-plugin-push-parse.PushNotification",
        "file": "plugins/phonegap-plugin-push-parse/www/push.js",
        "pluginId": "phonegap-plugin-push-parse",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "id": "phonegap-plugin-push-parse.PushPluginParse",
        "file": "plugins/phonegap-plugin-push-parse/src/windows/PushPluginProxy.js",
        "pluginId": "phonegap-plugin-push-parse",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-device": "1.1.2",
    "phonegap-plugin-push-parse": "1.2.3"
};
// BOTTOM OF METADATA
});