import React from 'react';
import './PainInjury.css';
import BookIcon from '../images/BookIcon.png'
import FactIcon from '../images/FactIcon.png'
import QuestionIcon from '../images/QuestionIcon.png'
import HeartIcon from '../images/HeartIcon.png'
import SearchIcon from '../images/SearchIcon.png'
import VideoIcon from '../images/VideoIcon.png'
import PodcastIcon from '../images/PodcastIcon.png'
import ListIcon from '../images/ListIcon.png'
import AppIcon from '../images/AppIcon.png'
import WebsiteIcon from '../images/WebsiteIcon.png'
import FullBanner from '../images/relaxation.jpg'
import ScienceIcon from '../images/newspaper.png'
import BooksIcon from '../images/book.png'


function Relaxation() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Relaxation Techniques: Meditation, Tapping and Breathing Exercises.
Are Calmer Days Comin' Your Way ?</p>
        <p className="bottom-text">Learn to slow down. Get lost intentionally. Observe how you judge both yourself and

those around you. Tim Ferriss</p>
      </div>

      <div className="div-two">
        <div className="flex-row-relax">
          <img className="icon" src={BookIcon} alt="Your Image" />
          <p className="black-text-title-relax">Stress, burnout, insomnia, and depression are among the serious threats faced by
those who work in home healthcare.</p>
        </div>

        <div className="normal-div">
          <p className="black-text-sub">Overcoming these threats takes more than telling you to
take a deep breath. However, adopting attainable, evidence based, relaxation techniques is a
good place to start to help combat these threats and protect overall health and wellbeing. Although there are a range of relaxation techniques, breathing exercises, tapping, and
meditation will be the ones explored in this section. These techniques are supported by
evidence to have numerous physical and psychological benefits. They can be as simple

as learning a breathing technique to do when experiencing stress, or, practicing mind-
fulness while doing everyday activities like taking a walk or being with your family.</p>
        </div>
      </div>

      <div className="div-three">
        <p className="white-text-large">What can be difficult however, is putting aside time to commit to a daily practice plan
and to train the mind to focus and be calm. This is especially true for home healthcare
workers who have no problems nurturing others, but can often overlook themselves.
The key is to pick techniques that resonate, and are sustainable, accessible, and can be
incorporated into a daily plan.</p>
      </div>


      <div className="div-four">
        <img className="icon" src={FullBanner} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>

      <div className="div-five">
        <div className="flex-column">
          <div className="flex-row">
            <img className="icon" src={FactIcon} alt="Your Image" />
            <p className="black-text-relax">Fact: Albert Einstein took a year off school to travel after high school where
he found relaxation in nature and developed a life long love of sailing. This is
thought to have contributed to his creation of some of the world's most impor-
tant theories. Carlo Rovelli, the founder of loop quantum gravity theory wrote:
“In his youth Albert Einstein spent a year ‘loafing aimlessly’. You don’t get
anywhere by not ‘wasting’ time.”</p>
          </div>
          <div className="flex-row-left-margin">
            <img className="icon" src={QuestionIcon} alt="Your Image" />
            <p className="black-text-relax">Questions: How can I learn more about meditation, tapping, and breathing exercises?
 </p>
            <p className="black-text-relax">How do I determine which kind of relaxation technique is best for me?</p>
            <p className="black-text-relax">What
are some easy ways that I can integrate mediation/tapping and breath work
into my busy schedule?</p>
            <p className="black-text-relax"> Can I overcome my intolerance of being still for
extended periods?</p>
          </div>
        </div>
      </div>

      <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={HeartIcon} alt="Your Image" />
          <p className="black-text-title ">Breakdown of relaxation techniques.</p>
        </div>
        <div className="full-width">
          <p className="black-text-left">Meditation</p> 
          <div className='flex-column'>
            <p className="black-text-block">Meditation is a set of techniques to train your mind, similar to the way that fitness is an
approach to training your body. These techniques are numerous and include mindful-
ness, visualization, guided, and mantra meditation. Meditation has proven scientific
benefits that, among other things, help you to focus, sleep better, increase self-aware-
ness/ compassion, and bring mental calmness during difficult situations.</p>
        </div>
        </div>
        <div className="full-width">
          <p className="black-text-left">Tapping</p> 
          <div className='flex-column'>
            <p className="black-text-block" href="">Tapping, also referred to as EFT, is a technique that helps manage and release every-
day stress. Tapping blends ancient theories of acupuncture with modern psychology
and follows a systematic pattern of tapping on the endpoints of acupressure meridians.
All the while, you recite affirmations that acknowledge a physical or emotional problem
and your bodies ability to overcome it.</p>
        </div>
        </div>
        <div className="full-width">
          <p className="black-text-left">Breathing</p> 
          <div className='flex-column'>
            <p className="black-text-block" href="">Breathing exercises, have multifaceted, scientifically proven benefits to overall wellbe-
ing. Bringing awareness to the breath helps to calm and disengage from distracting
thoughts and sensations. They has been shown to help overcome numerous challenges
such as anxiety, and even pain, as well as increase tissue perfusion and decrease corti-
sol. Breathing exercises such as box breathing and alternate nostril breathing are sim-
ple and can easily be integrated into daily routines.</p>
          </div>
        </div>
    </div>

    <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="white-text-title ">Online Resources</p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Meditation:</p> 
          <a className="white-text-url" href="https://www.healthline.com/nutrition/12-benefits-of-meditation">Healthline: 12 Benefits of Meditation</a>
          <br></br>
          <a className="white-text-url" href="https://www.medicalnewstoday.com/articles/320392">Medical News Today: What is the Best Type of Meditation?</a>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Tapping:</p> 
          <a className="white-text-url" href="https://www.forbes.com/health/mind/eft-tapping/">Forbes Health: EFT Tapping: What you Need to Know</a>
          <br></br>
          <a className="white-text-url" href="https://neurosciencenews.com/tapping-stress-19837/">Neuroscience News: Feeling Stressed? It’s ‘a Bit Weird, but Tapping Helps – And It’s Easy to Learn</a>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Breathing Exercises:</p> 
          <a className="white-text-url" href="https://www.everydayhealth.com/alternative-health/living-with/ways-practice-breath-focused-meditation/">Everyday Health: A Beginner's Guide to Breath Work Practices</a>
          <br></br>
          <a className="white-text-url" href="https://positivepsychology.com/breathing-exercises-for-stress-relief/">Positive Psychology: 7 Stress-Relief Breathing Exercises for Calming Your Mind</a>
          <br></br>
          <a className="white-text-url" href="https://www.scientificamerican.com/article/proper-breathing-brings-better-health/">Scientific American; Proper Breathing Brings Better Health</a>
          <br></br>
          <a className="white-text-url" href="https://positivepsychology.com/mindful-thinking/">Help to Stay Focused: Positive Psychology Tips to Stop Ruminating</a>
          <br></br>
          <a className="white-text-url" href="https://www.healthline.com/health/9-ways-to-make-meditation-easier#get-started">Healthline: 9 Ways to Make Meditation Easier</a>
     
        </div>
      </div>

      <div className="div-eleven-alt">
        <div className="flex-row">
          <img className="icon" src={ScienceIcon} alt="Your Image" />
          <p className="white-text-title ">Scientific Journals</p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Meditation:</p> 
          <a className="white-text-url" href="https://www.sciencedirect.com/science/article/pii/S0897189722000076">The effectiveness of mindfulness-based interventions on the psychological well- being of nurses: A systematic review. Sulosaari et al., (2022).</a>
          <br></br>
          <a className="white-text-url" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6716566/">Mindfulness to promote nurses' well-being. Susan Penque, (2019).</a>
          <br></br>
          <a className="white-text-url" href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2796494">Efficacy of Transcendental Meditation to reduce stress among health care work-ers. Joshi et al., (2022).</a>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Tapping:</p> 
          <a className="white-text-url" href="https://pubmed.ncbi.nlm.nih.gov/36438382/">Clinical EFT as an evidence-based practice for the treatment of psychological and physiological conditions: A systematic review. Church et al., (2022).</a>
          <br></br>
          <a className="white-text-url" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6381429/">Clinical EFT (Emotional Freedom Techniques) improves multiple physiological markers of health. Bach et al., (2019).</a>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Breathing Exercises</p> 
          <a className="white-text-url" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6137615/">How breath-control can change your life: A systematic review on psycho-physio-logical correlates of slow breathing. Zaccarro et al., (2018).</a>
          <br></br>
          <a className="white-text-url" href="https://pubmed.ncbi.nlm.nih.gov/25869930/">Self-Regulation of breathing as a primary treatment for Anxiety. Ravinder et al.(2015).</a>
          <br></br>
          <a className="white-text-url" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5455070/#">The effect of diaphragmatic breathing on attention, negative affect and stress inhealthy adults. Ma et al., (2017).</a>
        </div>
      </div>

      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits to Help Get Relaxation Techniques Started</p>
        </div>
        <div className="flex-row-toolkit">
          <div className="flex-column-mobile">
            <p className="white-text-title">Meditation</p>
            <a className="white-text-url" href="https://www.heart.org/-/media/Healthy-Living-Files/Infographics/Loving-Kindness-Meditation-infographic.pdf?rev=f34027bd73174cd9b0be76cba59571ca">American Heart Association: Loving-Kindness Meditation Infographic PDF</a>
            <br></br>
            <a className="white-text-url" href="https://www.nytimes.com/guides/well/how-to-meditate">New York Times: How to Meditate: A Comprehensive Beginners Guide with Helpful Hints</a>
            <br></br>
            <a className="white-text-url" href="https://myamericannurse.com/wp-content/uploads/2015/09/ant9-Mindfulness-820.pdf">American Nurse Today: The Mindful Nurse</a>
            <br></br>
            <a className="white-text-url" href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know">National Centre of Complementary and Integrative Health: Meditation and Mindfulness: What You Need To Know</a>

          </div>
          <div className="flex-column-mobile">
            <p className="white-text-title">Tapping</p>
            <a className="white-text-url" href="https://www.healthline.com/health/eft-tapping">HealthLine: Tapping (EFT) in 5 Steps Guide</a>
          </div>
        </div>
        <div className="flex-column-mobile">
            <p className="white-text-title">Breathing Exercises</p>
            <a className="white-text-url" href="https://nursing.rutgers.edu/wp-content/uploads/2020/07/Dr.-Weil-4-7-8-Breathing-Exercise.pdf">Rutgers University Nursing Education: Infographic on the 4-7-8 Breath Relaxation Exercise</a>
            <br></br>
            <a className="white-text-url" href="https://health.clevelandclinic.org/box-breathing-benefits/">Cleveland Clinic Health Essentials: How to do Box Breathing</a>

        </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
        <p className="black-text-video" style={{marginTop: "-4%"}}>Meditation:</p>
        <a className="black-text-url" href="https://www.youtube.com/watch?v=Z3z9f3OIcLg">Meditation for Healthcare Workers</a>
        <p className="black-text-video">The Royal College of Nursing provides this calming meditation specifically for healthcare workers under stress</p>

        <a className="black-text-url" href="https://www.youtube.com/watch?v=D5r2sBQM31k">Mindfulness in Everyday Life</a>
        <p className="black-text-video">Scientist and Author Jon Kabat Zinn's discussion with Oprah Winfrey:</p>
        <a className="black-text-url" href="https://www.youtube.com/watch?v=D5r2sBQM31k">Scientist and Author Jon Kabat Zinn's discussion with Oprah Winfrey</a>

        <p className="black-text-video">Wayne Dyer's Night Meditation</p>
        <a className="black-text-url" href="https://www.youtube.com/watch?v=NEwRGJHkrQ0">Well-known, self-help author and motivational speaker, Dr. Wayne Dyer walks through this meditation to do each night before you go to bed to reprogram your subconscious</a>
       
        <p className="black-text-video">Dr. Deepak Dr. Chopra, Clinical Professor of Family Medicine and Public Health at the University of California, world-renowned alternative medicine speaker, and author guides this meditation to help you stay focused</p>
        <a className="black-text-url" href="https://www.youtube.com/watch?v=4Bs0qUB3BHQ">Deepak Chopra's Go-To 3-Minute Meditation To Stay Focused</a>

        <p className="black-text-video">Tapping (EFT)</p>
        <a className="black-text-url" href="https://www.ted.com/talks/peta_stapleton_is_therapy_facing_a_revolution">Is Therapy Facing a Revolution?</a>
        <p className="black-text-video">Dr. Peta Stapleton, Clinical & Health Psychologist, describes in this TED Talk how she feels EFT can help a myriad of stress-related issues</p>

        <a className="black-text-url" href="https://www.youtube.com/watch?v=GVg50ox8czo">Quick Tutorial On Tapping & How to Do EFT</a>

        <p className="black-text-video">Breathing Exercises:</p>
        <a className="black-text-url" href="https://www.cnn.com/2022/09/16/health/4-7-8-breathing-technique-relaxing-wellness/index.html">The 4-7-8 Method That Could Help You Sleep</a>
        <p className="black-text-video">CNN Health video featuring breath coach Dana Santas, who describes how to perform the 4-7-8 breathing exercise to help bring relaxation and sleep</p>

        <a className="black-text-url" href="https://www.youtube.com/watch?v=sx5sLPNfhlA">How to De-Stress in 5 Min or Less: Alternate Nostril Breathing</a>
        <p className="black-text-video">Dr. Emma Sepal, best-selling author and Yale lecturer demonstrates Alternate Nostril Breathing</p>

        <a className="black-text-url" href="https://www.youtube.com/watch?v=W_YWBFKUa2A">Easy Beginner Practice: Box Breathing</a>

        </div>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
        <div>
  <p className="black-text-video" style={{ marginTop: "-4%" }}>The 21 Best Meditation Podcasts to Listen to Right Now</p>
  <a className="black-text-url" href="https://www.verywellmind.com/best-meditation-podcasts-4771686">A selection of podcasts to choose from Very Well Magazine</a>
  <p className="black-text-video">The Meditation Podcast: Offered for free</p>
  <a className="black-text-url" href="https://themeditationpodcast.com/">https://themeditationpodcast.com/</a>
  <p className="black-text-video">The Breathing Tree: Hosted by Rebecca Dennis, international author and breath coach presents a variety of Podcasts describing techniques and benefits of breathing exercises</p>
  <a className="black-text-url" href="https://breathingtree.co.uk/category/podcasts/">https://breathingtree.co.uk/category/podcasts/</a>
  <p className="black-text-video">The Tapping Solution: a collaboration of podcasts on the how to’s of tapping</p>
  <a className="black-text-url" href="https://www.thetappingsolution.com/tapping-podcast/">https://www.thetappingsolution.com/tapping-podcast/</a>
</div>

        </div>
      </div>

      <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={BooksIcon} alt="Your Image" />
          <p className="black-text-title ">Books and Manuals</p>
        </div>
        <div className="full-width">
        <div>
        <p className="black-text-video" style={{ marginTop: "-4%" }}>The Tapping Solution: A Revolutionary System for Stress-Free Living by Nick Ortner, (2013)</p>
  <a className="black-text-url" href="https://www.amazon.ca/Tapping-Solution-Revolutionary-System-Stress-Free/dp/1401939422">https://www.amazon.ca/Tapping-Solution-Revolutionary-System-Stress-Free/dp/1401939422</a>
  <p className="black-text-video">45 Best Meditation Books of All Time. Scientifically reviewed by Jo Nash, Ph.D.</p>
  <a className="black-text-url" href="https://positivepsychology.com/meditation-books/#beginners">https://positivepsychology.com/meditation-books/#beginners</a>
  <p className="black-text-video">Breathwork: How to Use Your Breath to Change Your Life by Andrew Smart (2020)</p>
  <a className="black-text-url" href="https://www.amazon.ca/Breathwork-Breathing-Techniques-Exercises-Mindfulness/dp/1452181225">https://www.amazon.ca/Breathwork-Breathing-Techniques-Exercises-Mindfulness/dp/1452181225</a>
    
        </div>

        </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={AppIcon} alt="Your Image" />
          <p className="black-text-title ">Apps & Technology</p>
        </div>
        <div className="full-width">
        <p className="black-text-video" style={{ marginTop: "-4%" }}>Calm</p>
  <a className="black-text-url" href="https://www.calm.com/">https://www.calm.com/</a>
  
  <p className="black-text-video">Hay House</p>
  <a className="black-text-url" href="https://podtail.com/en/podcast/hay-house-meditations/">https://podtail.com/en/podcast/hay-house-meditations/</a>
  
  <p className="black-text-video">Tapping (EFT)</p>
  <a className="black-text-url" href="https://www.thetappingsolution.com/blog/tapping-solution-app/">https://www.thetappingsolution.com/blog/tapping-solution-app/</a>
  
  <p className="black-text-video">Headspace:</p>
  <a className="black-text-url" href="https://www.headspace.com/meditation/breathing-exercises">Breathing exercises to reduce stress</a>
        </div>
    </div>

      

      <div className="div-ten">
        <div className="flex-row">
          <img className="icon" src={ListIcon} alt="Your Image" />
          <p className="white-text-title ">Professional Standards and Guidelines </p>
        </div>
        <div className="full-width">
        <p className="white-text-video" style={{ marginTop: "-4%" }}>British Columbia College of Nurses and Midwives: Caring for yourself</p>
  <a className="white-text-url" href="https://www.bccnm.ca/RPN/learning/professional/Pages/fitness_to_practice_self-care.aspx">Case study about self-care and fitness to practice</a>

  <p className="white-text-video">College of Nurses of Ontario</p>
  <a className="white-text-url" href="https://www.cno.org/en/protect-public/employer-resources/employers-toolkit-sexual-abuse-prevention/supporting-nurses-in-self-care/">Supporting nurses in self-care</a>

        </div>
      </div>

      <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="black-text-title ">Support Organizations</p>
        </div>
        <div className="full-width">
        <p className="black-text-video" style={{ marginTop: "-4%" }}>The Canadian Mental Health Association</p>
  <a className="black-text-url" href="https://cmha.ca/brochure/mindfulness/">Mental health support agency and resource on relaxation techniques</a>

  <p className="black-text-video">Deepak Chopra</p>
  <a className="black-text-url" href="https://www.deepakchopra.com/articles/">Community: Supportive Articles and resources</a>

  <p className="black-text-video">Berkeley University: Greater Good in Action</p>
  <a className="black-text-url" href="https://ggia.berkeley.edu/about_us">https://ggia.berkeley.edu/about_us</a>

  <p className="black-text-video">Win Hof Method</p>
  <a className="black-text-url" href="https://www.wimhofmethod.com/breathing-exercises">Breathing exercises for more advanced breath practitioners</a>
</div>
      </div>
       

     
  </div>
  );
}

export default Relaxation;
