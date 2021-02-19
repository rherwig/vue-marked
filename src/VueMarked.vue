<template>
    <div v-html="markup">
        <slot></slot>
    </div>
</template>

<script>
    import marked from 'marked';

    export default {
        data() {
            return {
                source: '',
            };
        },

        computed: {
            markup() {
                return marked(this.source);
            },
        },

        beforeMount() {
            if (!this.$slots.default) {
                return;
            }

            this.source = this.$slots.default.reduce((source, slot) => {
                return `${source}${slot.text.trim()}`;
            }, this.source);
        }
    };
</script>
