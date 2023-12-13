const { createApp } = Vue;

createApp({
    data() {
        return {
            user:{
                nome:'Marcello', 
                img: '',

            }

            ,
            contacts: [
                { nome: 'Luca', img: 'halo4.png' },
                {  nome: 'Giovanni', img:'img.jpg'}
            ],



        }

    },
    methods: {
 

    },

}).mount('#app');