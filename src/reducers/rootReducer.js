const initState = {
      posts: [
            {
                  id: 1,
                  title: 'je suis le premier article',
                  body: 'Voici le centenu de notre premier article, aha'
            },
            {
                  id: 2,
                  title: 'je suis le deuxième article',
                  body: 'Voici le centenu de notre deuxième article, aha'
            },
            {
                  id: 3,
                  title: 'je suis le Troisieme article',
                  body: 'Voici le centenu de notre Troisieme article, aha'
            }
      ]
}

const rootReducer = (state = initState, action) => {
      return state
}
export default rootReducer