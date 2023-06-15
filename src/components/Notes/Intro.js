import React from 'react';
import { View } from '@adobe/react-spectrum';

const Intro = () => (
  <View marginX="size-500">
    <p>Timecode Indexing Module (0.1.1)</p>
    <p>
      Project Manager and Contact:{' '}
      <a
        href="https://engineering.buffalo.edu/civil-structural-environmental/people/post-docs.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Douglas Lambert
      </a>
      (<a href="mailto:bert@buffalo.edu">bert@buffalo.edu</a>)
    </p>
    <p>
      TIM is a tool for indexing and annotation of audio or video (a/v) recordings, optimized for{' '}
      <strong>oral history interview markup</strong>. The TIM editor allows casual users or professional researchers to{' '}
      <strong>produce, manage, and format timecode index metadata</strong> for multimedia display systems like{' '}
      <a href="https://www.oralhistoryonline.org/" target="_blank" rel="noopener noreferrer">
        OHMS
      </a>{' '}
      and{' '}
      <a href="https://www.aviaryplatform.com/" target="_blank" rel="noopener noreferrer">
        Aviary
      </a>
      . TIM can also be used to edit text-based a/v files like <strong>WebVTT</strong>, and can be used as a stand-alone,{' '}
      <strong>free-form note taking tool</strong> for a/v.
    </p>
    <p>
      This open-source version of{' '}
      <a href="https://github.com/cartograforce/tim" target="_blank" rel="noopener noreferrer">
        TIM
      </a>{' '}
      (0.1.1) was established on the project manager’s GitHub account (
      <a href="https://github.com/cartograforce/" target="_blank" rel="noopener noreferrer">
        cartograforce
      </a>
      ) in 2023 and includes <strong>expanded and updated documentation.</strong> This effort was supported by the {' '}
      <a
        href="https://www.buffalo.edu/digital-scholarship-studio-network.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        DSSN
      </a>
      , at the{' '}
      <a href="https://www.buffalo.edu/" target="_blank" rel="noopener noreferrer">
        University at Buffalo
      </a>
      , NY and carried out with the help of {' '}
      <a href="mailto:nilkumar@buffalo.edu">Nilkumar Dhamecha</a> (Computer science) {' '}
      and <a href="mailto:csauerwa@buffalo.edu">Chris Sauerwald</a> (Information and Library Science).
    </p>
    <p>
      TIM (0.1.0) was sponsored by the{' '}
      <a href="https://www.c2dh.uni.lu/" target="_blank" rel="noopener noreferrer">
        C²DH
      </a>{' '}
      at the{' '}
      <a href="https://wwwen.uni.lu/" target="_blank" rel="noopener noreferrer">
        University of Luxembourg
      </a>{' '}
      and supported by the C²DH’s{' '}
      <a href="https://www.c2dh.uni.lu/people/lars-wieneke" target="_blank" rel="noopener noreferrer">
        Digital Research Infrastructure
      </a>{' '}
      team (
      <a href="https://www.c2dh.uni.lu/people/douglas-lambert" target="_blank" rel="noopener noreferrer">
        Douglas Lambert
      </a>{' '}
      and{' '}
      <a href="https://www.c2dh.uni.lu/people/lars-wieneke" target="_blank" rel="noopener noreferrer">
        Lars Wieneke
      </a>
      ). Many thanks to Zack Ellis of{' '}
      <a href="https://theirstory.io/" target="_blank" rel="noopener noreferrer">
        TheirStory
      </a>{' '}
      and developers Mark Boas and Laurian Gridinoc at{' '}
      <a href="https://hyper.audio/" target="_blank" rel="noopener noreferrer">
        Hyperaudio
      </a>{' '}
      for contributions far above and beyond what was expected.
    </p>
    <p>
      For more information, refer to {' '}
      <a href="https://github.com/C2DH/tim/projects/1" target="_blank" rel="noopener noreferrer">
      github.com/cartograforce/tim.
      </a>{' '}
    </p>
    <div style={{ marginTop: 100 }}>
      <a href="https://www.buffalo.edu/" target="_blank" rel="noopener noreferrer">
        <img
          src="/tim/assets/UB_Primary_SUNY.png"
          alt="University At Buffalo logo"
          height="100"
          style={{ verticalAlign: 'middle', marginRight: 50}}
        />
      </a>
      <a href="https://www.c2dh.uni.lu/" target="_blank" rel="noopener noreferrer">
        <img
          src="/tim/assets/c2dh_512.jpg"
          alt="C²DH logo"
          height="100"
          style={{ verticalAlign: 'middle', marginRight: 50 }}
        />
      </a>
      <a href="https://theirstory.io/" target="_blank" rel="noopener noreferrer">
        <img
          src="/tim/assets/TheirStory_Logo_Clean.png"
          alt="TheirStory logo"
          height="100"
          style={{ verticalAlign: 'middle', marginRight: 30 }}
        />
      </a>
      <a href="https://hyper.audio/" target="_blank" rel="noopener noreferrer">
        <img src="/tim/assets/hyperaudio.svg" alt="Hyperaudio logo" height="30" style={{ verticalAlign: 'middle' }} />
      </a>
    </div>
  </View>
);

export default Intro;
