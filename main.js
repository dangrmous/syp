/**
 * Created by geoff on 4/22/14.
 */

$(document).ready(function() {
    pad = $('.sigPad').signaturePad({drawOnly:true});
    Parse.initialize(appID,javascriptKey);

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    $("#submit").click(function(){
        sigImageData = pad.getSignatureImage();
        file = new Parse.File("signatureImage.png", { base64: sigImageData });
        testObject.save({'signature': $('input[name="output"]').val(), 'signatureImage': file});
    });

});



