import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import EventItem from '@/components/EventItem'

const EventPage = ({ events }) => {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (<EventItem key={evt.id} evt= {evt}/>))}
    </Layout>
  )
};

export default EventPage;

export const getServerSideProps= async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events= await res.json();

  return {
    props: { events:events.slice(0,3) },
  };
};
