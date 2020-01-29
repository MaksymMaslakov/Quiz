import React from "react";
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { computeScore } from '../../utilits'
import { invertIsFinished, incrementScore } from "../../redux/actions";

import './modal-window.css';

const ModalWindow = (props) => {
    const { handleClose, show, userAnswers, questionList, incrementScore, invertIsFinished, history} = props;


    console.log(" Confirm: questionList: ", questionList );

    const handleConfirm = () => {
        console.log(" FinishTestButton: questionList: ", questionList );
        computeScore(userAnswers, questionList, incrementScore);
        invertIsFinished();
        history.push('/result');
        return 1;
    };

    return (
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
              <Modal.Title>Quiz</Modal.Title>
          </Modal.Header>
          <Modal.Body>Каждый не отвеченный ответ считается
              неправильным, Вы уверены что хотите продолжить?</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Закрыть
              </Button>
              <Button variant="primary"
                      onClick={handleConfirm}>
                  Продолжить
              </Button>
          </Modal.Footer>
      </Modal>
  )
};
const mapStateToProps = ({ questions: { questionList }, userAnswers}) => {
    return {
        questionList,
        userAnswers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch),
        incrementScore: incrementScore(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);