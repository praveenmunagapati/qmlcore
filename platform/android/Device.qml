Object {
	property bool macAccessable: false;
	property string modelName: "androidtv";

	getDeviceId(callback): {
		var deviceString = this._context.system.os + "_" + this._context.system.browser
		deviceString = deviceString.replace(/\s/g, '')
		callback(deviceString)
	}

	getMacAddress(callback): { callback("") }
}
