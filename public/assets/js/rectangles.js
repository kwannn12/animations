
var radiusRect = 10;
var fromRect = new Point(view.size.width/2 - radiusRect, view.size.height/2 - 20);
var toRect = new Point(view.size.width/2 + radiusRect, view.size.height/2 + 20);
var rect = new Path.Rectangle(fromRect, toRect);
rect.fillColor = 'powderblue';

rectangles = [];
rectangles.fillColor = 'powderblue';
count = 5;

var newFrom = new Point(fromRect.x, fromRect.y);
var newTo = new Point(toRect.x, toRect.y);

for (var i = 0; i < count; i++) {
  newFrom = new Point(newFrom.x + 20, newFrom.y - 20);
  newTo = new Point(newTo.x + 20, newTo.y + 20);
  rectangles[i] = new Path.Rectangle(newFrom, newTo);
  rectangles[i].fillColor = 'blue';
  console.log(newFrom, newTo);
  rectangles[i].grow = true;
}
var grow = true;



function onFrame(event) {
  if(grow) {
    rect.scale(1,1.01);
  } else {
    rect.scale(1,0.99);
  }

  if(rect.area > view.size.height*radiusRect) {
    grow = false;
  }

  if(rect.area < 2*radiusRect*40) {
    grow = true;
  }
  //rect.scale(1, 0.99);
  //console.log(rect.area, view.size.height*radiusRect, 2*radiusRect*40, grow);

  rectangles.forEach(function(rectangle) {
    if(rectangle.area > view.size.height*radiusRect) {
      rectangle.grow = false;
    }

    if(rectangle.area < 2*radiusRect*40) {
      rectangle.grow = true;
    }

    if(rectangle.grow) {
      rectangle.scale(1,1.01);
    } else {
      rectangle.scale(1,0.99);
    }
  });





}

