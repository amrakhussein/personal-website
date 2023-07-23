export default function Copyright() {
  return (
    <section className='pl-2 text-sm'>
      <article className=''>
        <p>
          &copy; 2023 Amr Abdelkamel - <span className=''>made with love</span>
          <span className='ml-1 inline-block h-4 w-4 pt-1 text-important'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </span>
        </p>
        <p>| Full-Stack Developer</p>
      </article>
    </section>
  );
}
