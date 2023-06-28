import React, { useContext, useEffect } from 'react';
import { PopupContext } from '../../utils/ModalContenxt';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const LocalStorage = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(PopupContext);

  const clickHandler = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="LocalStorage">
      <button onClick={clickHandler}>Забыть моего пользователя</button>
    </div>
  );
};

export default LocalStorage;
