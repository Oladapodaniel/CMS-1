<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 mt-3">
          <h4 class="font-weight-bold">Compose New SMS</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2">
          <span>Send to : </span>
        </div>
        <div class="col-sm-10 form-group mb-0">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select the destination of the mail
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Contact list</a>
              <a class="dropdown-item" href="#">Phone number</a>
              <a class="dropdown-item" href="#">Membership database</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2">
          <span>Subject : </span>
        </div>
        <div class="col-sm-10 form-group mb-0">
          <input type="text" class="form-control input" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div id="app">
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-5">
        <div class="col-md-12 d-flex justify-content-end">
          <button class="btn send-btn px-4">Send</button>
          <button class="btn discard-btn ml-3 px-3">Discard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const editor = ClassicEditor;
    const editorData = ref("<p>Content of the editor.</p>");
    const editorConfig = {
      // The configuration of the editor.
      height: "800",
    };

    onMounted(() => console.log(editorData.value))

    return {
      editor,
      editorData,
      editorConfig,
    };
  },
};
</script>

<style scoped>
.input {
  outline: transparent !important;;
  border: none;
  background: transparent;
}

.send-btn,
.discard-btn {
  background: #136acd;
  border-radius: 111px;
  color: #fff;
  outline: transparent;
}

.discard-btn {
  background: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  color: #000;
}

.dropdown-toggle {
    width: 100%;
    text-align: left;
    outline: transparent !important;
}

.dropdown-menu {
    width: 98%;
}

.dropdown-toggle::after {
    margin-left: auto;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
    text-align: right !important;
    right: 10px;
    top: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.dropdown-toggle:focus {
  outline: none !important;
  border: none;
}

.inp:focus {
  outline: none;
  border: none;
}
</style>

<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>