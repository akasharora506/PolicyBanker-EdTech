import React from 'react';
import { Button } from '@material-ui/core';
import './index.scss';

export default function Foot(props) {

    const { buttons } = props;
    return (
        <div className="module-footer">
            {buttons.map((btn) => <Button size="large"
                className={btn.class}
                onClick={btn.onClick}
                disabled={btn.disabled}
                key={btn.name}
            >{
                    btn.name
                }</Button>)}
        </div>
    )
}
