/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 4/23/14
 * Time: 10:20 PM
 */
$(document).ready(function(){
    Parse.initialize(appID,javascriptKey);
    var TestObject = Parse.Object.extend("TestObject");
    var query = new Parse.Query(TestObject);
    query.exists("signatureImage");
    query.find({
        success: function(results) {

            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                signatureURL = object.get('signatureImage').url();
                $('#signatures').append('<img src="' + signatureURL +  '" class="smallSignature">');
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
})

