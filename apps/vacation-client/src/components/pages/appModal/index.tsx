
import { Button, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setModal } from '../../../store/reducers/modalReducer';


export default function AppModal() {

    const isOpen = useAppSelector(state => state.modal.isOpen)
    const message = useAppSelector(state => state?.modal.message)
    const header = useAppSelector(state => state?.modal.header)
    const dispatch = useAppDispatch();
    const closeFn = () => { dispatch(setModal(false)) }
    return (
    <Modal show={isOpen} onHide={closeFn}>
        <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeFn}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}

