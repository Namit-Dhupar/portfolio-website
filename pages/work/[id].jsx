import React from 'react';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { gql } from "@apollo/client";
import { addBrTagOnParagraphClose, client } from '../utils';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const data = await client.query({
    query: gql`
      query PostBySlug($slug: String!) {
        postBy(slug: $slug) {
          content
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          projectData {
            githubLink
            skills
            websiteLink
          }
              }
            }
          `,
    variables: {
      slug: id
    }
  });

  const post = data?.data.postBy;

  if (!post) {
    return {
      props: {},
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}


const property = ({ post }) => {
  let skillTitle;
  const content = addBrTagOnParagraphClose(post?.content);
  const projectImage = post?.featuredImage?.node?.mediaItemUrl
  const techArray = post?.projectData?.skills.split(',');
  if (Array.isArray(techArray)) {
    if (techArray.length > 3) {
      const str = techArray.slice(0, 3).map(x => x + " /").toString();
      skillTitle = str.substr(0, str.length - 1).replace(/,/g, '')
    } else skillTitle = techArray[0];
  }
  else skillTitle = post?.projectData?.skills;
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image loader={() => projectImage} className='absolute z-1' layout='fill' objectFit='cover' src={projectImage} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{post?.title}</h2>
          <h3>{skillTitle}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] py-4'>Project Overview</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {post?.projectData?.websiteLink && (
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          )}
          {post?.projectData?.githubLink && (
            <button className='px-8 py-2 mt-4'>Code</button>
          )}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies/Skills</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {Array.isArray(techArray) ? techArray.map((item, index) => {
                return (
                  <p key={index} className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' />{item}
                  </p>
                )
              }) : <p key={index} className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' />{techArray}
                  </p> }              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property