<template>
    <select class="input-sm" :name="name" style="width: 200px">
        <slot></slot>
    </select>
</template>

<script>
    import select2 from 'select2'
    import $ from 'jquery'
    export default {
        props: ["options", "value", "name"],

        data() {
            return {
                msg: "Hello",
            }
        },

        mounted() {
            console.log();
            $('.input-sm').select2();
            console.log($);
            console.log(select2);
            let vm = this;
            $(this.$el)
            .select2({theme: 'bootstrap', data: this.options})
            .val(this.value)
            .trigger('change')
            .on('change', function() {
                vm.$emit('input', this.value)
            })
        },

        watch: {
            value: function(value) {
                $(this.$el).val(value).trigger('change');
            },
            options: function(options) {
                $(this.$el).select2({data: options})
            }
        }

        // mounted: function() {
        //   var vm = this;
        //   $(this.$el)
        //     // init select2
        //     .select2({ data: this.options })
        //     .val(this.value)
        //     .trigger("change")
        //     // emit event on change.
        //     .on("change", function() {
        //       vm.$emit("input", this.value);
        //     });
        // },
    }
</script>

<style lang="scss" scoped>

</style>