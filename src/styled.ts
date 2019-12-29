import styled from 'styled-components';
import Slider from 'react-input-slider';
import bg from './assets/img/background.png';

export const StyledSlider = styled(Slider)`
  width: 400px !important;
  height: 400px !important;
  margin: 50px auto;
  background-image: url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  div:first-child {
    border-bottom: 2px dashed gray;
  }

  div:nth-child(2)::before {
    content: '';
    display: block;
    width: 0;
    height: 100vh;
    border-left: 2px dashed gray;
    position: absolute;
    top: -50vh;
    left: 0;
  }
`;
