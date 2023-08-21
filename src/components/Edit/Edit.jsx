import { faFileEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../Context/Context';

function Edit({data,updateItem}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(data.file);
  const [name, setName] = useState(data.name);
  const [detail, setDetail] = useState(data.detail);
  const [startDate, setStartDate] = useState(data.startDate);
  const [endDate, setEndDate] = useState(data.endDate);
  const fileInputRef = useRef(null);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  let id = data.id;
  let DataUpdate = { id, name, detail, startDate, endDate, file, status:"Waiting" };

  useEffect(() => {
    handleClose();
  }, [data]);

  let onSubmit = (e) => {
    e.preventDefault();
    updateItem(id, DataUpdate);
  };

  return (
    <>
      <Button variant="" data-feather="edit-3" onClick={handleShow}>
      <FontAwesomeIcon icon={faFileEdit} style={{color:"#A1A5B7"}}/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row mt-5" onSubmit={onSubmit}>
            <div className="col-md-12">
              <div className="form-outline mb-4">
                <label htmlFor="validationServer01" className="form-label">
                  Task name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="validationServer01"
                  className="form-control "
                  placeholder="Task name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                    <label className="form-label">Image For Task</label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={handleChange}
                      ref={fileInputRef}
                    />
              </div>
            </div>
            <div className="col-md-6 pt-3 ">
              <img src={file} alt="images" style={{width:"100%",height:"75px",objectFit:"contain",borderRadius:"20px"}} />
            </div>
            <div className="col-md-12">
              <label className="form-label">Task Details</label>
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <label className="form-label">Start date</label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Start Date"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">End date</label>
              <div className="form-outline mb-4">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="form-control"
                  placeholder="End date"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
