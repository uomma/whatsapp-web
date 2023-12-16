const { createApp } = Vue;

createApp({
    data() {
        return {
            contactShown: 0,
            contactActive: 0,
            recived: true,
            sent: false,
            user: {
                nome: 'Marcello',
                img: 'halo4.png',

            }

            ,
            contacts: [
                {
                    nome: 'Luca',
                    img: 'img.jpg',
                    messages: [
                        {
                            text: 'ciao sono il primo messaggio di luca',
                            date: '10/12/2023',
                            time: '11:43',
                            status: 'recived'
                        },
                        {
                            text: 'io il secondo',
                            date: '10/12/2023',
                            time: '11:45',
                            status: 'recived'

                        },
                        {
                            text: 'buono a sapersi',
                            date: '10/12/2023',
                            time: '11:45',
                            status: 'sent'
                        },
                    ]
                },
                {
                    nome: 'Giovanni',
                    img: 'img.jpg',
                    messages: [

                        {
                            text: 'Sei andato a comprare il latte?',
                            date: '7/11/2023',
                            time: '17:57',
                            status: 'recived',

                        },
                        {
                            text: 'Ne ho bisogno per la torta',
                            date: '7/11/2023',
                            time: '17:58',
                            status: 'recived',
                        }

                    ]
                },
                {
                    nome: 'Aldo',
                    img: 'img.jpg',
                    messages: [
                        {
                            text: 'Mi aiuti con Vue.js?',
                            date: '30/10/2023',
                            time: '15:28', status: 'recived',
                        },
                        {
                            text: 'sarebbe bello',
                            date: '30/10/2023',
                            time: '15:29', status: 'sent',
                        }
                    ]
                },
                {
                    nome: 'Marco',
                    img: 'img.jpg',
                    messages: [
                        {
                            text: 'Ho vinto il pallone doro',
                            date: '27/02/2023',
                            time: '08:18', status: 'recived',
                        }, {
                            text: 'Ora faccio un sacco di soldi',
                            date: '27/02/2023',
                            time: '08:19', status: 'recived',
                        }, {
                            text: 'Con gli sponsor',
                            date: '27/02/2023',
                            time: '08:20', status: 'recived',
                        },{
                            text: 'Fiero di te amico mio',
                            date: '27/02/2023',
                            time: '08:24', status: 'sent',
                        }

                    ]
                },
                {
                    nome: 'Gabriele',
                    img: 'img.jpg',
                    messages: [
                        {
                            text: 'Hey, ti va di andare al sushi?',
                            date: '14/07/2023',
                            time: '12:07',
                            status: 'recived',
                        }, {
                            text: 'preferisco la pizza',
                            date: '14/07/2023',
                            time: '12:07',
                            status: 'sent',
                        },
                    ]
                },
            ],



        }

    },
    methods: {
        //devi definire che il contatto che vedi deve stampare solo uno e non tutti gli alementi di array

        /*         contactClass(index){
                    if(this.message[this.contactActive].status === 'recived'){
                        this.contactView.add(  'recived' )
                    }
                }, */

        //ISSUE : MI STAMPA TUTTI GLI ORARI INVECE CHE SOLO UTLIMO 
        //dico che l'obj visualizzato è uguale all' ultimo del array dei messaggi nella posizione -1 
    

        lastMessageTime(index) {
            let showedOne = this.contactView(index);
            console.log(showedOne);
            

            return lastMessage
        },

//ISSUE: VISUALIZZAZIONE ERRATA DEI MESSAGGI NEL MAIN DX PERCHE NON CE DISTINZIONE TRA SENT E RECIVED
//Assegnare status sent e recived ai messaggi nel  DONE
//definire una condizione percui se message.status === 'recived' allora verrà attaccata la :class=" recived"
//altimenti (else) :class="sent"

        contactView(index) {
            this.contactActive = index;//LETTERALMENTE QUESTO TI DICE INDEX
            console.log(this.contactActive);
            console.log(this.contactShown);
        },


    },

}).mount('#app');