var networkinterface = function() {
};

networkinterface.getIPAddress = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getWiFiIPAddress", [] );
};

networkinterface.getWiFiIPAddress = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getWiFiIPAddress", [] );
};

networkinterface.getCarrierIPAddress = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getCarrierIPAddress", [] );
};

networkinterface.getSSID = function(success, fail) {
    cordova.exec(success, fail, "networkinterface", "getSSID", []);
};

module.exports = networkinterface;
