import Link from 'next/link';

export default function DesktopNavBrand() {
  return (
    <h1 className='pt-[0.18rem] pr-4 text-3xl font-extrabold dark:text-slate-50'>
      <Link href='/'>
        <a>
          <strong>amromoorie</strong>
          <span className='text-primary dark:text-important'>.com</span>
        </a>
      </Link>
      {/* <span className='border-2 border-gray-300 mx-4 rounded-full'></span> */}
    </h1>
  );
}
