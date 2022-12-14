import React from 'react';

const AddAdmin = () => {
    return (
        <div className='container'>
            <h2 className='text-dark my-5'>Add Admin</h2>
            <form >
                <div class="mb-3"><label for="product-title" class="form-label fw-semibold text-muted">Email</label>
                    <input name="email" type="email" class="form-control rounded-0" id="email" placeholder="Admin email" />
                </div>
                <div class="mb-3">
                    <input type="submit" class="btn btn-primary bg-gradient fw-semibold btn-lg" value="Invite" onClick={() => alert('coming soon')} />
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;