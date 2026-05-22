import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>

      {/* Announcement bar */}
      <div className='bg-black text-white text-sm py-5 overflow-hidden whitespace-nowrap'>
        <div className='animate-marquee inline-block'>
          Free delivery within Nairobi &nbsp;•&nbsp; 50% off for Kids &nbsp;•&nbsp; 50% off for Women &nbsp;•&nbsp;
          Free delivery within Nairobi &nbsp;•&nbsp; 50% off for Kids &nbsp;•&nbsp; 50% off for Women &nbsp;•&nbsp;
        </div>
      </div>

      {/* Hero */}
      <section className='flex items-center justify-between px-20 py-24 bg-black min-h-[80vh]'>

        {/* Left — text */}
        <div className='flex flex-col gap-6 max-w-lg'>
          <p className='text-sky-400 text-sm tracking-widest uppercase'>New season arrivals</p>
          <h1 className='text-6xl font-bold text-white leading-tight'>
            Dress the way you <span className='text-sky-400'>feel.</span>
          </h1>
          <p className='text-slate-300 text-lg'>
            Fresh drops every week. Shop the latest fashion trends for men and women.
          </p>
          <div className='flex items-center gap-4'>
            <Link to='/products' className='bg-sky-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-500 transition duration-300'>
              Shop Now
            </Link>
            <Link to='/collections' className='text-white border border-white/40 px-8 py-3 rounded-full hover:border-white transition duration-300'>
              Discover More
            </Link>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div className='w-96 h-96 bg-slate-700 rounded-2xl flex items-center justify-center'>
          <p className='text-slate-400 text-sm'>Hero Image</p>
        </div>

      </section>

    </div>
  )
}

export default Home