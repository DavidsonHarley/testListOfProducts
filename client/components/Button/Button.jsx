import classNames from 'classnames';
import Link from 'next/link';
import styles from './button.module.css';

function Button({
  children, variant = 'default', size = 'medium', block = false, disabled = false, href = null, onClick = null,
}) {
  const buttonClasses = classNames(styles.button, {
    [styles.default]: variant === 'default',
    [styles.success]: variant === 'success',
    [styles.danger]: variant === 'danger',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.block]: block,
  });

  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClasses} onClick={onClick} disabled={disabled}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
