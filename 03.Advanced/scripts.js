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

  // 02. PATTERN ------------------------------------------------------------------

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

  // 03. LINEAR GRADIENT ------------------------------------------------------------------

  const cv3 = this.document.getElementById('3');
  const ctx3 = cv3.getContext('2d');
  cv3.width = 600;
  cv3.height = 300;

  const linearGradient = ctx3.createLinearGradient(70, 40, 280, 280); // coordinates are based on whole canvas
  linearGradient.addColorStop(0, "red"); // addColorStop(stop, color);
  linearGradient.addColorStop(0.25, "blue");
  linearGradient.addColorStop(0.5, "green");
  linearGradient.addColorStop(0.75, "orange");
  linearGradient.addColorStop(1, "white");

  ctx3.strokeStyle = "blue";
  ctx3.lineWidth = 4;
  ctx3.fillStyle = linearGradient;
  ctx3.rect(40, 40, 470, 240);
  ctx3.stroke();
  ctx3.fill();

  // 04. RADIAL GRADIENT ------------------------------------------------------------------

  const cv4 = this.document.getElementById('4');
  const ctx4 = cv4.getContext('2d');
  cv4.width = 600;
  cv4.height = 300;

  const radialGradient = ctx4.createRadialGradient(320, 100, 200, 320, 200, 20);
  radialGradient.addColorStop(0, "red");
  radialGradient.addColorStop(0.25, "blue");
  radialGradient.addColorStop(0.5, "green");
  radialGradient.addColorStop(0.75, "orange");
  radialGradient.addColorStop(1, "white");

  ctx4.strokeStyle = "blue";
  ctx4.lineWidth = 4;
  ctx4.fillStyle = radialGradient;
  ctx4.rect(40, 40, 400, 240);
  ctx4.stroke();
  ctx4.fill();
}
