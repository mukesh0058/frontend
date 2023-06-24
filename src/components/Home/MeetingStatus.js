import React, { Fragment } from 'react';
import Back from '../../SVG/Back';
import Clock from '../../SVG/Clock';
import Calendar from '../../SVG/Calendar';
import { useNavigate } from 'react-router-dom';
import Danger from '../../SVG/Danger';
import Checked from '../../SVG/Checked';
import Warning from '../../SVG/Warning';

const dummyData = [
  {
    status: 'completed',
    fileName: 'file1.mp4',
    date: '24 Nov',
    time: '11:45 PM',
  },
  {
    status: 'warning',
    fileName: 'myvideo-3.mp4',
    date: '13 June',
    time: '9:45 PM',
  },
  {
    status: 'completed',
    fileName: 'file1(1).mp4',
    date: '13 June',
    time: '9:50 PM',
  },
  {
    status: 'error',
    fileName: 'english talk.mp4',
    date: '15 Feb',
    time: '00:45 AM',
  },
];

const MeetingStatus = () => {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate('/upload');
  };

  return (
    <Fragment>
      <div className="main-component">
        <div className="main-component-heading">
          <span className="back-button" onClick={backButtonHandler}>
            <Back />
          </span>
          <h3 className="meeting-status-heading mt-1 ms-3">Meeting Status</h3>
        </div>
        {dummyData &&
          dummyData.map((item) => (
            <>
              <div className="meets-container">
                <div className="meets-subcontainer">
                  <div className="meet-heading-container">
                    {/* <p className="meet-heading">Accelevents Team DSM</p> */}
                    {/* add badges with response condition */}

                    <h6>
                      <div
                        className={
                          item.status === 'completed'
                            ? 'success-badge'
                            : item.status === 'error'
                            ? 'danger-badge'
                            : item.status === 'warning'
                            ? 'warning-badge'
                            : ''
                        }>
                        {item.status === 'completed' ? (
                          <Checked />
                        ) : item.status === 'error' ? (
                          <Danger />
                        ) : item.status === 'warning' ? (
                          <Warning />
                        ) : (
                          ''
                        )}{' '}
                        {item.status === 'completed'
                          ? 'completed'
                          : item.status === 'error'
                          ? 'No one can  AIO Summarizer into the meeting'
                          : item.status === 'warning'
                          ? 'Meeting audio too short to process'
                          : ''}
                      </div>
                    </h6>
                    <div className="meet-details-container">
                      <span className="me-2">
                        <Calendar />
                      </span>
                      <p className="me-3">{item.date}</p>
                      <span className="me-2">
                        <Clock />
                      </span>
                      <p className="me-3">{item.time}</p>
                    </div>
                  </div>
                  <span>
                    Recorded file name <strong>{item.fileName}</strong>
                  </span>
                </div>
              </div>
            </>
          ))}
      </div>
    </Fragment>
  );
};

export default MeetingStatus;
