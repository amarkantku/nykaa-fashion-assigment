import React from 'react';
import { Dimmer, Image } from 'semantic-ui-react'
import loder from '../../SvgIcon/loder-ripple.svg';

const Loader = () => (
    <div>
      <Dimmer active inverted>
        <Image src={loder} centered size='mini' />
      </Dimmer>
    </div>
)

export default Loader;
