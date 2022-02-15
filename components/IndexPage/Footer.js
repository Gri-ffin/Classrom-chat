import Image from 'next/image';
import usaFlag from '../../public/assets/usa_flag.png';
import { facebookIcon } from '../Helpers/SocialMediaIcons/Facebook';
import { instagramIcon } from '../Helpers/SocialMediaIcons/Instagram';
import { twitterIcon } from '../Helpers/SocialMediaIcons/Twitter';
import { youtubeIcon } from '../Helpers/SocialMediaIcons/Youtube';

export const Footer = () => {
  return (
    <footer className='relative flex flex-row p-10 bg-black'>
      <div>
        <h3 className='text-blue-600 font-bold text-3xl'>IMAGINE A PLACE</h3>
        <p className='mt-2 text-white'>
          <Image src={usaFlag} alt='USA flag' width={30} height={20} /> English,
          USA
        </p>
        <div className='relative flex flex-row'>
          {twitterIcon}
          {instagramIcon}
          {facebookIcon}
          {youtubeIcon}
        </div>
      </div>
    </footer>
  );
};
