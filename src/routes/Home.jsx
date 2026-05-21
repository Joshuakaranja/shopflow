import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>

      {/* Announcement bar */}
      <div className=''>
        <div className=''>
          Free delivery within Nairobi &nbsp;&nbsp;•&nbsp;&nbsp; 
          50% off sales for Kids &nbsp;&nbsp;•&nbsp;&nbsp; 
          50% off sales for Women &nbsp;&nbsp;•&nbsp;&nbsp;
          Free delivery within Nairobi &nbsp;&nbsp;•&nbsp;&nbsp; 
          50% off sales for Kids &nbsp;&nbsp;•&nbsp;&nbsp; 
          50% off sales for Women &nbsp;&nbsp;•&nbsp;&nbsp;
        </div>
      </div>

      {/* Hero Section */}
      <section className=''>

        {/* Background images side by side */}
        <div className=''>
          <img
            src='https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800'
            alt='Gentleman in old money suit'
            className=''
          />
          <img
            src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
            alt='Lady in beach outfit'
            className=''
          />
        </div>

        {/* Dark overlay so text is readable */}
        <div className='absolute inset-0 bg-black/30' />

        {/* Bottom right content */}
        <div className='relative z-10 flex flex-col items-end gap-4'>
          <h1 className='text-white text-6xl font-light tracking-widest text-right'>
            SHOPFLOW
          </h1>
          <p className='text-white/70 text-sm tracking-widest text-right'>
            DRESS THE WAY YOU FEEL
          </p>
          <div className='flex items-center gap-4 mt-4'>
            <Link
              to='/collections'
              className='text-white text-sm tracking-widest border-b border-white/50 hover:border-white transition duration-300'
            >
              DISCOVER MORE
            </Link>
            <Link
              to='/products'
              className='bg-white text-black text-sm tracking-widest px-8 py-3 hover:bg-slate-100 transition duration-300'
            >
              SHOP NOW
            </Link>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home