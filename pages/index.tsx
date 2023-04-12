import Layout from '../components/Layout'
import {API_URL} from '@/config/index'
import EventItem from '@/components/EventItem'
import { GetServerSideProps, NextPage } from 'next';

type Event = {
  id: number;
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string[];
  date: string;
  time: string;
  description: string;
  image: string;
};

type HomePageProps = {
  events: Event[];
};

const HomePage: NextPage<HomePageProps> = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (<EventItem key={evt.id} evt= {evt}/>))}
    </Layout>
  )
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events: Event[] = await res.json();

  return {
    props: { events },
  };
};
