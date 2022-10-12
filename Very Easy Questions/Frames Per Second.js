/*
FPS (frames per second) = frames / 1 second
frameTime (time change over a frame) = seconds / 1 frame
*/

const framePerSecond = (frame,minutes) => {
    return frame / (1 / (minutes*60));  // as per the given parameter, 10/(1/(25*60)) = 10/(1/1500) = 10*1500 = 15000
}

const output = framePerSecond(10,25);
console.log(output);