import styles from './Button.module.scss';
import { ButtonProps } from '@/app/_utils/types/components';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ variation, children }: ButtonProps) => {
  const styleBtn = variation === 'clear' ? styles.clearBtn : styles.darkBtn;
  return <Button className={styleBtn}>{children}</Button>;
};

export default CustomButton;
