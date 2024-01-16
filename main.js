noseX = 0
noseY = 0
function preload()
{
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialised');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -20;
        noseY = results[0].pose.nose.y +0;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw()
{
    image(video, 0, 0, 350, 350)
    image(mustache, noseX, noseY, 40, 40);
}
function take_snapshot()
{
    save('myFilterImage.png');
}