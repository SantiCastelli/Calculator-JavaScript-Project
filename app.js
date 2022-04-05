//Wrap code in an IIFE
// (function(){
  
//   let screen = document.querySelector('.screen');
//   let buttons = document.querySelectorAll('.btn');
//   let clear = document.querySelector('.btn-clear');
//   let equal = document.querySelector('.btn-equal');
  
//   //retrieve data from numbers that are clicked
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//       let value = e.target.dataset.num;
//       screen.value += value;
//     })
//   });
  
//   equal.addEventListener('click', function(e){
//     if(screen.value === ''){
//       screen.value = 'Please Enter a Value';
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   })
  
//   clear.addEventListener('click', function(e){
//     screen.value = '';
//   })
 
// })(); //end IIFE
Vue.createApp({
  data() {
      return {
          count: 0,
          color: ''
      }
  },

  methods: {
      
  
  }
}).mount('#app')


{/* <script type="module">
import { createApp } from 'vue'

createApp({
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onInput(e) {
      this.text = e.target.value
    },
    evaluar(){
      this.text = eval(this.text)
    }
  }
}).mount('#app')
</script>

<div id="app">
  <input v-model="text"  placeholder="Type here">
  <button @click="evaluar">calcular</button>
  <p>{{ text }}</p>
</div> */}