import Vue from 'vue'

Vue.component('jekyll-content', {
    props: ['content'],
    template: '<div id="content">{{ content }}</div>',
})