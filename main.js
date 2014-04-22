/**
 * Created by geoff on 4/22/14.
 */

$(document).ready(function() {
    $('.sigPad').signaturePad({drawOnly:true});
});

Parse.initialize("cCJwugvznt3cG7ClMhOX5DWB0DkzgzUrd9Jh9e89", "mI7CIgqGt8ywqO7COchTqAaclnJ7vZLxlIp6pSol");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
});
