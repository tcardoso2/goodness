/**
 * <World>
 * -----------------------------------------------------------------------------
 * A World.
 *
 * @type {Component}
 *
 * @slot default                     [world contents]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('world', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    //…
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function (){
    return {
      _something_for_future: true,
      window_height: window.innerHeight,
      flex: 'flex'
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <div v-bind:style="{ display: flex, height: window_height + 'px' }">
    <div class="world">
      <slot></slot>
    </div><!-- /.world -->
  </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function(){
    // range display
    function RangeDisplay( input ) {
      this.input = input;
      this.output = document.createElement('span');
      this.output.className = 'range-display';
      this.units = this.input.getAttribute('data-units') || '';
      // events
      var onChange = this.update.bind( this );
      this.input.addEventListener( 'change', onChange );
      this.input.addEventListener( 'input', onChange );
      // set initial output
      this.update();
      this.input.parentNode.appendChild( this.output );
    }
    
    RangeDisplay.prototype.update = function() {
      this.output.textContent = this.input.value + this.units;
    };
    
    /* ==================== init ==================== */
    
    // init RangeDisplays
    var ranges = document.querySelectorAll('input[type="range"]');
    for ( var i=0; i < ranges.length; i++ ) {
      new RangeDisplay( ranges[i] );
    }

    // perspective
    var stage = document.querySelector('.stage');
    var originX = 50;
    var originY = 50;

    var perspectiveRange = document.querySelector('.perspective-range');
    var perspectiveDisplay = perspectiveRange.parentNode.querySelector('.range-display');
    perspectiveRange.onchange = perspectiveRange.oninput = function() {
      var value = perspectiveRange.value + 'px';
      // set to none at max
      if(perspectiveDisplay){
        if ( value == '1000px' ) {
          value = 'none';
          perspectiveDisplay.textContent = 'none';
        }  
      }
      stage.style.perspective = value;
    };
    perspectiveRange.onchange();

    function updatePerspectiveOrigin() {
      stage.style.perspectiveOrigin = originX + '% ' + originY + '%';
    }

    // origin x
    var originXRange = document.querySelector('.origin-x-range');
    originXRange.onchange = originXRange.oninput = function() {
      originX = originXRange.value;
      updatePerspectiveOrigin();
    };
    originXRange.onchange();

    // origin y
    var originYRange = document.querySelector('.origin-y-range');
    originYRange.onchange = originYRange.oninput = function() {
      originY = originYRange.value;
      updatePerspectiveOrigin();
    };
    originYRange.onchange();
  },
  beforeDestroy: function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickWorld: async function() {
      console.log('Clicked world!');
    }

  }
});
