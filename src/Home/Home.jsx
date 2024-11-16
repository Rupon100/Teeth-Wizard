 
import Banner from '../Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';
import Feedback from '../FeedBack/Feedback';

const Home = () => {

    const { services, feedback } = useLoaderData();
    console.log(services);

    return (
        <div className=''>
            <Banner></Banner>
            <div className='p-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0,4).map((service, i) => <ServiceCard key={i} service={service}></ServiceCard>)
                }
            </div>
            <Link to='/alltreatments' className='btn mx-12'>Show More</Link>
            <div className='my-12'>
                <h1 className='mx-12 font-semibold text-2xl'>Feedback</h1>
                <div className='p-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        feedback.map((feedbackData, i) => <Feedback key={i} feedback={feedbackData}></Feedback>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;