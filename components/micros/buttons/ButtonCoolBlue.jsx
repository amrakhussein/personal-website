export default function ButtonCoolBlue({ children, toggleBtn, setToggleBtn }) {
  return (
    <button
      className='flex items-center px-8 py-2 cursor-pointerr rounded-full tracking-widest bg-accent text-secondary hover:bg-primary hover:text-white'
      onClick={() => setToggleBtn(!toggleBtn)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
      <span className='pl-3 pb-1'>{children}</span>
    </button>
  )
}