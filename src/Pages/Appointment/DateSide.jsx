import { useState } from 'react';
import img from '../../assets/img3.webp'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

const DateSide = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return (
        <div className="md:flex  my-12  gap-52  ">
            <div className="md:ml-24 justify-center items-center">
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                />
            </div>
            <div className="flex-1 ">
                <img className='h-[350px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default DateSide;