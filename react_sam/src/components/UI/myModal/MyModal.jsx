import React from 'react';
import cls from './MyModal.module.css';
const MyModal = (props) => {
  const { children, visible, setVisible } = props;

  const rootclassess = [cls.myModal];

  if (visible) {
    rootclassess.push(cls.active);
  }

  return (
    <div className={rootclassess.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={cls.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
