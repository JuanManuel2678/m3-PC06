export const Article = ({img, num, title, text}) => {
  return (
    <article className='flex h-[179px] px-4 py-2 md:flex-grow md:w-[343px]'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="" />
      </div>
      <div className='pl-6'>
        <p className='text-Grayish-blue text-3xl mb-[18px] font-bold'>{num}</p>
        <h2 className='font-bold mb-[18px] hover:text-Soft-orange cursor-pointer'>{title}</h2>
        <p className='text-Dark-grayish-blue text-[14px]'>{text}</p>
      </div>
    </article>
  );
};


