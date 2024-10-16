import img from '../../assets/img2.webp'

const SelectSide = () => {
    return (
        <div className='grid md:grid-cols-3 gap-7'>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Orthodontics</h2>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Orthodontics</h2>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Orthodontics</h2>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Orthodontics</h2>
                </div>
            </div>
        </div>
    );
};

export default SelectSide;