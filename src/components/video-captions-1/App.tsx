import React, { useEffect, useState, useRef } from 'react';
import './App.css';

interface IWindow extends Window {
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}

declare var window: IWindow;

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
  item(index: number): SpeechRecognitionResult;
}

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [subtitles, setSubtitles] = useState<string[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);

  const processSubtitles = (newTranscript: string): void => {
    const words = newTranscript.split(' ');
    const limitedWords = words.slice(Math.max(words.length - 17, 0));
    setSubtitles(limitedWords);
  };
  const handleListen = (): void => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const latestTranscript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join(' ');
        processSubtitles(latestTranscript);
      };

      recognition.start();

      recognition.onend = () => {
        if (isListening) {
          recognition.start();
        }
      };

      setIsListening(true);

      videoRef.current?.addEventListener('pause', () => {
        recognition.stop();
        setIsListening(false);
      });

      videoRef.current?.addEventListener('ended', () => {
        recognition.stop();
        setIsListening(false);
      });
    } else {
      console.error('Speech recognition not supported in this browser.');
    }
  };

  useEffect(() => {
    videoRef.current?.addEventListener('play', handleListen);
    return () => {
      videoRef.current?.removeEventListener('play', handleListen);
    };
  }, [handleListen]);

  return (
      <div className="content-wrapper">
        <div className="video-content">
          <video ref={videoRef} width="720" height="410" controls>
            <source src={require('../../assets/video/google-data-security-video.mp4')} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="subtitle-content">
          {subtitles.map((word, index, array) => {
            if (index === array.length - 3) {
              return <span key={index} className="highlight">{array.slice(index, index + 3).join(' ')}</span>
            } else if (index < array.length - 3) {
              return <span key={index}>{word} </span>
            } else {
              return null;
            }
          })}
        </div>
      </div>
  );
};

export default App;