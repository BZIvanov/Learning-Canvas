window.onload = function () {
  // 01. LINES ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;

  ctx1.beginPath(); // reset the context state, it is important so the canvas can work correctly
  ctx1.strokeStyle = 'red';
  ctx1.lineWidth = 15;
  ctx1.lineCap = 'butt'; // defines the ending appearance of the line. Its default value, we can just skip if this is what we want
  ctx1.lineJoin = 'miter'; // defines the appearance of when lines are joining on each LineTo method. Default value
  ctx1.shadowColor = 'blue';
  ctx1.shadowOffsetX = 10;
  ctx1.shadowOffsetY = 10;
  ctx1.shadowBlur = 10;
  ctx1.moveTo(60, 80); // moveTo(x,y) -> starting point of the line
  ctx1.lineTo(160, 80); // lineTo(x,y) -> end point of the line
  ctx1.lineTo(80, 180);
  ctx1.lineTo(180, 180); // lineTo will keeps taking new points and the stroke method will apply them
  ctx1.stroke(); // draws the line

  ctx1.beginPath();
  ctx1.strokeStyle = 'blue';
  ctx1.lineWidth = 15;
  ctx1.lineCap = 'round'; // keep in mind this will make the line longer because the rounding will increase it with half of the line width
  ctx1.lineJoin = 'round';
  ctx1.shadowColor = 'yellow';
  ctx1.shadowOffsetX = 10;
  ctx1.shadowOffsetY = -10;
  ctx1.shadowBlur = 10;
  ctx1.moveTo(340, 80);
  ctx1.lineTo(240, 80);
  ctx1.lineTo(340, 180);
  ctx1.lineTo(240, 180);
  ctx1.stroke();

  ctx1.beginPath();
  ctx1.strokeStyle = 'green';
  ctx1.lineWidth = 15;
  ctx1.lineCap = 'square';
  ctx1.lineJoin = 'bevel';
  ctx1.shadowColor = 'red';
  ctx1.shadowOffsetX = 10;
  ctx1.shadowOffsetY = 10;
  ctx1.shadowBlur = 10;
  ctx1.moveTo(420, 80);
  ctx1.lineTo(520, 80);
  ctx1.lineTo(440, 180);
  ctx1.lineTo(540, 180);
  ctx1.stroke();

  // 02. CURVES ---------------------------------------------------------------------------

  const cv2 = this.document.getElementById('2');
  const ctx2 = cv2.getContext('2d');
  cv2.width = 600;
  cv2.height = 300;

  //circle
  const radian = Math.PI / 180; // we will use radians like this so we can multiply numbers between 0 and 360 for easier use
  ctx2.beginPath();
  ctx2.strokeStyle = 'blue';
  ctx2.lineWidth = 10;
  ctx2.arc(70, 70, 50, 0 * radian, 180 * radian, false); //arc(x, y, radius, start, end, clockWiseDirection)
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.fillStyle = 'orange';
  ctx2.arc(70, 170, 50, 0 * radian, 227 * radian, false);
  ctx2.fill();
  ctx2.stroke();

  // quadratic
  ctx2.beginPath();
  ctx2.strokeStyle = 'red';
  ctx2.lineWidth = 10;
  ctx2.moveTo(300, 150); // this will be the first point
  /*
    Workflow of the control point:
    1. It will draw 2 lines between the control point and start and end respectively
    2. In the middle of the 2 drawn lines another points will be placed and will be connected with each other.
    3. In the middle of the connection between the 2 points will be where the edge of the curve will be
  */
  ctx2.quadraticCurveTo(550, 10, 500, 150); // quadraticCurveTo(controlX,controlY,endX,endY) the end will be the last point and the first 2 parameters are our imaginary control
  ctx2.stroke();

  // bezier/cubic
  ctx2.beginPath();
  ctx2.strokeStyle = 'green';
  ctx2.lineWidth = 10;
  ctx2.moveTo(200, 250); // this will be the first point
  /*
    Workflow of the contol points:
    Same as quadratic, but with 2 control points
  */
  ctx2.bezierCurveTo(200, 10, 50, 150, 400, 250);
  ctx2.stroke();

  // 03. RECTANGLES ---------------------------------------------------------------------------

  const cv3 = this.document.getElementById('3');
  const ctx3 = cv3.getContext('2d');
  cv3.width = 600;
  cv3.height = 300;

  // with stroke and fill we can decide what effect we want to achieve
  ctx3.strokeStyle = 'red';
  ctx3.lineWidth = 11;
  ctx3.lineJoin = 'round';
  ctx3.fillStyle = 'blue';
  ctx3.rect(50, 100, 100, 100); // rect(xCoordinate, yCoordinate, width, height)
  ctx3.stroke();
  ctx3.fill();

  ctx3.fillStyle = 'green';
  ctx3.fillRect(200, 100, 100, 100);

  ctx3.lineWidth = 3;
  ctx3.strokeStyle = 'blue';
  ctx3.lineJoin = 'square';
  ctx3.strokeRect(350, 100, 100, 100);

  // 04. TEXTS ---------------------------------------------------------------

  const cv4 = this.document.getElementById('4');
  const ctx4 = cv4.getContext('2d');
  cv4.width = 600;
  cv4.height = 300;

  ctx4.font = '45px Verdana'; // font = "font-style font-weight font-size font-family"
  ctx4.textAlign = 'start';
  ctx4.textBaseline = 'middle'; // align on the vertical axis

  const fText = 'Fill Text on Canvas';
  ctx4.fillText(fText, 80, 50, 200); // fillText(text, xCoord, yCoord, maxWidth)

  ctx4.font = 'italic 700 45px monospace';
  const sText = 'Stroke Text on Canvas';
  ctx4.strokeText(sText, 80, 150); // strokeText(text, xCoord, yCoord, maxWidth)

  const text = 'This text will be shadowed!';
  ctx4.font = 'normal 700 24px times';
  ctx4.shadowColor = 'red';
  ctx4.shadowOffsetX = 5;
  ctx4.shadowOffsetY = 5;
  ctx4.shadowBlur = 4;
  ctx4.fillText(text, 80, 250);
};
