const app = Vue.createApp({
    // template: '<h2>I am vue template</h2>'
    data() {
        return {
            books: [
                {
                    bookName: 'Little Mind',
                    author: 'Berlin'
                },
                {
                    bookName: 'Wings of Fire',
                    author: 'A. P. J. Abdul Kalam'
                },
                {
                    bookName: 'Robin woods',
                    author: 'Robin'
                }
            ]
        }
    },
    methods: {
        changeBook() {
            if (!this.bookChange) {
                this.bookName = "Keashava"
                this.bookChange = true
            } else {
                this.bookName = "Little Mind"
                this.bookChange = false
            }

        },
        toogleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount('#app')