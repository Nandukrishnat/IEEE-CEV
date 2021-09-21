import React from 'react'

export default function ExecomList({ title, data }) {
  return (
    <div className="container mx-auto my-4">
      <div className="heading">{title}
      <div className="underline"></div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
        {data.map(el => (
          <div className="col d-flex flex-column align-items-center my-4" key={el.id}>
            <p className="fs-5 fw-bold">{el.name}</p>
            <p>{el.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
