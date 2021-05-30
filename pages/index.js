import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import AnnouncementBanner from "../components/AnnouncementBanner";
import SecondaryImage from "../components/SecondaryImage";
import HackingImage from "../components/HackingImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import DarkModeImage from "../components/DarkModeImage";
import Faqs from "../components/Faq";


export default function IndexPage() {
    const setHidden = () => {
        console.log(document.body.style.overflow);
        if (document.body.style.overflow !== "hidden") {
            // document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    };

    const onDarkModeClicked = () => {
        setDarkModeEnabled(!darkModeEnabled);
    }

    const onViewScrolled = () => {
        setIsScrolling(true);
        setDarkModeEnabled(false);
        setIsScrolling(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", onViewScrolled, { passive: true });
        return () => {
            window.removeEventListener("scroll", onViewScrolled);
        };
    }, [])

    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [, setIsScrolling] = useState(false);

  return (
      <div className="bg-primary">
          <script type="text/javascript" src="https://gumroad.com/js/gumroad.js"/>
          <AnnouncementBanner />
          <div>
              <div>
                  <div>
                      <h1 className="tracking-wider leading-tight mx-auto text-xl font-bold text-center max-w-3xl pt-20 md:text-5xl">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-pink to-warm-yellow text-center font-kaushan pr-4">
                              Ready to start making an additional 10,000$/yr at your next job?
                          </span>
                      </h1>
                  </div>
                  <div className="mt-6 mx-16 max-w-lg md:mx-auto">
                      <p className="inline-block pr-1 pb-1 bg-highlight text-center text-primary font-kaushan xs:text-base sm:text-lg md:mt-5 md:text-xl transform -rotate-2">
                          Learn how to get companies to chase you & offer you more
                      </p>
                  </div>
              </div>
          </div>
          <div className="flex">
              <HeroImage />
              <p className="font-overpass max-w-2xl self-center text-warm-yellow leading-8 md:text-lg mt-16 mx-8 text-base md:mx-auto lg:mx-0 lg:mt-0 xl:-ml-48 2xl:ml-0">
                  Are you an epic developer but still don't get an epic salary? Do you feel nervous at the thought of negotiating your salary? Does guilt creep up into your mind when you think about asking for a raise? Are you tired of inserting the damn USB wrong every time? Do you wish that all major companies would chase you to join them? Then this course is for you!
              </p>
              <DarkModeImage isExpanded={darkModeEnabled} imageClicked={onDarkModeClicked} className="z-20" />
          </div>
          <div className="text-accent-blue-light font-kaushan max-w-2xl text-3xl mx-8 my-8 md:mx-auto md:text-5xl">
              What will you learn?
          </div>
          <div>
              <p className="font-overpass max-w-2xl text-warm-yellow leading-8 md:text-lg mx-8 text-base md:mx-auto">
                  Did I say learn? Sorry scratch that, I meant to say What you'll do! This course is all about doing, unlike other courses which keep going on & on without telling you what to do(Just so that this course doesn't become one of them, I am telling you to purchase the course already!)
              </p>
          </div>
          <div className="flex justify-start">
              <p className="font-overpass max-w-2xl text-warm-yellow leading-8 md:text-lg mt-8 text-base mx-8 md:mx-auto">
                  Still here huh? Well, if you really need to know then here it is:
                  I will reveal all my secrets about the optimal bomb locations, blueprint & how to wire them up, oh wait that's a different course. Pretend you didn't read that.
                  <br/>
                  <br/>
                  This course is going to focus on these instead:
              </p>
              <SecondaryImage  className="z-10" />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-5 lg:gap-2 lg:gap-y-2">
              <div className="flex col-span-2 row-start-1 col-start-2 row-span-1 space-x-16 mt-16">
                  <img src='https://svgshare.com/i/QdC.svg' title=''  alt="Point 1"/>
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg mt-8">
                      I will help you build a personalized **Resume** which recruiters will find it hard to ignore(I have always got a call back from every firm I have applied to in the last 8yrs), just like Nutella → Skip this maybe?
                  </p>
              </div>
              <div className="flex col-span-2 row-start-2 col-start-2 space-x-16">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg mt-8">
                      How to build a framework which will ensure you always succeed at job interviews → This is some amazing stuff just like a thin-crusted chicken jerk pizza 🍕 with all sorts of cheese on it 😋
                  </p>
                  <img className="mb-24" src='https://svgshare.com/i/QfT.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-2 row-start-3 col-start-2 space-x-16">
                  <img className="mb-24" src='https://svgshare.com/i/Qf6.svg' title='' alt='Point 3'/>
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg">
                      How to effectively win at salary negotiations & get an offer without breaking a sweat. By the end of it, you will be raking in money as if it is paper(well, it is paper technically but you get the idea. Hopefully, you won't need my "How To Rob A Bank" course, but if this course doesn't help you I will give out that course for free)                </p>
              </div>
              <div className="flex col-span-2 row-start-4 col-start-2 mt-8 space-x-16">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg mt-8">
                      I will also teach you how to insert a USB drive correctly every time → This alone makes the course worth it! Imagine, never inserting a USB drive wrong ever again!                  </p>
                  <img className="mb-16" src='https://svgshare.com/i/QdX.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-2 row-start-5 col-start-2 mt-8 space-x-16">
                  <img className="mb-16 mt-4" src='https://svgshare.com/i/QeR.svg' title='' alt='Point 3'/>
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg">
                      You also get a 1hr call with me to discuss your specific problems and review your resume.  And we will also talk about if you like pineapple on your pizzas or how good you are at a bank heist(Gotta keep hiring 🤷🏼‍♂️, that business is tough)
                  </p>
              </div>
          </div>
          {/*Mobile specific layout*/}
          <div className="grid grid-cols-3 grid-rows-10 gap-y-16 my-8 lg:hidden">
              <div className="flex col-span-1 row-start-1 col-start-2 row-span-1 justify-center">
                  <img src='https://svgshare.com/i/QdC.svg' title=''  alt="Point 1"/>
              </div>
              <div className="flex col-span-3 row-start-2 col-start-1 row-span-1 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base">
                      I will help you build a personalized **Resume** which recruiters will find it hard to ignore(I have always got a call back from every firm I have applied to in the last 8yrs), just like Nutella → Skip this maybe?
                  </p>
              </div>
              <div className="flex col-span-1 row-start-3 col-start-2 justify-center">
                  <img className="" src='https://svgshare.com/i/QfT.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-3 row-start-4 col-start-1 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base">
                      How to build a framework which will ensure you always succeed at job interviews →This is some amazing stuff just like a thin-crusted chicken jerk pizza 🍕 with all sorts of cheese on it 😋
                  </p>
              </div>
              <div className="flex col-span-1 row-start-5 col-start-2 justify-center">
                  <img className="" src='https://svgshare.com/i/Qf6.svg' title='' alt='Point 3'/>
              </div>
              <div className="flex col-span-3 row-start-6 col-start-1 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base">
                      How to effectively win at salary negotiations & get an offer without breaking a sweat. By the end of it, you will be raking in money as if it is paper(well, it is paper technically but you get the idea. Hopefully, you won't need my "How To Rob A Bank" course, but if this course doesn't help you I will give out that course for free)
                  </p>
              </div>
              <div className="flex col-span-1 row-start-7 col-start-2 justify-center">
                  <img className="" src='https://svgshare.com/i/QdX.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-3 row-start-8 col-start-1 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base">
                      I will also teach you how to insert a USB drive correctly every time → This alone makes the course worth it! Imagine, never inserting a USB drive wrong ever again!
                  </p>
              </div>
              <div className="flex col-span-1 row-start-9 col-start-2 justify-center">
                  <img src='https://svgshare.com/i/QeR.svg' title='' alt='Point 3'/>
              </div>
              <div className="flex col-span-3 row-start-10 col-start-1 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base">
                      You also get a 1hr call with me to discuss your specific problems and review your resume.  And we will also talk about if you like pineapple on your pizzas or how good you are at a bank heist(Gotta keep hiring 🤷🏼‍♂️, that business is tough)
                  </p>
              </div>
          </div>
          {/*Mobile layout for benefits ends*/}
          <div className="text-accent-blue-light font-kaushan max-w-2xl text-3xl mx-8 my-16 md:mx-auto md:text-5xl">
              What will you not do?
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-5">
              <div className="flex col-span-2 row-start-1 col-start-2 row-span-1 mb-8">
                  <img src='https://svgshare.com/i/Qq7.svg' title=''  alt="Point 1"/>
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg mt-8 ml-16">
                      You won't rob a bank(As I said that's a different course, stop bringing it up so many times... Are you an undercover cop?)
                  </p>
              </div>
              <div className="flex col-span-2 row-start-2 col-start-2">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-lg mt-8 mr-16">
                      Ready-made Resume Templates → Your resume is a reflection of your personality, you will learn how to make it shine and convey your personality. You won't copy others, you stay true your personality.
                  </p>
                  <img className="mb-16" src='https://svgshare.com/i/Qrt.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-2 row-start-3 col-start-2">
                  <img className="mb-12" src='https://svgshare.com/i/Qrv.svg' title='' alt='Point 3'/>
                  <p className="font-overpass max-w-lg text-warm-yellow leading-8 text-lg mt-8 ml-16">
                      Hacks for memorizing Data structures & Algorithms(I do cover these & how to go about approaching them but if that is your end goal, then do not buy this course)
                  </p>
              </div>
              <div className="flex col-span-2 row-start-4 col-start-2">
                  <p className="font-overpass max-w-lg text-warm-yellow leading-8 text-lg mt-8 mr-16">
                      Make my resume service → I don't do that, try somewhere else maybe(But again, if you're going to  try somewhere else, might as well just buy my "How To Rob A Bank" course - it has more chance of succeeding at-least)
                  </p>
                  <img className="mb-8" src='https://svgshare.com/i/QrL.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-2 row-start-5 col-start-2 mt-8">
                  <img className="mb-8" src='https://svgshare.com/i/QsR.svg' title='' alt='Point 3'/>
                  <p className="font-overpass max-w-md text-warm-yellow leading-8 text-lg mt-8 ml-16">
                      Solve COVID → This is a course not a genie that it can fix anything. Sadly, we will still have to wait for cure.                  </p>
              </div>
          </div>
          {/* Mobile specific layout */}
          <div className="grid grid-cols-3 grid-rows-10 lg:hidden">
              <div className="flex col-span-3 row-start-1 col-start-1 row-span-1 mb-8 justify-center">
                  <img src='https://svgshare.com/i/Qq7.svg' title=''  alt="Point 1"/>
              </div>
              <div className="flex col-span-3 row-start-2 col-start-1 row-span-1 mb-8 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base mt-8">
                      You won't rob a bank(As I said that's a different course, stop bringing it up so many times... Are you an undercover cop?)
                  </p>
              </div>
              <div className="flex col-span-3 row-start-3 col-start-1 row-span-1 mb-8 justify-center">
                  <img className="" src='https://svgshare.com/i/Qrt.svg' title='' alt='Point 2'/>
              </div>
              <div className="flex col-span-3 row-start-4 col-start-1 mb-8 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base mt-8">
                      Ready-made Resume Templates → Your resume is a reflection of your personality, you will learn how to make it shine and convey your personality. You won't copy others, you stay true your personality.
                  </p>
              </div>
              <div className="flex col-span-3 row-start-5 col-start-1 row-span-1 mb-8 justify-center">
                  <img src='https://svgshare.com/i/Qrv.svg' title='' alt='Point 3'/>
              </div>
              <div className="flex col-span-3 row-start-6 col-start-1 mb-8 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base mt-8">
                      Hacks for memorizing Data structures & Algorithms(I do cover these & how to go about approaching them but if that is your end goal, then do not buy this course)
                  </p>
              </div>
              <div className="flex col-span-3 row-start-7 col-start-1 row-span-1 mb-8 justify-center">
                  <img src='https://svgshare.com/i/QrL.svg' title='' alt='Point 4'/>
              </div>
              <div className="flex col-span-3 row-start-8 col-start-1 mb-8 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base mt-8">
                      Make my resume service → I don't do that, try somewhere else maybe(But again, if you're going to try somewhere else, might as well just buy my "How To Rob A Bank" course - it has more chance of succeeding at-least)                  </p>
              </div>
              <div className="flex col-span-3 row-start-9 col-start-1 mb-8 justify-center">
                  <img src='https://svgshare.com/i/QsR.svg' title='' alt='Point 3'/>
              </div>
              <div className="flex col-span-3 row-start-10 col-start-1 mb-8 justify-center mx-8">
                  <p className="font-overpass max-w-xl text-warm-yellow leading-8 text-base mt-8">
                      Solve COVID → This is a course not a genie that it can fix anything. Sadly, we will still have to wait for cure.                  </p>
              </div>
          </div>
          {/* Mobile layout ends */}
          <div className="text-accent-blue-light font-kaushan max-w-2xl text-3xl mx-8 my-16 mt-32 md:mx-auto md:text-5xl">
              Who Am I? Why should you buy from me?
          </div>
          <div>
              <p className="font-overpass max-w-2xl text-warm-yellow leading-8 md:text-lg mx-8 text-base md:mx-auto">
                  Didn't your mom tell you not to buy stuff from strangers online? I would advise against it.
              </p>
          </div>
          <div className="relative pr-8">
              <HackingImage/>
          </div>
          <div>
              <p className="font-overpass max-w-2xl text-warm-yellow leading-8 md:text-lg mx-8 my-6 sm:text-base md:mx-auto">
                  So let's fix that, I am Adnan & I am your course instructor. I love pizza, pineapple(not on top of my pizza though) & desserts 🍨 Oh also, I have been a wanderer on the darkest of alleys on the internet(there is a good chance you will find me in a lot of places 👀)
              </p>
          </div>
          <br/>
          <br/>
          <br/>
          <div>
              <h4 className="tracking-wide leading-tight mx-auto text-2xl font-semibold text-center max-w-3xl pt-8 pl-56 hidden lg:block md:text-4xl 2xl:pl-8 2xl:pr-4 2xl:max-w-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-pink to-warm-yellow text-center font-kaushan pr-4">
                      Actual photo of me hacking the NSA
                  </span>
              </h4>
          </div>
          <div>
              <p className="font-overpass max-w-2xl text-warm-yellow leading-8 md:text-lg mx-8 sm:text-base md:mx-auto lg:mt-48">
                  I have been a developer for a decade now & have managed to master the art of negotiation & getting companies to chase me all year round. I used to be frustrated that most of the companies wouldn't even shortlist my resume leave alone talk to me in an interview, so I am on a mission to fix that & help talented developers as you stand apart from the rest of the crowd/competition
              </p>
          </div>
          <div className="text-accent-blue-light font-kaushan max-w-3xl text-3xl mx-8 mt-16 mt-32 md:mx-auto md:text-5xl">
              What's in the course?
          </div>
          <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-lg mx-8 sm:text-base md:mx-auto my-8">There's a large amount of stuff in the course. I promise you'll have a great time. Here's a quick summary.</div>
          <div className="mx-8 md:mx-auto max-w-3xl">
              <div className="max-w-2xl">
                 <span className="inline-flex items-center px-6 py-0.5 rounded-2xl font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                     1 Intro
                 </span>
              </div>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-2">A quick introduction to the current landscape of hiring. </div>
          </div>
          <div className="mx-8 md:mx-auto max-w-3xl my-16">
             <span className="inline-flex items-center px-6 py-0.5 rounded-2xl font-medium font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                 2 Resume Building
             </span>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-4">Deep dive into how to structure your resume & write a resume that gets you shortlisted every-time! We will also look at how to build your personal brand & optimize your online profile.</div>
          </div>
          <div className="mx-8 md:mx-auto max-w-3xl my-16">
             <span className="inline-flex items-center px-6 py-0.5 rounded-2xl font-medium font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                 3 Framework
             </span>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-4">A personal framework which I have been using & developing over the last decade.  where I show you how to develop a process around the entire hiring process & how to make the best use of it.</div>
          </div>
          <div className="mx-8 md:mx-auto max-w-3xl my-16">
             <span className="inline-flex items-center px-6 py-0.5 rounded-2xl font-medium font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                 4 Interview Prep
             </span>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-4">Are you stuck forever preparing for interviews & then never end up scheduling an interview? In this module, we will get you ready for the interview, right from what to read for the interview to what questions to ask in each round while making sure you do it in a reasonable timeline.</div>
          </div>
          <div className="mx-8 md:mx-auto max-w-3xl my-16">
             <span className="inline-flex items-center px-6 py-0.5 rounded-full font-medium font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                 5 Offers & Negotiation
             </span>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-4">This is probably one of the most important modules, you are here for. I cover all things related to negotiations, perk discussions, what to say & how to convince the firm to give you more! </div>
          </div>
          <div className="mx-8 md:mx-auto max-w-3xl my-16">
             <span className="inline-flex items-center px-6 py-0.5 rounded-full font-medium font-overpass bg-gradient-to-r from-coral-pink to-warm-yellow text-center md:text-3xl text-primary">
                 6 Accepting your dream job
             </span>
              <div className="font-overpass max-w-3xl text-warm-yellow leading-8 md:text-xl mx-8 sm:text-base md:ml-auto my-4">Finally, we will look at how to accept the offer & keep your growth options open. A few tips & tricks to make the first good impression when you join the firm.</div>
          </div>
          <div className="text-accent-blue-light font-kaushan max-w-3xl text-3xl mx-8 my-16 mt-32 md:mx-auto md:text-5xl">
              Have trust issues?
          </div>
          <div>
              <p className="font-overpass max-w-3xl text-warm-yellow leading-8 text-lg mx-8 sm:text-base md:mx-auto">
                  Here are some <span className="inline-block bg-warm-yellow text-primary transform -rotate-1">100% trusted</span> reviews.
              </p>
              <div>
                  <Carousel
                      autoPlay={true}
                      infiniteLoop={true}
                      showArrows={false}
                      showStatus={false}
                      swipeable={true}
                      showThumbs={false}
                      className="max-w-6xl mx-8 md:mx-auto"
                  >
                      <div>
                          <p  className="font-overpass max-w-6xl text-warm-yellow leading-8 text-lg text-center my-8 sm:text-base md:mr-auto md:ml-24">
                              "This course changed my life after I learnt how to insert the USB correctly every time"
                              <br/>
                          </p>
                          <div className="font-overpass text-warm-yellow leading-8 text-lg my-8 sm:text-base"> -Elon Musk </div>
                      </div>
                      <div>
                          <p  className="font-overpass max-w-6xl text-warm-yellow leading-8 text-lg mx-8 my-8 sm:text-base md:mr-auto md:ml-24">
                              "Adnan is a master at this, it blows my mind how detailed this course was"
                              <br/>
                              <br/>
                              -Elon Musk
                          </p>
                      </div>
                  </Carousel>
              </div>

          </div>
          <div className="text-accent-blue-light font-kaushan max-w-2xl text-3xl mx-8 mt-16 my-8 md:mt-32 md:mx-auto md:my-16 md:text-5xl">
              Convinced yet? Let's get started
          </div>
          <h1 className="tracking-wide leading-tight mx-auto text-5xl font-bold text-center max-w-3xl md:text-6xl">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral-pink to-warm-yellow text-center font-kaushan pr-4">
                              ₹5000 ($70)
                          </span>
          </h1>
          <h3 className="tracking-wide leading-tight mx-auto text-5xl font-bold text-center max-w-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-coral-pink to-warm-yellow text-center">
              <span className="strike font-kaushan pr-4">
                  ₹4999*
              </span>
          </h3>
          <p className="font-kaushan max-w-md text-warm-yellow leading-8 text-base mx-8 my-8 sm:text-base md:mx-auto">
              *yes, not 4999/- because I don't have enough 1 rupee coins to give back to everyone
          </p>
          <a className="gumroad-button" href="https://gum.co/wYJNrK"
          className="mx-4 md:mx-auto flex justify-center my-24">
                <button
                    onClick={setHidden}
                    className="button text-highlight font-kaushan max-w-sm text-lg">Get Amazing/More Job Offers Now</button>
          </a>
          <Faqs />
          <Footer />
      </div>
  )
}
