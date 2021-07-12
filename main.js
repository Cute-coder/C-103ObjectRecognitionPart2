Webcam.set({
    width:350,height:300,image_format:"PNG",png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri+'"/>';

    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xZPVHaYqz/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
