
class BookstoreService{
    getBooks() {
        return [
            {
                id: 1, 
                title: 'Production-Ready Microservices',
                author: 'Susan J.Fowler'
            },

            {
                id: 2, 
                title: 'Release in',
                author: 'Michael Nyggart'
            }
        ];
    }
}

export default BookstoreService;