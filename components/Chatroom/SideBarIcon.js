import Image from 'next/image';

export const SidebarIcon = ({ icon, text, clickHandler }) => {
  return (
    <div
      className='sidebar-icon group'
      onClick={() => {
        clickHandler();
      }}
    >
      <Image src={icon} alt='icon' width={40} height={40} />
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  );
};
