class SpriteAnimation {
    constructor(totalFrames) {
      this.spriteImages = [];
      this.currentFrame = 0;
      this.TOTAL_FRAMES = totalFrames;
    }
  
    preload() {
      for (let i = 0; i <= this.TOTAL_FRAMES; i++) {
        let imageName = `horse/horse-run-0${i}.png`;
        this.spriteImages.push(loadImage(imageName));
      }
    }
  
    draw() {
      background(random());
      smooth();
      image(this.spriteImages[this.currentFrame], width / 2, height / 2);
      image(this.spriteImages[this.currentFrame], width / 3, height / 3);
      this.currentFrame = (this.currentFrame + 1) % this.TOTAL_FRAMES;
    }
  }
  
  let animation;
  
  function setup() {
    createCanvas(400, 400);
    animation = new SpriteAnimation(6); // Substitua 6 pelo número real de quadros.
    animation.preload();
  }
  
  function draw() {
    animation.draw();
  }