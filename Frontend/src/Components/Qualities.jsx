import React from 'react';
import jsonData from "../restApi.json";

const Qualities = () => {
  const ourQualities = jsonData.data[0].ourQualities;

  if (!ourQualities) {
    return <div>Error loading navigation links</div>;
  }

  return (
    <section className='qualities' id='qualities'>
      <div className='container'>
        {ourQualities.map((element)=>(
            <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className='title'>{element.title}</p>
                <p className='description'>{element.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Qualities
