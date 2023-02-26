import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { InitialScreenContainer } from './style';
import { AnimatePresence, motion } from 'framer-motion';
import NavigationOne from '../NavOne';

function InitialScreen() {
  const [ close, setClose ] = useState(false);

  function closeInitialScreen(){
    setClose(true);
  }

  console.log(close);

  const stylesDiv = {
    closeDiv:{
      display: close ? 'none' : 'flex',
    }
  }

  return (
    <AnimatePresence mode='wait'>
      { close ? '' : 
        <motion.div
          transition={{
            delay: 0.2,
            x: { duration: 1.1 },
            default: { ease: "linear" }
          }}
          key="animated__div"
          initial={{
            opacity: 1,
          }}
          animate={{
            overflow: 'hidden',
          }}
          exit={{
            width: 0,
          }}
          className='animated__div'
          >
          <InitialScreenContainer>
            <NavigationOne />
              <Switch.Root className="SwitchRoot" id="airplane-mode" onClick={() => closeInitialScreen()}>
                  <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            {/* <InitialScreenContainer>
                <Switch.Root className="SwitchRoot" id="airplane-mode" onClick={() => closeInitialScreen()}>
                <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
              </InitialScreenContainer> */}
        </InitialScreenContainer>
        </motion.div>
        }
      </AnimatePresence>
  )
}

export default InitialScreen