import React from 'react';
import { styled } from '@mui/system';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import * as styles from 'styles/tab.module.css';

const experienceData = [
  {
    affiliation: 'Shalom Inc.',
    position: 'Software Engineer',
    date: 'December 2017 - July 2021',
    content: [
      'Collaborated with product managers and UI/UX designers to develop a web application using JavaScript, jQuery, and BackboneJS within an MVC framework.',
      'Maintained an internal management site using React and applied a Bootstrap-based template to meet project requirements.',
      'Integrated a React Native application into hardware kiosks using WebSocket and consumed RESTful APIs with React Hooks.',
      'Designed and developed multiple automated applications and scheduling web crawlers using Python on Google Cloud Platform.'
    ]
  },
  {
    affiliation: 'Sinica Academia',
    position: 'Reasearch Assistant',
    date: 'September 2016 - July 2017',
    content: [
      'Raw data processing and cleaning for NHI Research Database.',
      'Data visualization with D3.js, Javascript, HTML, and CSS.',
      'Analyze data with statistical method by Matlab and Python.'
    ]
  },
  {
    affiliation: 'National Taiwan University',
    position: 'Student',
    date: 'August 2010 - July 2016',
    content: [
      'Publication: “Multi-task Learning for Face Identification and Attribute Estimation”, 2017 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2017.',
      'Master of Science in Graduate Institute of Networking and Multimedia. Graduated in 2016.',
      'Bachelor of Computer Sceince. Graduated in 2014.'
    ]
  }
];

export default function UnstyledTabsVertical () {
  return (
    <>
      <Tabs className={ styles['normal-tab'] } defaultValue={0} orientation="vertical">
        <TabsList>
          {
            experienceData.map((e, idx) =>
              <Tab key={idx} slots={{ root: 'a' }}>
                {e.affiliation}
              </Tab>
            )
          }
        </TabsList>
        {
          experienceData.map((e, idx) =>
            <TabPanel key={idx} value={idx}>
              <h3 style={{ color: 'white' }}>{e.position}</h3>
              <h5>{e.date}</h5>
              <ul className="square">
                {e.content.map((c, cid) => <li key={cid}>{c}</li>)}
              </ul>
            </TabPanel>
          )
        }
      </Tabs>
      <div className={ styles['mobile-tab'] }>
        {experienceData.map((e, idx) =>
          <article key={idx}>
            <h3 style={{ color: 'white' }}>{e.position} @ <span style={{ color: '#ff7f50', fontWeight: 'bold' }}>{e.affiliation}</span></h3>
            <h5>{e.date}</h5>
            <ul className="square">
              {e.content.map((c, cid) => <li key={cid}>{c}</li>)}
            </ul>
          </article>
        )}
      </div>
    </>
  );
}

const Tab = styled(BaseTab)`
  color: #E5E5E5;
  cursor: pointer;
  font-size: 0.8em;
  background-color: transparent;
  width: 180px;
  text-align: right;
  padding: 1.5em;

  &:hover {
    color: white;
    border-left: 1px solid #ff7f50;
    font-weight: bold;
  }

  &.${tabClasses.selected} {
    color: white;
    border-left: 1px solid #ff7f50;
    font-weight: bold;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-size: 1em;
  padding-left: 1.5em;
`;

const Tabs = styled(BaseTabs)`
  display: flex;
  gap: 1em;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  display: flex;
  gap: 1em;
  padding-left: 0.6em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);
