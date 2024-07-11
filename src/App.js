import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Cover from './components/Cover';
import Animation from './components/Common/Animation';
import { useCallback, useRef, useState } from 'react';
import CoverInside from './components/CoverInside';
import OpeningSection from './components/OpeningSection/Index';
import { Box } from '@chakra-ui/react';
import Music from './assets/music.mp3';



function App() {
  const [showDetailContent, setShowDetailContent] = useState(false);
  const audioRef = useRef(null);



  const handleClickDetail = useCallback(() => {
    setShowDetailContent(true);
    playMusic();
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const renderContent = () => {
    if (!showDetailContent) return null;

    return (
      <Box>
        <CoverInside />
        <OpeningSection />
      </Box>
    );

  }





  return (
    <Layout>
      <audio ref={audioRef} src={Music} />
      {!showDetailContent && (
        <Animation>
          <Cover loaded={showDetailContent} onDetail={handleClickDetail} />
        </Animation>
      )}
      {showDetailContent && (
        <>
          {renderContent()}
        </>
      )}
    </Layout>
  );
}

export default App;
