import './App.css';
import Layout from './components/Layout';
import Cover from './components/Cover';
import Animation from './components/Common/Animation';
import { useCallback, useRef, useState } from 'react';
import CoverInside from './components/CoverInside';
import OpeningSection from './components/OpeningSection/Index';
import Music from './assets/music.mp3';
import { Box, IconButton } from "@chakra-ui/react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

function App() {
  const [showDetailContent, setShowDetailContent] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMusicControl, setShowMusicControl] = useState(false);
  const audioRef = useRef(null);

  const handleClickDetail = useCallback(() => {
    setShowDetailContent(true);
    playMusic();
    setShowMusicControl(true);
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  };

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const renderContent = () => {
    if (!showDetailContent) return null;

    return (
      <Box>
        <CoverInside />
        <OpeningSection />
      </Box>
    );
  };

  return (
    <Layout>
      <audio ref={audioRef} src={Music} preload="auto" loop />
      
      {/* Music Control Button */}
      {showMusicControl && (
        <Box
          position="fixed"
          left="4"
          bottom="4"
          zIndex="999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <IconButton
            aria-label={isMuted ? "Unmute" : "Mute"}
            icon={isMuted ? <BsFillVolumeMuteFill size={20} color='white' /> : <BsFillVolumeUpFill size={20} color='white' />}
            onClick={toggleMute}
            variant="ghost"
            colorScheme="blackAlpha"
            rounded="full"
            size="md"
            backgroundColor="rgba(153, 122, 94, 1)"
            boxShadow="sm"
            _hover={{ 
              backgroundColor: 'gray.50',
              transform: 'scale(1.05)'
            }}
            transition="all 0.2s"
          />
        </Box>
      )}

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