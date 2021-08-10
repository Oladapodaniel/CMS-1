<template>
    <div>
        <SendMessage />
        <router-view></router-view>
    </div>
</template>
 
<script>

import SendMessage  from "../../views/communication/SendSms"
export default {
    components: { SendMessage   },
    setup() {
        
    },
}
</script>