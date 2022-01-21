import styles from './shadow.module.css';

interface TypographyPropsType {
  children?: React.ReactNode;
  shadowType: 'default' | 'error' | 'success' | 'hover' | 'active';
}

const Shadow = (props: TypographyPropsType) => {
  const { children, shadowType } = props;

  return <div className={styles[shadowType]}>{children}</div>;
};

export { Shadow };
