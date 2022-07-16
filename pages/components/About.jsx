import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
           <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
           <h2 className='py-4'>Who I Am</h2>
           <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <p className='py-2 text-gray-600'>
           Morbi id placerat leo, ac condimentum purus. Etiam ac fermentum magna. Nullam id turpis quis nibh imperdiet congue feugiat et ipsum. Praesent at auctor neque. Aliquam velit libero, auctor at magna sed, porttitor imperdiet arcu. Donec in congue ligula. Phasellus in mauris eu quam tempor faucibus. Sed sit amet sodales diam. Vestibulum pulvinar justo nec venenatis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam maximus enim a lacus viverra, quis maximus massa rhoncus. Fusce cursus mollis efficitur. Duis vehicula tortor ipsum, tristique dignissim ex eleifend a. Quisque finibus faucibus dolor, eu blandit diam efficitur at.
           </p>
           <p className='py-2 text-gray-600'>
           Sed quis suscipit massa, scelerisque ullamcorper ipsum. Sed sed ornare diam. Phasellus gravida pretium magna eget rutrum. Sed scelerisque tellus ut neque malesuada scelerisque. Aenean non orci felis. Cras ac augue ut mauris egestas vulputate. Vestibulum vel finibus dolor. Nam molestie felis at elit placerat sodales. Suspendisse ornare lacinia nibh non consectetur. Phasellus fringilla nunc risus, ac pretium sem egestas eu. Nam aliquam, ex ac porta venenatis, leo nunc efficitur enim, non auctor purus risus quis orci. Integer bibendum ex ante, eget consectetur augue volutpat ac. Pellentesque pharetra rutrum hendrerit.
           </p>
           <p className='py-2 text-gray-600 underline cursor-pointer'>Check some of my latest projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src='https://media-exp2.licdn.com/dms/image/C5103AQEfZ842jqb9qw/profile-displayphoto-shrink_800_800/0/1516980461210?e=1663200000&v=beta&t=oipAo2s8DIEAd9JfIgbU1eJkPZ18cCldAseIeZ-l_xw'></img>
        </div>
        </div>
    </div>
  )
}

export default About