const { createApp } = Vue;

createApp({
    data() {
        return {
            users: [
                { nome: 'Luca', img: 'halo4.png' },
                {  nome: 'Giovanni', img:'img.jpg'}
            ],



        }

    },
    methods: {
 

    },

}).mount('#app');