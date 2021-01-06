<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 mt-3 offset-3 offset-md-0">
          <h4 class="font-weight-bold">Compose New Email</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-3 col-lg-2 align-self-center">
          <span>Send to : </span>
        </div>
        <div class="col-9 col-lg-10 form-group mb-0">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ destinationSelectionBtnText }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                v-for="(destination, index) in possibleEmailDestinations"
                :key="index"
                @click="emailDestinationSelected(index)"
                >{{ destination }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-12 d-flex flex-wrap"
          v-if="selectedEmailDestinationType === 0"
        >
          <span
            class="email-destination m-1"
            v-for="(providedEmail, index) in userProvidedEmails"
            :key="index"
          >
            <span>{{ providedEmail.email }}</span>
            <span class="ml-2 remove-email" @click="removeEmail(index)">x</span>
          </span>
          <input
            type="text"
            class="border-0 inp pl-2"
            placeholder="type mail here"
            @keyup.enter="addEmail"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-3 col-lg-2 align-self-center">
          <span>Subject : </span>
        </div>
        <div class="col-9 col-lg-10 form-group mb-0">
          <input type="text" class="input" v-model="emailObj.subject" />
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

      <div class="row my-3">
        <div class="col-md-12 form-group">
          <input
            type="checkbox"
            v-model="emailObj.ispersonalized"
            class="mr-3"
          />
          <span>Personal Message</span>
        </div>
        <div class="col-md-12">
          <span class="hint"
            >Insert #name# any where you want the contact name to appear in the
            message, it will be replaced by the actual name of the member when
            sending the message.</span
          >
        </div>
      </div>

      <div class="row mt-4 mb-5">
        <div class="col-md-12 d-flex justify-content-end">
          <button class="btn send-btn px-4" @click="sendEmail">Send</button>
          <button class="btn discard-btn ml-3 px-3">Discard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { onMounted, ref } from "vue";
import axios from "@/gateway/backendapi";

export default {
  setup() {
    const editor = ClassicEditor;
    const editorData = ref("<p>Content of the editor.</p>");
    const editorConfig = {
      // The configuration of the editor.
      height: "800",
    };

    const x = {
      subject: "string",
      message: "string",
      ispersonalized: true,
      contacts: [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          email: "string",
          phone: "string",
          status: "string",
          otherInfo: "string",
        },
      ],
      groupedContacts: ["string"],
      toContacts: "string",
      toOthers: "string",
      isoCode: "string",
      category: "string",
      emailAddress: "string",
      emailDisplayName: "string",
      gateWayToUse: "string",
    };

    const emailObj = ref({
      toContacts: "string",
      toOthers: "string",
      isoCode: "string",
      category: "string",
      emailAddress: "string",
      emailDisplayName: "string",
      gateWayToUse: "string",
    });
    const userProvidedEmails = ref([]);
    const selectedEmailDestinationType = ref(null);
    const possibleEmailDestinations = [
      "Email",
      "To person from membership database",
      "Grouped contacts from database",
    ];
    const destinationSelectionBtnText = ref(
      "Select the destination for the mail"
    );
    const emailDestinationSelected = (indexOfSelectedDestination) => {
      selectedEmailDestinationType.value = indexOfSelectedDestination;
      destinationSelectionBtnText.value =
        possibleEmailDestinations[indexOfSelectedDestination];
    };
    const addEmail = (e) => {
      userProvidedEmails.value.push({ email: e.target.value });
      e.target.value = "";
    };
    const removeEmail = (indexOfEmailToRemove) =>
      userProvidedEmails.value.splice(indexOfEmailToRemove, 1);

    const sendEmail = async () => {
      emailObj.value.message = editorData.value;
      emailObj.value.contacts = userProvidedEmails.value;
      console.log(emailObj.value, "EmailObj");

      try {
        const resp = await axios.post(
          "/api/Messaging/sendEmail",
          x
        );
        console.log(resp, "send email response");
      } catch (err) {
        console.log(err.response, "send email error");
      }
    };

    onMounted(() => console.log(editorData.value));

    return {
      editor,
      editorData,
      editorConfig,
      possibleEmailDestinations,
      destinationSelectionBtnText,
      userProvidedEmails,
      emailDestinationSelected,
      addEmail,
      removeEmail,
      selectedEmailDestinationType,
      emailObj,
      sendEmail,
    };
  },
};
</script>

<style scoped>
* {
  color: #02172e;
}

.hint {
  font-size: 12px;
}

.input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  /* transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; */
}

input:focus {
  outline: none;
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
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
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

.email-destination {
  padding: 0.1rem 0.4rem;
  border: 1px solid #02172e30;
  border-radius: 30px;
}

.remove-email {
  color: #a9adb1;
  font-weight: bold;
}

.remove-email:hover {
  cursor: pointer;
}
</style>

<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>