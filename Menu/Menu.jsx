import React, { useEffect, useRef } from 'react';
import './Manu.css';
import { useAnimation, useInView, motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Item({ index }) {
    const obj = [
        {
            pic: 'https://www.arianagrande.com/files/2024/01/AG_ALL-RETAIL-LP-1-1.png',
            name: 'eternal sunshine (standard cover) lp',
            clas: 'g3-5'
        },
        {
            pic: 'https://www.arianagrande.com/files/2024/01/AG_D2C_LP_1.png',
            name: 'eternal sunshine (exclusive cover no. 1) lp',
            clas: 'g6-8'
        },
        {
            pic: 'https://www.arianagrande.com/files/2024/01/eternal-sunshine-exclusive-cover-no.-2-lp-1.png',
            name: 'eternal sunshine (exclusive cover no. 2) lp',
            clas: 'g9-11'
        },
        {
            pic: 'https://www.arianagrande.com/files/2024/02/AG_D2C_LP_3.png',
            name: 'eternal sunshine (exclusive cover no. 3) lp',
            clas: 'g3-5'
        },
        {
            pic: 'https://www.arianagrande.com/files/2024/02/ag-4.png',
            name: 'eternal sunshine (exclusive cover no. 4) lp',
            clas: 'g6-8'
        },
        {
            pic: 'https://www.arianagrande.com/files/2024/01/AG_TARGET-LP-.png',
            name: 'eternal sunshine (exclusive target cover) lp',
            clas: 'g9-11'
        },
    ]

    const ref = useRef();
    const view = useInView(ref, { once: false })
    const motGo = useAnimation();

    useEffect(() => {
        if (view) {
            motGo.start('end')
        } else {
            motGo.start('start')
        }
    }, [view, motGo])

    return (
        <motion.div key={index} ref={ref} variants={{ start: { opacity: 0 }, end: { opacity: 1 } }} initial='start' animate={motGo} transition={{ duration: 1, delay: index * .1 }} className='okay'>
            <div className="item dircol center">
                <img src={obj[index].pic} />
                <div className="textpart">
                    <div className="t">{obj[index].name}</div>
                    <div className="t">$33.00</div>
                </div>
            </div>
            <div className="absoview">
                <div className="homebut center">
                    <div className="t">buy</div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Menu() {
    const count = new Array(3).fill('')
    const countsec = new Array(3).fill('')
    return (
        <menu>
            <div className="headingp">
                <h2 className='cfff'>store</h2>
            </div>
            <div className="allstaff">
                <div className="contsof">
                    {
                        count.map((_, index) => (
                            <Item index={index + 3} />
                        ))
                    }
                </div>
                <div className='contsof'>
                    {
                        count.map((_, index) => (
                            <Item index={index + 3} />
                        ))
                    }
                </div>
            </div>
            <div className="headingp r-end">
                <div className="t">
                    <Link to='store'>
                        shop all
                    </Link>
                </div>
            </div>
        </menu >
    )
}
