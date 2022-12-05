import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, photo, description } = blog
    return (
        <div class="col">
            <div class="card h-100 p-2">
                <img src={photo} class="card-img-top rounded" alt="..." />
                <div class="card-body p-1 pt-3">
                    <p className='text-muted p-0 m-0 mb-2 fw-semibold opacity-50'>Jun 20 ,2022</p>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description.slice(0, 100)}..</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;