import './App.css';
import Step1 from './component/Step1';
import { ReactComponent as RoqquLogo } from "./assets/roqqu-logo.svg";


function App() {
  return (
    <div className="App">
      <section>
        <RoqquLogo />
        <h1 className='steps'>Step 1 <span className='totalsteps'>/ 5</span></h1>
        <div className='progress-bar'>
          <div className='progress-stage-1 stage'></div>
          <div className='progress-stage-2 stage'></div>
          <div className='progress-stage-3 stage'></div>
          <div className='progress-stage-4 stage'></div>
          <div className='progress-stage-5 stage'></div>
        </div>
        <Step1 />
      </section>

    </div>
  );
}

export default App;
