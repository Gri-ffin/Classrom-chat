import { SidebarIcon } from './SideBarIcon';
import discordLogo from '../../public/assets/discord_mini_icon.svg';
import nitroIcon from '../../public/assets/nitro_icon.svg';
import plusIcon from '../../public/assets/plus_icon.svg';
import dmIcon from '../../public/assets/dm_icon.svg';
import icon from '../../public/assets/close_icon.svg';
import { useRouter } from 'next/router';

export const SideBar = () => {
  const router = useRouter();
  function discordIconClickHandler() {
    router.push('/');
  }

  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg'>
      <SidebarIcon
        icon={discordLogo}
        text='Discord'
        clickHandler={discordIconClickHandler}
      />
      <SidebarIcon icon={nitroIcon} text='Nitro' />
      <SidebarIcon icon={plusIcon} text='Add Friend' />
      <SidebarIcon icon={dmIcon} text='Direct message' />
      <SidebarIcon icon={icon} text='Logout' />
    </div>
  );
};
