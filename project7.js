var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var newsquare = document.createElementNS(namespace, "square")
 newrect.setAttribute("x", x)
 newrect.setAttribute("y", y)
 newrect.setAttribute("width", width)
 newrect.setAttribute("height", width)
 newrect.setAttribute("fill", color)
 screen.appendChild(newsquare)
}

function drawCircle(x, y, size, color) {
    var newcircle = document.createElementNS(namespace, "circle")
    newcircle.setAttribute("cx", x)
 newcircle.setAttribute("cy", y)
 newcircle.setAttribute("fill", color)
 newcircle.setAttribute("r", r)
 screen.appendChild(newcircle);
}

function drawTriangle(x, y, size, color) {
  var triangle = document.createElementNS(namespace, "polygon")
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e)
  shouldDraw = true
  var colorSelect = (document.getElementById("colorSelect").value)
  var shapeSelect = (document.getElementById("shapeSelect").value)
  var sizeSelect = (document.getElementById("sizeSelect").value)

})

document.addEventListener("mousemove", function(e) {
  var colorSelect = (document.getElementById("colorSelect").value)
  var shapeSelect = (document.getElementById("shapeSelect").value)
  var sizeSelect = (document.getElementById("sizeSelect").value)
})

document.addEventListener("mouseup", function(e) {
    var pt = transformPoint(e)
    shouldDraw = false

})
