window.onload = function () {
  // 01. ANIMATION LOOP ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;

  let start = new Date();

  window.requestAnimationFrame(drawRandomColoredRectangle);

  function drawRandomColoredRectangle() {
    const now = new Date();
    if (now - start >= 1000) {
      start = now;

      // Clear canvas
      ctx1.clearRect(0, 0, cv1.width, cv1.height);

      // Random Colors
      const color = createRandomRGBColor();
      const fillOpacity = Math.random();
      const fillColor =
        'rgba(' +
        color.r +
        ', ' +
        color.g +
        ', ' +
        color.b +
        ', ' +
        fillOpacity +
        ')';
      const borderColor =
        'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ')';

      const x = getRandomInt(0, cv1.width);
      const y = getRandomInt(0, cv1.height);
      const w = getRandomInt(0, cv1.width - x);
      const h = getRandomInt(0, cv1.height - y);

      // Draw Rectangle
      ctx1.beginPath();
      ctx1.fillStyle = fillColor;
      ctx1.strokeStyle = borderColor;
      ctx1.rect(x, y, w, h);
      ctx1.stroke();
      ctx1.fill();
    }

    // Animate
    window.requestAnimationFrame(drawRandomColoredRectangle);
  }

  function createRandomRGBColor() {
    const red = getRandomInt(0, 257);
    const green = getRandomInt(0, 257);
    const blue = getRandomInt(0, 257);
    return { r: red, g: green, b: blue };
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  // 02. RUNNING ANIMATION WITH IMAGE

  const cv2 = this.document.getElementById('2');
  const ctx2 = cv2.getContext('2d');
  cv2.width = 600;
  cv2.height = 300;

  let isBackgroundLoaded = false;
  let isHeroLoaded = false;

  const background = new Image();
  background.src = 'back.png';
  background.onload = function () {
    isBackgroundLoaded = true;
  };

  const hero = new Image();
  hero.src = 'sprite.png';
  hero.onload = function () {
    isHeroLoaded = true;
  };

  window.requestAnimationFrame(animationLoop);

  // Cell Specifications
  const cellWidth = 256;
  const cellHeight = 256;
  let currentCell = 0;

  // Time Specifications
  let animationStart = new Date();

  // Move Specifications
  const moveAmount = 15;
  let moveX = 100;

  function animationLoop() {
    const animationNow = new Date();
    if (animationNow - animationStart >= 100) {
      animationStart = animationNow;

      // Clear
      ctx2.clearRect(0, 0, cv2.width, cv2.height);

      // Update
      currentCell++;
      currentCell %= 6;
      if (moveX >= cv2.width) {
        moveX = -1 * cellWidth;
      } else {
        moveX += moveAmount;
      }

      // Draw
      if (isBackgroundLoaded) {
        ctx2.drawImage(background, 0, 0, cv2.width, cv2.height);
      }

      if (isHeroLoaded) {
        ctx2.drawImage(
          hero,
          currentCell * cellWidth,
          0,
          cellWidth,
          cellHeight,
          moveX,
          150,
          100,
          100
        );
      }
    }

    // Animate
    window.requestAnimationFrame(animationLoop);
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};
