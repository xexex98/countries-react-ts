import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { Dark } from '../../svg/Dark';
import { Light } from '../../svg/Light';
import Wrapper from '../wrapper';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let mode = null;

  if (theme === 'light') {
    mode = (
      <>
        <Light />
        <p>Light mode</p>
      </>
    );
  } else {
    mode = (
      <>
        <Dark />
        <p>Dark mode</p>
      </>
    );
  }

  return (
    <div className="bg-elements-light dark:bg-elements-dark dark:text-texts-dark">
      <Wrapper>
        <div className="p-4 flex justify-between">
          <Link
            to={'/'}
            className="font-extrabold"
          >
            Where is the world?
          </Link>
          <div
            className="text-sm flex gap-2 cursor-pointer items-center"
            onClick={toggleTheme}
          >
            {mode}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
