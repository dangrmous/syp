/**
 * Created by geoff on 4/22/14.
 */

$(document).ready(function() {
    $('.sigPad').signaturePad({drawOnly:true});
});

Parse.initialize(appID,javascriptKey);

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
});
