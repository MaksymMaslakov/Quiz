import React from "react";
import { Modal, Button } from 'react-bootstrap'

const ModalWindow = (props) => {
    const { handleClose, show, invertIsFinished, history } = props;

    const handleConfirm = (invertIsFinished,history) => () => {
        invertIsFinished();
        history.push('/result');
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
              <Button variant="primary" onClick={handleConfirm(invertIsFinished,history)}>
                  Продолжить
              </Button>
          </Modal.Footer>
      </Modal>
  )
};

export default ModalWindow;