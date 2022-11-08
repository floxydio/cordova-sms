cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-sms-receive.SMSReceive",
      "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
      "pluginId": "cordova-plugin-sms-receive",
      "clobbers": [
        "cordova.plugins.SMSReceive"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-sms-receive": "2.0.0"
  };
});