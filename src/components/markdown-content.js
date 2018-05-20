import Vue from 'vue'

var showdown = require('showdown')
var converter = new showdown.Converter()

Vue.component('markdown-content', {
    props: ['markdown'],
    data: function () {
        return {
            content: converter.makeHtml(this.markdown),
        }
    },
    template: '<div id="content" v-html="content"></div>',
})