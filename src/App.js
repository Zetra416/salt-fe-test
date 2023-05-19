import './App.css';
import { useState } from 'react';
import Dropdown from './components/dropdown';

// assets
import logo from './assets/logo.png';
import burger from './assets/burger.png';
import background1 from './assets/background-1.png';
import background2 from './assets/background-2.png';
import scroll from './assets/scroll.png';
import prev from './assets/prev.png';
import next from './assets/next.png';
import coreVal from './assets/core-value.png';
import acc from './assets/acc.png';
import speed from './assets/speed.png';
import exhaust from './assets/exhaust.png';
import background3 from './assets/background-3.png';
import logo2 from './assets/logo-2.png';
import arrNext from './assets/arrow-next.png';
import arrPrev from './assets/arrow-back.png';

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageCore, setCurrentPageCore] = useState(0);

  const page2contents = [
    {
      'title': 'Who we are',
      'subtitle': 'Technology Company',
      'content': 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      'title': 'What we do',
      'subtitle': 'Professional Brand Management',
      'content': 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      'title': 'How we do',
      'subtitle': 'Strategize, Design, Collaborate',
      'content': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
    },
  ]

  const coreValues = [
    {
      'title': 'Dedication',
      'content': 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.'
    },
    {
      'title': 'Intellectual Honesty',
      'content': 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.'
    },
    {
      'title': 'Curiosity',
      'content': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
    },
  ]

  const valueImages = [
    {
      'img': acc,
      'title': 'Accesories'
    },
    {
      'img': speed,
      'title': 'Speed Improvement'
    },
    {
      'img': exhaust,
      'title': 'Exhaust'
    },
  ]

  const footerText = [
    {
      'title': 'Who we are',
      'link': ''
    },
    {
      'title': 'Our Values',
      'link': ''
    },
    {
      'title': 'The Perks',
      'link': ''
    },
  ]
  
  function prevHandler() {
    if(currentPage > 0) {
      setCurrentPage(currentPage-1);
    }
  }

  function nextHandler() {
    if(currentPage < valueImages.length-1) {
      setCurrentPage(currentPageCore+1);
    }
  }

  function prevHandlerCore() {
    if(currentPageCore > 0) {
      setCurrentPageCore(currentPageCore-1);
    }
  }

  function nextHandlerCore() {
    if(currentPageCore < valueImages.length-1) {
      setCurrentPageCore(currentPageCore+1);
    }
  }

  return (
    <div className="App">
      <div className='first page'>
        <div className="flex justify-between inline-block h-16">
          <img className='mx-6 my-4 w-40 h-8' src={logo} alt='company logo'/>
          <img className='mx-6 my-7 w-5 h-3' src={burger} alt='burger menu'/>
        </div>
        <div>
          <img className='w-98' src={background1} alt='background benjamin'/>
          <img className='-mt-24 md:-mt-36 lg:-mt-64' src={background2} alt='background blue rectangle'/>
          <div className='-mt-64 mb-30 mx-8 lg:-mt-200 lg:mb-128'>
            <h2 className='font-rubik text-4xl font-medium text-white text-left leading-8 mb-4 md:text-8xl lg:text-9xl'>
              Discover<br/> Your Wonder
            </h2>
            <p className='font-rubik text-base font-normal text-white text-left leading-6 md:text-2xl lg:text-6xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
      
      <div className='mt-16 mx-0 flex flex-col items-center md:mt-48 lg:-mt-72'>
        <img class="z-50 w-10 md:w-32 lg:w-64" src={scroll} alt='scroll button'/> 
      </div>

      <div className='second page'>
        <div>
          <div className='mx-8 mt-8 min-w-fit'>
            <p className='font-rubik text-4xl font-medium text-sky-500 text-left leading-8 mb-6 md:text-8-xl lg:text-9xl lg:mb-12'>{page2contents[currentPage].title}</p>
            <p className='font-rubik text-lg font-normal text-black text-left leading-6 mb-2 md:text-6-xl md:mb-6 lg:text-8xl lg:mb-8'>{page2contents[currentPage].subtitle}</p>
            <p className='font-rubik text-sm font-normal text-slate-400 text-left leading-6 md:text-4-xl lg:text-6xl'>{page2contents[currentPage].content}</p>
          </div>
          <div className='flex justify-between inline-block my-2'>
            <div className='mx-8 mt-12 flex space-x md:mt-24 lg:mt-36'>
              <p className='font-rubik text-base font-medium text-black text-left leading-8 mb-4 pr-2 md:text-2xl lg:text-6xl'>0{currentPage+1}</p>
              <p className='font-rubik text-base font-normal text-zinc-300 text-left leading-8 mb-4 md:text-2xl lg:text-6xl'>/ 0{page2contents.length}</p>
            </div>
            <div className='mx-8 mt-8 flex md:mt-24 lg:mt-24'>
              <button className='w-12 md:w-20 lg:w-24' onClick={prevHandler}><img src={prev} alt='previous button'/></button>
              <button className='w-12 md:w-20 lg:w-24' onClick={nextHandler}><img src={next} alt='next button'/></button>
            </div>
          </div>
        </div>
      </div>

      <div className='third page bg-zinc-50'>
        <div className='mx-8 mt-8 pt-10'>
          <h2 className='font-rubik text-4xl font-medium text-sky-500 text-center leading-8 mb-6 md:text-8-xl lg:text-9xl lg:mb-12'>
            Our Core Values
          </h2>
          <p className='font-rubik text-base font-medium text-slate-400 text-left leading-8 mb-4 pr-2 md:text-2xl lg:text-6xl'>
          Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. 
          <br/>
          <br/>
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
          </p>
          {
            coreValues.map((item)=> {
              return (
                <li className='unique ml-4 mt-8'>
                  <h1 className='font-rubik text-2xl font-normal text-black text-left leading-6 ml-2 mb-4 md:text-5-xl md:mb-8 lg:text-7xl lg:mb-10'>{item.title}</h1>
                  <h2 className='font-rubik text-base font-normal text-zinc-400 text-left leading-8 ml-2 mb-4 md:text-2xl lg:text-6xl'>{item.content}</h2>
                </li>
              )
            })
          }
        </div>
        <img className='' src={coreVal} alt='core value'/>
      </div>

      <div className='fourth page bg-sky-500 p-4 md:p-8 lg:p-14'>
        <div className='bg-white p-4 md:p-8 lg:p-14'>
          <h2 className='font-rubik text-4xl font-bold text-sky-500 text-left leading-8 mb-6 md:text-8-xl md:mb-12 lg:text-8xl lg:mb-12 lg:mb-20'>
            OUR SPECIALITY
          </h2>
          <p className='font-rubik text-sm font-light text-slate-800 text-left leading-6 md:text-4-xl md:mb-12 lg:text-4xl lg:mb-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
          </p>

          <div className='mt-4 mx-0 flex flex-col items-center md:mt-6 lg:-mt-8'>
            <img className='w-36 flex flex-col items-center md:w-48 lg:w-96' src={valueImages[currentPageCore].img} alt='icon'/>
            <h2 className='font-rubik text-base font-normal text-zinc-400 text-center leading-8 ml-2 mb-4 md:text-2xl lg:text-4xl'>{valueImages[currentPageCore].title}</h2>
            <p className='font-rubik text-sm font-light text-slate-400 text-center leading-6 md:text-4-xl lg:text-4xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </p>
            <div className='w-80 mx-8 mt-8 flex justify-between md:mt-24 lg:mt-24'>
              <button className='w-12 md:w-20 lg:w-24' onClick={prevHandlerCore}><img src={arrPrev} alt='previous arrow'/></button>
              <button className='w-12 md:w-20 lg:w-24' onClick={nextHandlerCore}><img src={arrNext} alt='next arrow'/></button>
            </div>
          </div>
        </div>
      </div>

      <div className='fifth page h-screen bg-cover md:-mb-20 lg:h-full lg:bg-contain' style={{backgroundImage: `url(${background3})`}} >
        <img className='w-64 pt-8 px-4 md:w-96 lg:w-192' src={logo2} alt='logo 2'/>

        <div className='bg-white p-4 m-8 h-64 lg:h-4/6'>
          <div>
            <Dropdown/>
          </div>
        </div>

        <div className=''>
          {
            footerText.map((item) => {
              return(
                <div className='mx-8 my-4'>
                  <p className='py-2 font-rubik text-base font-normal text-white text-left leading-6 md:text-2xl lg:text-6xl lg:mt-20'>{item.title}</p>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
