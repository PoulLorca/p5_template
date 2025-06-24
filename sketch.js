//P5 starter template

let img;
let layers = {};

function preload() {
  img = loadImage('assets/reference.png');
}

function setup() {
  createCanvas(1080, 1080);
  imageMode(CENTER);

  setupLayers();
}

function setupLayers() {
  layers = {
    background: { visible: true, opacity: 255 },
    reference: { visible: true, opacity: 255 },
    grid: { visible: true, opacity: 100 },
    drawing: { visible: true, opacity: 255 },
    ui: { visible: true, opacity: 255, showTooltip: true }
  };
}

function draw() {
  background(220, 100);

  //render layers
  renderLayer('background');
  renderLayer('reference');
  renderLayer('grid');
  renderLayer('drawing');
  renderLayer('ui');
}

function renderLayer(layerName){
  if (!layers[layerName] || !layers[layerName].visible) return;

  push();

  switch (layerName) {
    case 'background':
      drawBackgroundLayer();
      break;
    case 'reference':
      drawReferenceLayer();
      break;
    case 'grid':
      drawGrid();
      break;
    case 'drawing':
      drawDrawingLayer();
      break;
    case 'ui':
      drawUILayer();
      break;
  }

  pop();
}

function drawBackgroundLayer() {}

function drawReferenceLayer() {
  let scaleX = width / img.width;
  let scaleY = height / img.height;
  let scale = max(scaleX, scaleY);

  tint(255, layers.reference.opacity);
  image(img, width / 2, height / 2, img.width * scale, img.height * scale);
  noTint();
}

function drawGrid() {
  stroke(255, 0, 0, 100);
  strokeWeight(1);

  for (let x = 0; x < width; x += 100) {
    line(x, 0, x, height);
  }

  for (let y = 0; y < height; y += 100) {
    line(0, y, width, y);
  }

  strokeWeight(2);
  stroke(255, 0, 0, 150);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);  
}

function drawUILayer(){
  //Fixed coordinates
  fill(0, layers.ui.opacity);
  noStroke();

  textSize(16);
  text(`X: ${int(mouseX)}, Y: ${int(mouseY)}`, 10, 30);

  textSize(12);
  text("(0,0)", 5, 15);
  text(`(${width},0)`, width - 60, 15);
  text("(0," + height + ")", 5, height - 5);
  text(`(${width},${height})`, width - 80, height - 5);

  //Dynamic coordinates
  if (layers.ui.showTooltip){
    const textCoords = `X: ${int(mouseX)}, Y: ${int(mouseY)}`;
    const margin = 20;

    textSize(14);
    const textW = textWidth(textCoords) + 10;

    let xPos = mouseX + margin;
    let yPos = mouseY + margin;

    if (xPos + textW > width) {
      xPos = mouseX - textW - (margin / 2);
    }

    if (yPos + 20 > height) {
      yPos = mouseY - margin;
    }

    fill(0, 0, 0, 150);
    noStroke();
    rect(xPos - 5, yPos -15, textW, 20, 5);

    fill(255, layers.ui.opacity);
    text(textCoords, xPos, yPos);
  }
}

function toggleLayer(layerName) {
  if (layers[layerName]) {
    layers[layerName].visible = !layers[layerName].visible;
  }
}

function setLayerOpacity(layerName, opacity) {
  if (layers[layerName]) {
    layers[layerName].opacity = constrain(opacity, 0, 255);
  }
}

function toggleTooltip() {
  if (layers.ui.visible) {
    layers.ui.showTooltip = !layers.ui.showTooltip;
  }
}

function keyPressed() {
  if (layers.ui.visible) {
    layers.ui.showTooltip = !layers.ui.showTooltip;
  }
}

function keyPressed() {
  switch (key) {
    case 'r':
      toggleLayer('reference');
      break;
    case 'g':
      toggleLayer('grid');
      break;    
    case 't':
      toggleTooltip();
      break;
    case 'd':
      toggleLayer('drawing');
      break;
    case '1':
      setLayerOpacity('reference', 50);
      break;
    case '2':
      setLayerOpacity('reference', 100);
      break;
    case '3':
      setLayerOpacity('reference', 150);
      break;
  }  
}

// Placeholder for drawing layer
function drawDrawingLayer() {
  // This is where you would implement your drawing logic
  layer1();
}

// Drawinf layers
function layer1() {
  line(26, 1056, 108, 933);
  line(108, 933, 1013, 30);
}