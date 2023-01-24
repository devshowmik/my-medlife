import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../Utilities/SetTitle';

const AllAdmin = () => {
    SetTitle('all Admin');
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/users')
            const data = await res.json()
            return data
        }
    })
    const DeleteAdmin = (id) => {
        const admin = {
            admin: '',
        };
        fetch(`https://medlife-server-devshowmik.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Remove user');
                    refetch()
                }
            })
    }
    return (
        <div className='container text-capitalize users'>
            <h2 className='text-dark my-5'>All admin</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    users.map(user => <div className='col' key={user._id}>
                        <div className={`card rounded-0 shadow p-3 h-100 ${user?.admin ? 'bg-danger bg-opacity-10' : 'd-none'}`} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={user?.image} className="card-img-top rounded-0 img-fluid" alt={user?.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{user?.username}</h5>
                                        <p className="card-text">{user?.email} </p>
                                        <div className="d-inline-flex">
                                            {
                                                user.admin
                                                &&

                                                <button
                                                    className='btn btn-danger btn-sm rounded-0 d-flex justify-content-center align-items-center'
                                                    onClick={() => DeleteAdmin(user._id)}
                                                >
                                                    <span
                                                        title='Delete'
                                                        className='me-1 d-flex justify-content-center align-items-center'
                                                    ><FaTrashAlt /></span>
                                                    Remove Admin
                                                </button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllAdmin;