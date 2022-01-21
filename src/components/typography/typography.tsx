import styles from './typography.module.css';

/* 
  TODO:
    1. Look into additional tags like article and their heirarchy in relation to custom typography component
    2. Add ability to pass down custom inline styles
*/

type VariantTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p1'
  | 'p2'
  | 'p3';

interface TypographyPropsType {
  children?: React.ReactNode;
  variant: VariantTypes;
  bold?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  // className?: '';
  // color?: '';
}

const Typography = (props: TypographyPropsType) => {
  const {
    children = 'The quick',
    variant,
    bold = false,
    textAlign = 'left',
    // className,
    // color,
  } = props;

  if (variant.includes('p')) {
    const Tag = 'p' as keyof JSX.IntrinsicElements;

    return (
      <Tag
        className={`${styles[variant]} ${styles[textAlign]}`}
        style={bold ? { fontWeight: '700' } : {}}
      >
        {children}
      </Tag>
    );
  } else {
    const Tag = variant as keyof JSX.IntrinsicElements;

    return <Tag className={`${styles[textAlign]}`}>{children}</Tag>;
  }
};

export { Typography };
