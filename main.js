const { createApp } = Vue;

createApp({
    data() {
        return {
            user: {
                nome: 'Marcello',
                img: 'halo4.png',

            }

            ,
            contacts: [
                {
                    nome: 'Luca',
                    img: 'halo4.png',
                    messages: [
                        { text: 'ciao sono il primo messaggio di luca' },
                        { text: 'io il secondo' },
                        { date: '10/12/2023' },
                        { time: '11:45' }
                    ]
                },
                {
                    nome: 'Giovanni',
                    img: 'img.jpg',
                    messages: [
                        { text: 'Sei andato a comprare il latte?' },
                        { text: 'Ne ho bisogno per la torta' },
                        { date: '7/11/2023' },
                        { time: '17:58' }
                    ]
                },
                {
                    nome: 'Aldo',
                    img: 'img.jpg',
                    messages: [
                        { text: 'Mi aiuti con Vue.js?' },
                        { text: 'sarebbe bello' },
                        { date: '30/10/2023' },
                        { time: '15:29' }
                    ]
                }, {
                    nome: 'Marco',
                    img: 'img.jpg',
                    messages: [
                        { text: 'Ho vinto il pallone doro' },
                        { text: 'Ora faccio un sacco di soldi' }, 
                        { text: 'Con gli sponsor' },
                        { date: '27/02/2023' },
                        { time: '08:30' }
                    ]
                }, {
                    nome: 'Gabriele',
                    img: 'img.jpg',
                    messages: [
                        { text: 'Hey, ti va di andare al sushi?' },
                        { text: 'E sfondarci di nigiri??' },
                        { date: '14/07/2023' },
                        { time: '12:07' }
                    ]
                },
            ],



        }

    },
    methods: {



    },

}).mount('#app');