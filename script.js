var Sketch = function (blocks = 16, color = 'Red') {};

Sketch.prototype.add_blocks = function() {

};

Sketch.prototype.clear_blocks = function() {
};

Sketch.prototype.color_switch = function() {
};

Sketch.prototype.get_blocks = function () {
  return this.blocks;
};

Sketch.prototype.get_color = function() {
  return this.color;
}

var my_sketch = new Sketch();
console.log(my_sketch.get_blocks());
