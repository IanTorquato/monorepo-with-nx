import { ReactComponent as NxLogo } from './public/nx-logo-white.svg';
import {styles} from './header.styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header style={styles.header}>
      <NxLogo width="75" height="50" style={{marginRight: '24px'}} />

      <h1>Frontend component: Hello!</h1>
    </header>
  );
}
