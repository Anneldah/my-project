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
          
          <div className="text-center p-10">
            <h2>Anneldah Nkuna's Portfolio</h2>

            <div>
            <Image src="/../public/ProfilePic.jpg" 
                alt="/" 
                width='300' 
                height='200' align="center"/>
                </div>
            <p>My name is Nkuna Anneldah and I am currently doing my final year in Diploma in ICT in Applications Development.<br/>
            As a young lady in Software Engineering, growing up in a small rural area called Mbuzini in Mpumalanga Province, I knew education<br/>
            was the bridge I needed not to only change my current situation but to also change the future as a young leader to be a role model to other<br/>
            young disadvantaged youth in my community.
            </p>

            <p>During my free time I go out on a gym, especially when I am feeling stressed or down. I also joined the VarsityGenie Programme where we <br/>
            encourage young women to take part into Technology, because we feel like most women are not into technology due to lack of encouragement, active discouragement<br/>
            Hence we need more innovative and creative women in this industry like myself.</p>

            <p>Having read the job description, I am confident I have the skills and qualities needed to really excel in this job role<br/>
            and I believe this being my first job is actually an advantage to you, because you can shape me and mould me to how you need me to be.<br/>
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
          <div>
            <h2>Key attributes</h2>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Leadership</li>
              <li>Creativity</li>
              <li>Determined and persistent</li>
              <li>Flexibility</li>
              <li>Attention to detail</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div>
            <h2>Skills</h2>
            <ul>
                <li>I have solid experience of being a team leader for different teams and contribute with decision making in real-life business projects.</li>
                <li>Solid experience of developing software using C#.NET from first year to date.</li>
                <li>Strong knowledge of software documentation from analysis to programmers manual.</li>
                <li>Solid experience of agile development and SDLC for project management.</li>
                <li>Good experience of HTML5 and CSS for UI with the little help of JavaScript.</li>
                <li>Good experience of using SQL for data storage, retrieval, and maintenance.</li>
                <li>Good experience of Java for developing mobile Applications, using Android Studio as an IDE.</li>
                <li>Good experience of Visio as the basic tool for both analysis and design.</li>
  
            </ul>
          </div>

          <div>
            <h2>Game Management System (Applications Development Project lll)</h2>
            <p>
              The project was based on building a system in helping the business to improve in terms of customer services and be on edge on modern technology.<br/>
              The project had two main business processes which were booking and purchasing. For the customer to successfully complete one or any of the business processes she or<br/>
               he had to firstly register on the registration page,confirm registration through an email then browse the catalogue or check for available games.
              The team applied agile /scrum practices to manage the project.
             </p>

             <p>My role: Software engineer / analyst</p>

             <p> Contributed to the analysis, design, coding, testing, and documentation of the business use cases. The following tools were used to complete the business use cases:</p>
             <ul>
             <li>Visual Studio</li>
             <li>.Net C#</li>
             <li>Bootstrap</li> 
             <li>HTML5</li>
             <li>CSS</li> 
             <li>JavaScript</li>
             <li>SQL</li>
              <li>Microsoft Azure</li>
             </ul>
             <h3>You can access my final year project by clicking this link below:</h3>
            <b><a href="https://2022-grp11.azurewebsites.net">FinalYearProjectLink</a></b>

          </div>

          <div>
            <h2>Contact me here:</h2>

            <p>Email: anneldahnce@gmail.com</p>
            <p>Contact number: 0636110430</p>
          </div>
        </section>
      </main>
    </div>
  )
}
