const canvas = document.getElementById('animation-canvas');
const context = canvas.getContext('2d');

// Frame settings
const frameCount = 240; // We have 240 frames (00000 to 00239)
const currentFrame = index => (
  `video_frames_30fps/frame_${String(index).padStart(5, '0')}.png`
);

const images = [];
const frameInfo = {
    frame: 0
};

// Target frame to animate towards for smoothness (lerp)
let targetFrame = 0;
let loadedFrames = 0;

// Set canvas dimensions
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render(); // Re-render the current frame on resize
}

window.addEventListener('resize', resizeCanvas);

// Preload images
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
        loadedFrames++;
        if (loadedFrames === 1) {
            resizeCanvas(); // Draw the first frame once loaded
        }
    };
    img.src = currentFrame(i);
    images.push(img);
}

// Function to draw the image covering the canvas (similar to background-size: cover or object-fit: cover)
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }
    
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;
    
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,
        nh = ih * r,
        cx, cy, cw, ch, ar = 1;

    // Decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

// Render the current frame
function render() {
    if (images[frameInfo.frame] && images[frameInfo.frame].complete) {
        // Draw with cover effect
        drawImageProp(context, images[frameInfo.frame], 0, 0, canvas.width, canvas.height);
    }
}

// Update target frame based on scroll
window.addEventListener('scroll', () => {
    const html = document.documentElement;
    // Calculate the percentage of how much we've scrolled
    const scrollTop = window.scrollY || html.scrollTop || document.body.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    
    // Calculate the frame index
    targetFrame = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
});

// Linear interpolation for smooth frame transition
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

// Animation loop
function tick() {
    // Smoothly update the current frame towards target frame
    // 0.1 is the easing amount, lower is slower/smoother
    let newFrame = lerp(frameInfo.frame, targetFrame, 0.1);
    frameInfo.frame = Math.round(newFrame);
    
    // Prevent index out of bounds
    if (frameInfo.frame >= frameCount) frameInfo.frame = frameCount - 1;
    if (frameInfo.frame < 0) frameInfo.frame = 0;
    
    render();
    requestAnimationFrame(tick);
}

// Start animation loop
tick();
