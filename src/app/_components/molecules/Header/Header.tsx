import Link from 'next/link';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import React from 'react';

const Header = () => {
  return (
    <div className={`${styles.headerWrapper}`}>
      <Container>
        <div className="d-flex justify-content-between w-100">
          <div className={`my-auto ${styles.menuDesktop}`}>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
