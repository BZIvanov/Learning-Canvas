window.onload = function() {
  // 01. Handling events ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;
  const boundings = cv1.getBoundingClientRect(); // here we will get the width and height of the specified element
  
  const balls = 5;
  const ballsArr = [];
  let currentBall = null;

  // Create Balls
  for (let i = 0; i < balls; i++) {
    const radius = getRandomInt(25, 50);
    const randColor = createRandomRGBColor();
    const ballColor = 'rgb(' + randColor.r + ',' + randColor.g + ',' + randColor.b +')';
    const ball = new Ball(radius, ballColor);
    ball.context = ctx1;
    ball.x = getRandomInt(radius, cv1.width - radius);
    ball.y = getRandomInt(radius, cv1.height - radius);
    ballsArr.push(ball);
  }

  drawBalls();

  function drawBalls() {
    ctx1.clearRect(0, 0, cv1.width, cv1.height);

    // Draws Balls
    for (let i = 0; i < balls; i++) {
      ballsArr[i].draw();
    }
  }

  function isHitOnBall(mx, my) {
    console.log('alperen');
    for (let i = balls - 1; i >= 0; i--) {
      if (Math.sqrt(Math.pow((mx - ballsArr[i].x), 2) + Math.pow((my - ballsArr[i].y), 2)) < ballsArr[i].r) {
        currentBall = ballsArr[i];
        break;
      }
    }
  }

  // Mouse Event Handlers
  cv1.addEventListener('mousedown', function(event) {
    console.log('mousedown');
    const mouseDownX = event.clientX - boundings.left;
    const mouseDownY = event.clientY - boundings.top;
    console.log(mouseDownX)
    isHitOnBall(mouseDownX, mouseDownY);
  });

  cv1.addEventListener('mousemove', function(event) {
    console.log('mousemove');
    const mouseMoveX = event.clientX - boundings.left;
    const mouseMoveY = event.clientY - boundings.top;

    if (currentBall) {
      currentBall.x = mouseMoveX;
      currentBall.y = mouseMoveY;

      drawBalls();
    }
  });

  cv1.addEventListener('mouseup', function() {
    console.log('mouseup');
    currentBall = null;    
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomRGBColor() {
  const red = getRandomInt(0, 257);
  const green = getRandomInt(0, 257);
  const blue = getRandomInt(0, 257);
  return { r: red, g: green, b: blue };
};
