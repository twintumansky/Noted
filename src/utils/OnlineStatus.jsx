import { useState, useEffect } from 'react';
import { Link01Icon, Link04Icon } from 'hugeicons-react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: ${props => props.show ? '20px' : '-100px'};
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(66, 92, 100, 0.5);
  font-weight: 300;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: bottom 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
  transform: translateY(2px); // Adjust this value to fine-tune alignment
`;

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowPopup(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowPopup(true);
      // Hide popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <PopupContainer show={showPopup}>
      <div>
        <IconWrapper>
          <Link01Icon classNmae='link-icon' size={17} />
        </IconWrapper>      
        <span>&nbsp;You are currently offline !!</span>
      </div>
    </PopupContainer>
  );
};

export default OnlineStatus;
