import React, { useEffect, useState } from 'react';
import { NavigationTwoContainer, NavTwoOne, NavTwoTwo } from './style';

function NavigationTwo() {
  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);

  return (
    <NavigationTwoContainer>
        <NavTwoOne>
            <button className='NavTwoBtn'>
                <span>Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="26" viewBox="0 0 66 26" fill="none">
                    <rect width="66" height="8" fill="#2E2F33"/>
                    <rect x="31" y="18" width="35" height="8" fill="#2E2F33"/>
                </svg>
            </button>
            <div className='nav__welcome'>
              <div className='nav__welcome__date'>
                {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                })}
              </div>
              <div className='nav__welcome__txt'>
                <p>Bem-vindo</p>
                <p>Você está na Surto</p>
              </div>
            </div>
            <div className='nav__welcome__bottom'>
                <p>Área do<br/> cliente</p>
            </div>
        </NavTwoOne>
        <NavTwoTwo>
          <div className='NavTwoTop'>
              
          </div>
          <div className='NavTwoBottom'>

          </div>
        </NavTwoTwo>
    </NavigationTwoContainer>
  )
}

export default NavigationTwo