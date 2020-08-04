import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import styles from './Gavatar.scss';

interface Props {
  email: string;
  size?: number;
}

export default ({ email, size = 300 }: Props) => {
  const [emailMd5, setEmailMd5] = useState('//www.gravatar.com/avatar/');

  useEffect(() => {
    setEmailMd5(`//www.gravatar.com/avatar/${md5(email)}?s=${size}`);
  }, [email]);

  return (
    <div className={styles.box}>
      <img alt="" src={emailMd5} />
    </div>
  );
};
