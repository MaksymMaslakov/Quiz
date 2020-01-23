import React from 'react'

const { Provider: QuizContextProvider, Consumer: QuizContextConsumer  } = React.createContext();

export {
    QuizContextProvider,
    QuizContextConsumer
}