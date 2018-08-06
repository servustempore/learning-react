import React from 'react';
import Aux from '../../hocs/Aux';

const layout = (props) => (
    <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main>
    {props.children}
    </main>
    </Aux>
); 

export default layout;