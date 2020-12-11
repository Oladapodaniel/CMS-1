 <template>
   <div id="app" @click="showLog">
     <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <editor
        
       api-key="sve6fdpzaaqfv14cccrh39r65unk06wm82unxafo51mn8b0q"
       :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
     />
     <div class="my-4">
         <textarea name="editor1" v-model="test" id="editor1" @input="showLog"></textarea>
     </div>
   </div>
   
 </template>

 <script>
import Editor from '@tinymce/tinymce-vue'

 export default {
   name: 'app',
   components: {
     'editor': Editor
   },

   data() {
       return {
           test: '',
       }
   },

   methods: {
       showLog(e) {
           console.log(this.test)
       }
   },

   mounted() {
       CKEDITOR.replace( 'editor1' );   
   }
 }
 </script>
