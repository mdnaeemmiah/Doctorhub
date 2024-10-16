import img from '../../assets/image1.avif'

const Slots = () => {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold text-center">Available slots for Teeth Orthodontics.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Orthodontics</h2>
                        <p>8:00AM-9:00AM</p>
                        <div className="card-actions">
                            <button className="btn  bg-orange-500">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Orthodontics</h2>
                        <p>8:00AM-9:00AM</p>
                        <div className="card-actions">
                            <button className="btn  bg-orange-500">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Orthodontics</h2>
                        <p>8:00AM-9:00AM</p>
                        <div className="card-actions">
                            <button className="btn  bg-orange-500">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Orthodontics</h2>
                        <p>8:00AM-9:00AM</p>
                        <div className="card-actions">
                            <button className="btn  bg-orange-500">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Orthodontics</h2>
                        <p>8:00AM-9:00AM</p>
                        <div className="card-actions">
                            <button className="btn  bg-orange-500">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slots;