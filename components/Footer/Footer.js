import { Aside } from './Aside';
import { FooterFirstLinks } from './FooterFirstLinks';
import { FooterFourthLinks } from './FooterFourthLinks';
import { FooterThirdLinks } from './FooterThirdLinks';
import { FooterSecondLinks } from './FooterSecondLinks';
import Image from 'next/image';
import usaFlag from '../../public/images/usa_flag.png';
import { facebookIcon } from '../Helpers/SocialMediaIcons/Facebook';
import { instagramIcon } from '../Helpers/SocialMediaIcons/Instagram';
import { twitterIcon } from '../Helpers/SocialMediaIcons/Twitter';
import { youtubeIcon } from '../Helpers/SocialMediaIcons/Youtube';
import { Fragment } from 'react';
import discordBlackLogo from '../../public/assets/discord_logo.svg';
import FooterSocialLinks from '../Footer/FooterSocialLinks';

export const Footer = () => {
  return (
    <Fragment>
      <footer className='relative md:flex flex-row p-1 justify-around bg-black pt-5 hidden'>
        <div>
          <h3 className='text-blue-600 font-bold text-3xl'>IMAGINE A PLACE</h3>
          <p className='mt-2 text-white'>
            <Image src={usaFlag} alt='USA flag' width={30} height={20} />{' '}
            English, USA
          </p>
          <FooterSocialLinks
            twitterIcon={twitterIcon}
            instagramIcon={instagramIcon}
            facebookIcon={facebookIcon}
            youtubeIcon={youtubeIcon}
          />
        </div>
        <div>
          <FooterFirstLinks />
        </div>
        <div>
          <FooterSecondLinks />
        </div>
        <div>
          <FooterThirdLinks />
        </div>
        <div>
          <FooterFourthLinks />
        </div>
      </footer>
      <Aside discordBlackLogo={discordBlackLogo} />
    </Fragment>
  );
};
