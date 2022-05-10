var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

    recognition.start();
    speak();

 }
 

 
 function speak(){

    var synth = window.speechSynthesis;
Webcam.attach(camera);

setTimeout(function()
{
       img_id = "selfie1";
       take_snapshot();
       speak_data = "Taking your Selfie in 5 seconds, please wait..."
       var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
},5000)
setTimeout(function()
{
       img_id = "selfie2";
       take_snapshot();
       speak_data = "The second selfie will be taken in 10 seconds"
       var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
},10000)
 

 setTimeout(function()
{
       img_id = "selfie3";
       take_snapshot();
       speak_data = "The third selfie will be taken in 15 seconds"
       var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
},15000)
 
 }
 
Webcam.set({

    width:360,
    height:250,
    image_format : "png",
    png_quality: 90
});

camera = document.getElementById(camera);



function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri)
    {
        if (img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id =selfie1" src="'+data_uri+'"/>'
        }
        if (img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id =selfie2" src="'+data_uri+'"/>'
        }
        if (img_id == "selfie3"){
            document.getElementById("result3").innerHTML = 'img id = selfie3" src= "'+data_uri+'"/>'
        }
    
    });

}

