import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anneldah| Final-year Student</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="bg-blue-700 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
           <h1 className="text-xl font-burtons" > Anneldah Portfolio</h1>
           <ul className="flex items-left">
            <li>
                <a className=
                "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py6-2 rounded-md ml-8" href="#">Home</a></li>
           </ul>
          </nav>
          <div>
            <h2>Anneldah Nkuna</h2>
            <h3>Final year student</h3><br/>
            <div>
            <img src="/../public/ProfilePic.jpg" 
                alt="/" 
                width='100' 
                height='50'/>
                </div>
            <p>My name is Nkuna Anneldah and I am currently doing my final year in Diploma in ICT in Applications Development.<br/>
            As a young lady in Software Engineering, growing up in a small rural area called Mbuzini in Mpumalanga Province, I knew education<br/>
            was the bridge I needed not to only change my current situation but to also change the future as a young leader to be a role model to other<br/>
            young disadvantaged youth in my community.
            </p>

            <p>During my free time I go out on a gym, especially when I am feeling stressed or down. I also joined the VarsityGenie Programme where we <br/>
            encourage young women to take part into Technolog, because we feel like most women are not into technology due to lack of encouragement, active discouragement<br/>
            Hence we need more innovative and creative women in this industry like myself.</p>

            <p>Having read the job description, I am confident I have the skills and qualities needed to rally excel in this job role<br/>
            and I believe this being my first ob is actually an advantage to you, becauseyou can shape me and moulld me to how you need me to be.<br/>
            I think you will be really impressed by my teamwork, my ability to learn and deliver solutions on time.</p>
          </div>

          <div>
            <h2>The reason why I want to be a software developer at SovTech</h2><br/>
            <p>
              I carried out some research into your company (SovTech) before submitting my resume and I was attracted to your company values,<br/>
              what you stand for and how you have ambitious plans for the future. We spend a lot of time at work, and as such it is very important<br/>
              for me to work for a company that is going places, a company that does tings to a high standard and that wants to continually improve and develop.<br/>

              As someone who has high standards, I belive that both your goals and my own aspiration will be a perfect match.
            </p>

          </div>

        </section>
      </main>
    </div>
  )
}
