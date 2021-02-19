<template>
  <div class="container-fluid main col-lg-12 col-sm-12">
    <h5>Modal</h5>
    <Button label="Show" icon="pi pi-external-link" @click="openModal" />
    <Dialog
      header="Header"
      v-model:visible="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <p class="p-m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          @click="closeModal"
          class="p-button-text"
        />
        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import { ref } from "vue";

export default {
  components: {
    Dialog,
  },
  setup() {
    const displayModal = ref(false);

    const openModal = () => {
      displayModal.value = !displayModal.value;
    };

    return {
      openModal,
      displayModal,
    };
  },
};
</script>

<style scoped>
* {
  font-size: 62.5%;
}
.main {
  background: #0f529f;
  border-radius: 1rem;
  margin-top: 3rem;
  height: 40rem;
  overflow: auto;
}

.child {
  background: rgb(255, 251, 251);
  margin: 6rem auto;
  border-radius: 0.8rem;
  position: relative;
  height: 50rem;
}

.font {
  font-size: 12px;
  font-weight: bolder;
  margin-top: -0.5rem;
}

.font-sm {
  font-size: 10px;
  font-weight: 600;
  color: #a6a8aa;
}

.font-s {
  font-size: 8px;
}

.f1 {
  margin-top: 1rem;
  margin-bottom: -2rem;
}

.img {
  width: 100%;
  border-radius: 0.5rem;
}

.fonts {
  font-size: 16px;
  font-weight: 600;
}
.fontsi {
  font-size: 12px;
}
.fontsii {
  font-size: 0.55rem;
}
.mt {
  margin-top: -2.5rem;
}

.qrcode {
  font-size: 3.5rem;
  font-weight: 550;
  margin-top: -2.9rem;
}

/* .button {
  padding: 8px 10px;
  border: none;
  border-radius: 22px;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
} */

.button:hover {
  cursor: pointer;
}

.more-btn {
  /* background: #dde2e6; */
  width: 3rem;
  background: none;
  outline: black;
  color: black;
}

.check-out-btn {
  background: #136acd;
  color: #fff;
}

@media screen and (min-width: 500px) {
  .main {
    background: #0f529f;
    border-radius: 1rem;
    margin-top: 3rem;
    height: 40rem;
    width: 24rem;
    overflow: hidden;
  }

  .child {
    background: rgb(255, 251, 251);
    margin: 4rem auto;
    border-radius: 0.8rem;
    position: relative;
    height: 30rem;
    width: 20rem;
  }
}
</style>