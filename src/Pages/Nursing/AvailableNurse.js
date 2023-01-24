import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { SetTitle } from '../../Utilities/SetTitle';

const AvailableNurse = () => {

    SetTitle('Available Nurse');
    const { data: nurses = [] } = useQuery({
        queryKey: ['nurses'],
        queryFn: async () => {
            const res = await fetch(`https://medlife-server-devshowmik.vercel.app/nurse`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='available-nurse py-5'>
            <h2 className='text-dark mt-5 text-center text-capitalize'>available nurse</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    nurses.map(nurse =>
                        <div className="col" key={nurse._id}>
                            <div className="card h-100 border-0 rounded-0 shadow p-3">
                                <img src={nurse.image} className="card-img-top rounded-0" alt={nurse.name} />
                                <div className="card-body p-0 pt-2 text-dark">
                                    <h5 className="card-title">{nurse.name}</h5>
                                    <p className="card-text">{nurse.education}</p>
                                    <a
                                        className='btn btn-primary rounded-0 fw-semibold text-capitalize'
                                        href='tel:012345678902'
                                    >Call now</a>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AvailableNurse;