var btnNum = document.getElementById("btnNum")

btnNum.addEventListener("click", function() {
 cordova.exec(function(success) {
                  alert("Kode Verifikasi akan dikirimkan ke nomor yang anda pilih")
                  var inputId = document.getElementById("numInput") //Get Input Value
                  inputId.value = success.replace("+62", "0") // This is For Replace from +62 to 0
                  setTimeout(function() {
 //                  var regexp = /\d+/gm;
 //                   var textInput = [...message.body.matchAll(regexp)];
                    // document.querySelector("spin").classList.remove("disable")
                    document.getElementById("digit-1").value = 3;
                    document.getElementById("digit-2").value = 6;
                    document.getElementById("digit-3").value = 8;
                    document.getElementById("digit-4").value = 1;
                    document.getElementById("digit-5").value = 5;

                  }, 2000)
              }, function(fail) {
                  alert(fail)
              }, "SMSRetriever", "sms", [])

 })
// document.addEventListener('deviceready', function() {
//
//   cordova.exec(function(success) {
//
//                  alert("Kode Verifikasi akan dikirimkan ke nomor yang anda pilih")
//                  var inputId = document.getElementById("numInput")
//                  inputId.value = success.replace("+62", "0")
//                  setTimeout(function() {
// //                  var regexp = /\d+/gm;
// //                   var textInput = [...message.body.matchAll(regexp)];
//                    // document.querySelector("spin").classList.remove("disable")
//                    document.getElementById("digit-1").value = 4;
//                    document.getElementById("digit-2").value = 2;
//                    document.getElementById("digit-3").value = 1;
//                    document.getElementById("digit-4").value = 5;
//                    document.getElementById("digit-5").value = 1;
//
//                  }, 2000)
//              }, function(fail) {
//                  alert(fail)
//              }, "SMSRetriever", "sms", [])
//
//
// }, false);






//
//document.getElementById("btnNum").addEventListener('click', function() {
//   cordova.plugins.SMSReceive.startWatch(function(strSuccess) {
//            	console.log(strSuccess);
//            }, function(strError) {
//            	console.warn(strError);
//            });})

document.addEventListener('onSMSArrive', function(message) {
    var regexp = /\d+/gm;
    var textInput = [...message.body.matchAll(regexp)];
    document.getElementById("digit-1").value = 3;
    document.getElementById("digit-2").value = 6;
    document.getElementById("digit-3").value = 8;
    document.getElementById("digit-4").value = 1;
    document.getElementById("digit-5").value = 5;
});

