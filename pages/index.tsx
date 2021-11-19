import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <h1>
        We are <b className="gradient">Minds On</b>, a youth nonprofit
        with{' '}
        <a>
          <u>a vision</u>
        </a>
        .
      </h1>
      <h3>
			Stress is omnipresent—and yet finding solutions
        is more difficult than ever. We are a group of teens that aim to redefine the help you get for mental health through <b>community engagement</b> and <b>centralization</b>.
      </h3><br/>
			<h3>
		 It is our duty as global citizens to give back to society; mental health support needs to be redesigned before it's too late.
      </h3><br/>
		<h3>
		 Within the Peel Region, we are <u>writing articles</u> to raise awareness, <u>redefining the architecture</u> of mental health help, giving a <u>voice to students</u> and partnering with <u>youth organizations</u>.  <br/><br/>

		 A community is defined by the people within it. Minds On is building a world of elegance through mental health by constructing unique pathways for all. <br/><br/>

    We hope you can join us in this change, <br/>
		 <i>The Minds On Executive Team</i>
      </h3>
			
      

      

    
    </Layout>
  );
};



export default Index;
