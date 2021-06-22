<template>
    <div class="container-fluid">
        <div class="row">
            <div class="nav-side">
                <div :class="{ 'slide-nav' : menuLink, 'adjust-width' : !menuLink }">
                    <Nav />
                </div>
            </div>
            <div class="body-view">
                <router-view />
            </div>
        </div>
        <div class="toggle" @click="togglenavLinks">
            <i class="pi pi-bars"></i>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Nav from './Nav.vue'
export default {
    components: {
        Nav
    },
    setup () {
        const menuLink = ref(false)

        const togglenavLinks = () => {
            menuLink.value = !menuLink.value
            console.log(menuLink.value)
        }
        return {
            menuLink, togglenavLinks
        }
    }
}
</script>

<style scoped>
.adjust-width {
    width: 266px;
}

.nav-side {
    max-width: 25%;
}

.body-view {
    width: 75%;
    max-width: 1200px;
}

.toggle {
  display: none;
  width: 30px;
  text-align: center;
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 30px;
}

.slide-nav {
    margin-left: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 1036px) {
    .nav-side {
        max-width: 266px;
        position: absolute;
        z-index: 1;
    }

    .body-view {
        max-width: 100%;
    }

    .adjust-width {
        margin-left: -275px;
        z-index: 1;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .toggle {
        display: block;
    }
}

</style>