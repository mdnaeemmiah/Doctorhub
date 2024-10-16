import img from '../../../assets/img7.webp'

const Service = () => {
    return (
        <div className='md:flex  my-10'>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='flex-1 mx-10'>
                <h2 className='text-2xl font-bold'>Our Services</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    );
};

export default Service;