const { createApp } = Vue;

createApp({
    data() {
        return {
            newMessage: '',
            newSearch: '',
            contactActive: 0,
            recived: true,
            sent: false,
            user: {
                nome: 'Marcello',
                img: 'halo4.png',

            },
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
                        }, {
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

        contactView(index) {
            this.contactActive = index;//LETTERALMENTE QUESTO TI DICE INDEX
           
        },

        // x creare un orario funizona ma non riesco a pushare valore
        generateRandomTime(mins, hours) {
            mins = Math.floor((Math.random() * 59) + 1);
            hours = Math.floor((Math.random() * 23) + 1);
            console.log(newTime)
            return this.newTime = hours + ':' + mins
        },

        enterPress() {
            console.log('hai pressato enter');
            const newMessage = {
                date: '31/12/2023',
                time: '12:00',
                status: 'sent',
                text: this.newMessage
            }
            if (this.newMessage.trim() !== '') {
                this.contacts[this.contactActive].messages.push(newMessage)
                this.newMessage = '';
            }
            console.log(newMessage)

            setTimeout(() => {
                if (this.newMessage.trim() === '') {
                    console.log('sono passati 3 secondi')
                    this.rispostaCPU()
                }

            }, 3000);
        },

        rispostaCPU() {
            const autoReply = {
                date: '31/12/2023',
                time: '12:00',
                text: 'Ok',
                status: 'recived'
            }
            this.contacts[this.contactActive].messages.push(autoReply)
        },

        search() {
            if (this.newSearch.trim() !== '') {
                return this.contacts.filter(element => element.nome.toLowerCase().includes(this.newSearch.toLowerCase()));
            } else {
                return this.contacts
            }
        },
    },

}).mount('#app');