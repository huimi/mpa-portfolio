import React from 'react';
import BR from 'images/url-shortening/icon-brand-recognition.svg';
import DR from 'images/url-shortening/icon-detailed-records.svg';
import FC from 'images/url-shortening/icon-fully-customizable.svg';

const CONTENT = [
  {
    title: 'Brand Recognition',
    icon: BR,
    para: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    title: 'Detailed Records',
    icon: DR,
    para: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    title: 'Fully Customizable',
    icon: FC,
    para: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
]

function Card () {
  return (<>
    {
      CONTENT.map((e, id) => {
        return (
          <div key={ id } className="card-content"
              style={{ transform: `translateY(${id * 40}px)` }}>
            <div className="svg">
              <img height="40" alt={ e.title } src={ e.icon } />
            </div>
            <h4> {e.title} </h4>
            <p>{ e.para }</p>
          </div>
        );
      })
    }
  </>);
}

export default Card;
