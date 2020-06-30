import Konva from "konva";

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height,
});
var layer = new Konva.Layer();
stage.add(layer);

// what is url of dragging element?
var itemURL = '';
if (!document) throw new Error("Not doc env");

document.getElementById('drag-items')?.addEventListener('dragstart', function (e) {
	//@ts-ignore
	itemURL = e.target?.src;
});

var con = stage.container();
con.addEventListener('dragover', function (e) {
	e.preventDefault(); // !important
});

con.addEventListener('drop', function (e) {
	e.preventDefault();
	// now we need to find pointer position
	// we can't use stage.getPointerPosition() here, because that event
	// is not registered by Konva.Stage
	// we can register it manually:
	stage.setPointersPositions(e);

	Konva.Image.fromURL(itemURL, function (image: Konva.Image) {
		layer.add(image);

		//@ts-ignore
		image.position(stage.getPointerPosition());
		image.draggable(true);

		layer.draw();
	});
});