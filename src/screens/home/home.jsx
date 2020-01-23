import React, { Fragment } from "react";

import Header from "../../components/header";
import QuestionList from "./question-list";

const Home = () => {
    return(
        <Fragment>
            <Header/>
            <QuestionList/>
        </Fragment>
    )
};

export default Home;
