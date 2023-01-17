import styled from 'styled-components';

export const Container = styled.div`
width: 280px;
margin: 16px  auto;
border: 1px solid rgb(236, 236, 236);
border-radius: 4px;
box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;

export const SectionTitle = styled.h2`
font-size: 22px;
text-align: center;
`;

export const BlockButton = styled.div`
display: flex;
justify-content: center;
gap: 10px;

`;

export const FeedbackButton = styled.button`
border-radius: 4px;
width: 80px;
height: 30px;
text-align: center;
border: none;
font-size: 14px;
font-weight: 600;
background-color: #2196f3;
color: white;
`;

export const NotificationTitle = styled.p`
font-size: 16px;
text-align: center;
font-weight: 600;
`;

export const StatisticsStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
list-style: none;
font-size: 18px;
font-weight: 600;
`;



// element.style {
//     width: 240px;
//     margin: 0 auto;
//     border: 1px solid;
//     border-radius: 4px;
// }

// , Section, FeedbackOptions, Notification, Statistics
// import { StatSection, Title, StatList } from './Statistics.styled';