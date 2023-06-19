'use client'
// Youtube.js
import { useState } from 'react';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';

const Youtube: React.FC = () => {
  const [videoId, setVideoId] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = (event.target as any).elements.url.value;
    const id = url.split('v=')[1];
    setVideoId(id);
    setShowVideo(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='fixed bottom-0 right-0'>
        <input name="url" type="text" placeholder="Masukkan URL video YouTube" className="my-2 bg-transparent"/>
        <button type="submit" className="mx-3">watch</button>
      </form>
      {showVideo && (
        <Draggable handle=".handle">
          <div className='p-3'>
            <div className="p-1 bg-transparent cursor-move handle opacity-40">drag</div>
            <YouTube videoId={videoId} />
            <button onClick={() => setShowVideo(false)} className='opacity-50'>close</button>
          </div>
        </Draggable>
      )}
    </>
  );
}
export default Youtube;