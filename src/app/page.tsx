import React from 'react';
import Navbar from '../components/Navbar';
import Clock from '../components/Clock';
import Timeline from '../components/TimelineProps';
import Youtube from '../components/Youtube';

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen home">
      <Navbar />
      <h1 className="py-10 text-2xl text-center text-white text-opacity-40 opacity-80" style={{ color: 'rgba(255, 255, 255, 0)', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white' }}>
        Here is Your Timeline
      </h1>
      <Timeline tasks={tasks} />
      <Youtube />
      <Clock />
    </div>
  );
};

export default Page;