import { SidebarIcon } from './SideBarIcon';
import discordLogo from '../../public/assets/star.svg';
import icon from '../../public/assets/close_icon.svg';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import githubIcon from '../../public/assets/github_icon.svg';
import { codeSource } from '../Helpers/links';

export const SideBar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  function discordIconClickHandler() {
    router.push('/');
  }
  function githubIconClickHandler() {
    router.push(codeSource);
  }
  async function logoutIconClickHandler() {
    await logout();
  }

  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg'>
      <SidebarIcon
        icon={discordLogo}
        text='Front page'
        clickHandler={discordIconClickHandler}
      />
      <SidebarIcon
        icon={githubIcon}
        text='Code source'
        clickHandler={githubIconClickHandler}
      />
      <SidebarIcon
        icon={icon}
        text='Logout'
        clickHandler={logoutIconClickHandler}
      />
    </div>
  );
};
