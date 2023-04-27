

BABYLON.ArcRotateCamera.prototype.spinTo = function (whichprop, targetval, speed) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', this, whichprop, speed, 120, this[whichprop], targetval, 0, ease);
}




BABYLON.Mesh.prototype.flipFaces = function(flipNormals) {
	var vertex_data = BABYLON.VertexData.ExtractFromMesh(this);
	
	if (flipNormals) {
		var normals = this.getVertexBuffer(BABYLON.VertexBuffer.NormalKind);
		for (var i = 0; i < vertex_data.normals.length; i++) {
			vertex_data.normals[i] *= -1;
		}
	}
	
	var temp;
	for (var i = 0; i < vertex_data.indices.length; i += 3) {
		// reassign indices
		temp = vertex_data.indices[i + 1];
		vertex_data.indices[i + 1] = vertex_data.indices[i + 2];
		vertex_data.indices[i + 2] = temp;
	}

	vertex_data.applyToMesh(this);
}
