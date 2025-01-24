import { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  bottom: ${props => props.show ? '20px' : '-100px'};
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4444;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: bottom 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
      You are currently offline
    </PopupContainer>
  );
};

export default OnlineStatus;
