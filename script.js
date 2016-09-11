/*
  Sketch class
  @param blocks
  @param block_color
*/
var Sketch = function (blocks, block_color) {
  this.blocks = blocks;
  this.block_color = block_color;
};

Sketch.prototype.add_blocks = function() {
  var block_size = (960 / this.blocks);
  var total_blocks = this.blocks * this.blocks;

  for (var i = 0; i < total_blocks; i++) {
    $('.sketchpad').append('<div class="block"></div>');
  }

  var width_height = block_size - 2;
  $('.block').css('width', width_height);
  $('.block').css('height', width_height);
};

Sketch.prototype.clear_blocks = function() {
  $('.block').each(function(){
    $(this).remove();
  })
};

Sketch.prototype.color_switch = function(block) {
  block.css('background-color',this.block_color);
};


$(function() {

  // Decalre an empty variable
  var my_sketch = null;

  // Create a new Sketch object
  $('.make_sketch').click(function(){

    // Clear sketchpad
    if (my_sketch){
      my_sketch.clear_blocks();
      my_sketch = null;
    }

    var num_of_blocks = $('.no_of_blocks').val();
    var color = $('.color').val();

    my_sketch = new Sketch(num_of_blocks, color);
    my_sketch.add_blocks();
  });

  // Even Binding on dynamically created elements example
  //$(staticAncestors).on(eventName, dynamicChild, function() {});
  $('.sketchpad').on('mouseover', '.block', function(){
    my_sketch.color_switch($(this));
  });

  $('.clear_sketch').click(function(){
    my_sketch.clear_blocks();
    my_sketch = null;
  });

});
