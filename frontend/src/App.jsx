import Navigation from './components/Navigation'
import RevitPCFFeatures from './components/RevitPCF/RevitPCFFeatures';
import RevitPCFHero from './components/RevitPCF/RevitPCFHero'
import RevitPCFPricings from './components/RevitPCF/RevitPCFPricings';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className='min-h-screen bg-gray-100 text-black'>
            <Navigation/>
            <RevitPCFHero/>
            <RevitPCFFeatures/>
            <RevitPCFPricings/>
            <Contact/>
        </div>
    );
};

export default App;
