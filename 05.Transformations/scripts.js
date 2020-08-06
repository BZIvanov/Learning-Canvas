window.onload = function () {
  // 01. SCALE ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;

  // context.scale(horizontalScaleFactor, verticalScaleFactor) -> Scales the canvas context
  // horizontalScaleFactor (double): Scales the width of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
  // verticalScaleFactor (double):   Scales the height of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)

  ctx1.fillStyle = 'red';
  ctx1.fillRect(20, 20, 40, 30);

  ctx1.scale(2, 2);

  ctx1.fillStyle = 'blue';
  ctx1.fillRect(20, 20, 40, 30);

  ctx1.scale(2, 2);

  ctx1.fillStyle = 'green';
  ctx1.fillRect(20, 20, 40, 30);

  // 02. ROTATE ------------------------------------------------------------------

  const cv2 = this.document.getElementById('2');
  const ctx2 = cv2.getContext('2d');
  cv2.width = 600;
  cv2.height = 300;

  // context.rotate(rotationAmount) -> Rotate the canvas context
  // rotationAmount (radian): The angle amount of rotation

  const radian = Math.PI / 180; // 1 unit radian

  ctx2.fillStyle = 'green';
  ctx2.fillRect(320, 20, 200, 80);

  ctx2.rotate(40 * radian); // the context will rotate at its origin point. The origin is changable if needed

  ctx2.fillStyle = 'red';
  ctx2.fillRect(20, 20, 200, 80);

  // 03. TRANSLATE ------------------------------------------------------------------

  const cv3 = this.document.getElementById('3');
  const ctx3 = cv3.getContext('2d');
  cv3.width = 600;
  cv3.height = 300;

  // context.translate(x,y) -> moves the canvas and its origin to (x, y)

  ctx3.fillStyle = 'red';
  ctx3.fillRect(50, 50, 90, 90);

  ctx3.translate(200, 100);

  ctx3.fillStyle = 'red';
  ctx3.fillRect(50, 50, 90, 90);

  // 04. TRANSFORM ------------------------------------------------------------------

  const cv4 = this.document.getElementById('4');
  const ctx4 = cv4.getContext('2d');
  cv4.width = 600;
  cv4.height = 300;

  // context.transform(m11, m12, m21, m22, dx, dy) it will continue from previous transform if any
  // context.setTransform(m11, m12, m21, m22, dx, dy) it will reset the context entirely

  ctx4.fillStyle = 'blue';
  ctx4.fillRect(50, 50, 200, 100);

  ctx4.transform(1.5, 0, 0, 1.5, 0, 0);

  ctx4.fillStyle = 'green';
  ctx4.fillRect(50, 50, 200, 100);

  ctx4.resetTransform();

  ctx4.fillStyle = 'purple';
  ctx4.fillRect(150, 150, 200, 100);
};
