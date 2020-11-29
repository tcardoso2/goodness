/**
 * <Floor>
 * -----------------------------------------------------------------------------
 * A Floor, which is inside a World and can have many 3D tiles in it.
 *
 * @type {Component}
 *
 * @slot default                     [Floor tiles]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('floor', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'distance'
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function (){
    return {
      window_height: window.innerHeight*0.8,
      flex: 'flex',
      transformValue: 'rotateX(-90deg) translateZ(' + (this.distance ? this.distance : 10) +'px)'
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
  <div class="floor" v-bind:style="{ display: flex, height: window_height + 'px'}">
      <slot></slot>
  </div><!-- /.floor -->
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function(){
    $(this.$el).css({
      'transform': this.transformValue,
      '-webkit-transform': this.transformValue
    });
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

    var floor = document.querySelector('.floor');

    //floor distance
    var floorDistanceRange = document.querySelector('.floor-distance-range');
    var floorDistanceDisplay = floorDistanceRange.parentNode.querySelector('.range-display');
    floorDistanceRange.onchange = floorDistanceRange.oninput = function() {
      var value = floorDistanceRange.value + 'px';
      // set to none at max
      if(floorDistanceDisplay){
        if ( value == '1000px' ) {
          value = 'none';
          floorDistanceDisplay.textContent = 'none';
        }  
      }
      //For now, hard-coding the transform on the client-side
      floor.style.transform = `rotateX(-90deg) translateZ(${value}x)`;
      floor.style.webkitTransform = `rotateX(-90deg) translateZ(${value}x)`;
    };
    floorDistanceRange.onchange();

  },
  beforeDestroy: function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    click: async function(){
      this.$emit('click');
      alert('Clicked on floor!')
    },

  }
});
