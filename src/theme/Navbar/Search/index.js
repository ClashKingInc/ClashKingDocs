import React from 'react';
import clsx from 'clsx';

export default function NavbarSearch({children, className}) {
  return <div className={clsx('ck-navbar-search', className)}>{children}</div>;
}
