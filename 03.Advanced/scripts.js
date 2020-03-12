window.onload = function() {
  // 01. SAVE and RESTORE ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;

  // State Stack
  // context.save()      -> saving the context state-canvas
  // context.restore()   -> restoring the state from the state stack

  ctx1.fillStyle = "red";
  ctx1.fillRect(100, 50, 80, 80);
  ctx1.save();

  ctx1.fillStyle = "green";
  ctx1.fillRect(200, 50, 80, 80);
  ctx1.save();

  ctx1.fillStyle = "blue";
  ctx1.fillRect(300, 50, 80, 80);
  ctx1.save();

  ctx1.restore();
  ctx1.fillRect(100, 150, 80, 80);

  ctx1.restore();
  ctx1.fillRect(200, 150, 80, 80);

  ctx1.restore();
  ctx1.fillRect(300, 150, 80, 80);

  // 01. PATTERN ------------------------------------------------------------------

  const cv2 = this.document.getElementById('2');
  const ctx2 = cv2.getContext('2d');
  cv2.width = 600;
  cv2.height = 300;

  const patternImage = new Image();
  patternImage.src = 'apple.png';

  patternImage.onload = function () {
    const pattern = ctx2.createPattern(patternImage, 'repeat-x');
    ctx2.fillStyle = pattern;
    ctx2.fillRect(0, 0, 900, 450);
  };
}
