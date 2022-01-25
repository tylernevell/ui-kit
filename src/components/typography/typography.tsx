import React from 'react';
import styles from './typography.module.css';

/* 
  TODO:
    1. Look into additional tags like article and their heirarchy in relation to custom typography component
    2. DONE - Add ability to pass down custom inline styles 
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
  style?: React.CSSProperties;
  // className?: '';
  // color?: '';
}

const Typography = (props: TypographyPropsType) => {
  const {
    children = 'The quick',
    variant,
    bold = false,
    textAlign = 'left',
    style,
  } = props;

  if (variant.includes('p')) {
    const Tag = 'p' as keyof JSX.IntrinsicElements;

    return (
      <Tag
        className={`${styles[variant]} ${styles[textAlign]}`}
        style={Object.assign({}, { fontWeight: bold ? '700' : '' }, style)}
      >
        {children}
      </Tag>
    );
  } else {
    const Tag = variant as keyof JSX.IntrinsicElements;

    return (
      <Tag className={`${styles[textAlign]}`} style={style}>
        {children}
      </Tag>
    );
  }
};

export { Typography };
