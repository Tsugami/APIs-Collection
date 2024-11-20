export function Header() {
  return (
    <header className='px-2 py-4 flex justify-between w-full'>
      <h1 className='text-2xl text-neutral-100	font-extrabold'>Starch0</h1>
      <div className='flex justify-center items-center gap-6 font-normal text-neutral-100'>
        <a href='/archive' className='hover:underline'>
          Archive
        </a>
        <a href='/search' className='hover:underline'>
          Search
        </a>
        <a href='/tags' className='hover:underline'>
          Tags
        </a>
      </div>
    </header>
  );
}
