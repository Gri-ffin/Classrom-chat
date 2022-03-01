import Link from 'next/link';

export default function FooterSocialLinks({
  twitterIcon,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
}) {
  return (
    <div className='relative flex flex-row'>
      <Link href='https://twitter.com/discord'>{twitterIcon}</Link>
      <Link href='https://www.instagram.com/discord/'>{instagramIcon}</Link>
      <Link href='https://www.facebook.com/discord/'>{facebookIcon}</Link>
      <Link href='https://www.youtube.com/discord'>{youtubeIcon}</Link>
    </div>
  );
}
