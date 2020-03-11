window.onload = function() {
  // 01. IMAGES ------------------------------------------------------------------

  const cv1 = this.document.getElementById('1');
  const ctx1 = cv1.getContext('2d');
  cv1.width = 600;
  cv1.height = 300;

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

  const img = new Image();
  img.src = "regularshow.png";

  // images have to be loaded with onload event
  img.onload = function () {
    ctx1.drawImage(img, 20, 100, 150, 250, 30, 30, 200, 300);
    ctx1.drawImage(img, 300, 50);
  };

  // 02. FILTERING

  const cv2 = this.document.getElementById('2');
  const ctx2 = cv2.getContext('2d');
  cv2.width = 600;
  cv2.height = 300;

  const amsterdamImage = new Image();
  amsterdamImage.src = 'amsterdam.jpg';
  amsterdamImage.setAttribute('crossOrigin', '');

  amsterdamImage.onload = function () {
    ctx2.drawImage(amsterdamImage, 20, 35, 200, 200); // original image
    ctx2.drawImage(amsterdamImage, 320, 35, 200, 200);
    
    const imageData = ctx2.getImageData(320, 35, 550, 366); // getImageData() Returns an ImagaData object that copies the pixel data for the specified rectangle on a canvas
    for (let i = 0; i < imageData.data.length; i += 4) {
      const average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      imageData.data[i] = average;         // Red
      imageData.data[i + 1] = average;     // Green
      imageData.data[i + 2] = average;     // Blue
      //imageData.data[i + 3] = 240;   // Alpha
    }

    ctx2.putImageData(imageData, 320, 35); // putImageData() Puts the image data (from a specified ImageData object) back onto the canvas
  };
}