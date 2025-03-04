import img from '../../../assets/images.jpg'
import img1 from '../../../assets/img5.webp'

const Banner = () => {
    return (
        <div
            className="hero h-[750px]"
            style={{
                backgroundImage: `url('${img}')`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your Best Medical <br /> Help Center</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-secondary bg-orange-600">All Service</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;