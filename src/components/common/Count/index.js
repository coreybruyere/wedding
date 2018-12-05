import React from "react";
import styled, { keyframes } from "styled-components";
import Countdown from "react-countdown-now";
import { Flex, Text } from "rebass";
import { FormattedMessage } from "react-intl";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const CountWrap = styled(Flex)`
  animation: ${fadeIn} 1s ease-in;
`;

const Time = styled(Text)`
  line-height: 1;
  color: #403b32;
`;

const Completionist = () => <span>June 30, 2019</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, completed }) => {
  if (completed) {
    // Render a completed state

    return <Completionist />;
  } else {
    // Render a countdown

    return (
      <CountWrap as="time" pt={1} justifyContent="center" alignItems="center">
        <Time fontSize={6} pr={1}>
          {days}
        </Time>{" "}
        <FormattedMessage id="days" />
      </CountWrap>
    );
  }
};

export const Count = ({ date }) => (
  <Countdown date={"Jun 30, 2019 01:00:00"} renderer={renderer} />
);

// const Item = styled(Flex)`
//   line-height: 1;
// `;

// const Unit = styled(Text)``;

// export class Countdown extends Component {
//   state = {
//     days: 0,
//     hours: 0,
//     hours: 0,
//     min: 0,
//     sec: 0,
//     millisec: 0
//   };

//   componentDidMount() {
//     // Update this thing every second
//     this.interval = setInterval(() => {
//       const date = this.calculateCountdown(this.props.date);
//       date ? this.setState(date) : this.stop();
//     }, 1000);
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   calculateCountdown(endDate) {
//     let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

//     if (diff <= 0) return false;

//     const timeLeft = {
//       years: 0,
//       days: 0,
//       hours: 0,
//       min: 0,
//       sec: 0,
//       millisec: 0
//     };

//     // calculate time difference between now and expected date
//     if (diff >= 365.25 * 86400) {
//       // 365.25 * 24 * 60 * 60
//       timeLeft.years = Math.floor(diff / (365.25 * 86400));
//       diff -= timeLeft.years * 365.25 * 86400;
//     }
//     if (diff >= 86400) {
//       // 24 * 60 * 60
//       timeLeft.days = Math.floor(diff / 86400);
//       diff -= timeLeft.days * 86400;
//     }
//     if (diff >= 3600) {
//       // 60 * 60
//       timeLeft.hours = Math.floor(diff / 3600);
//       diff -= timeLeft.hours * 3600;
//     }
//     if (diff >= 60) {
//       timeLeft.min = Math.floor(diff / 60);
//       diff -= timeLeft.min * 60;
//     }
//     timeLeft.sec = diff;

//     return timeLeft;
//   }

//   stop() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const countDown = this.state;
//     return (
//       <CountWrap>
//         <Item justifyContent="center" alignItems="center">
//           <Unit fontSize="3rem" pr={2}>
//             {countDown.days}
//           </Unit>
//           <span>{countDown.days === 1 ? "Day" : "Days"}</span>
//         </Item>

//         {/* <Item justifyContent="center" alignItems="center">
//           <Unit fontSize="3rem" pr={2}>
//             {countDown.hours}
//           </Unit>
//           <span>Hours</span>
//         </Item> */}
//       </CountWrap>
//     );
//   }
// }
