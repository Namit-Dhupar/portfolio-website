import React from 'react';
import Social from './Social';

const Main = ({ items, contactInfo }) => {

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <div className=" max-w-screen-xl w-screen mt-20">
            <img src={items?.[0]?.featuredImage?.node?.mediaItemUrl} alt="/"/>
          </div>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m{" "}
            <span className="text-[#5651e5]">{items?.[0]?.main?.name}</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            {items?.[0]?.main?.designation}
          </h1>
          <div
            className="py-4 text-gray-600 max-w-[70%] m-auto"
            dangerouslySetInnerHTML={{ __html: items?.[0]?.content }}
          />
          <Social data={contactInfo} isNav={false} />
        </div>
      </div>
    </div>
  );
}

export default Main