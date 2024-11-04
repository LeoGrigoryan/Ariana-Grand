import React, { useEffect, useRef, useContext } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';
import './Pack.css';
import { Context } from '../../../App';

function Packli({ item, index }) {
    const ref = useRef();
    const view = useInView(ref, { once: false });
    const motGo = useAnimation();

    useEffect(() => {
        if (view) {
            motGo.start('end');
        } else {
            motGo.start('start');
        }
    }, [view, motGo]);

    return (
        <motion.div className='li' key={index} ref={ref} variants={{ start: { opacity: 0 }, end: { opacity: 1 } }} initial='start' animate={motGo} transition={{ duration: .7, delay: index * .05 }}>
            <li>
                <img src={item.img} alt={item.nam} />
                <div className="t name dircol center">
                    {item.nam}
                    <div className="t">{item.cont}</div>
                </div>
                <div className="t center">35.00</div>
            </li>
        </motion.div>
    );
}

export default function Pack() {
    const mail = useContext(Context);

    const objof = [
        {
            img: 'https://shop.arianagrande.com/cdn/shop/products/artboard-tshirt-front.png?v=1709828890&width=600',
            nam: 'eternal sunshine',
            cont: 'artboard t-shirt',
            fn: 'eternal sunshine artboard t-shirt',
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/products/es-cropped-tee.png?v=1709828909&width=600',
            nam: 'eternal sunshine cropped',
            cont: 't-shirt',
            fn: 'eternal sunshine cropped t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/products/white-tracklist.png?v=1709828884&width=600',
            nam: 'eternal sunshine tracklist',
            cont: 'white t-shirt',
            fn: 'eternal sunshine tracklist white t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/products/red-tracklist.png?v=1709828886&width=800',
            nam: 'eternal sunshine',
            cont: 'collage t-shirt',
            fn: 'eternal sunshine collage t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/files/black-tshirt_8af5672c-aefe-416b-8a89-1f22c19c23cd.png?v=1721925654&width=300',
            nam: 'the boy is mine',
            cont: 'black t-shirt',
            fn: 'the boy is mine black t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/files/TBIM-white-tee.png?v=1719427852&width=300',
            nam: 'the boy is',
            cont: 'mine t-shirt',
            fn: 'the boy is mine t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/files/black-muscle-tank_c4cf523a-99b7-4ac3-a2db-17fbfe1d9c34.png?v=1721925645&width=300',
            nam: 'tbim muscle tee',
            cont: '',
            fn: 'tbim muscle tee'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/files/TBIM-comic-tee-back.png?v=1719427866&width=600o',
            nam: 'tbim cat',
            cont: 'suit t-shirt',
            fn: 'tbim cat suit t-shirt'
        },
        {
            img: 'https://shop.arianagrande.com/cdn/shop/products/eternal-sunshine-cropped-white-t-shirt-front.png?v=1707428881&width=600',
            nam: 'ag7 cropped',
            cont: 'white t-shirt',
            fn: 'ag7 cropped white t-shirt'
        },
    ]

    const search = (mail.val ?? '').toString().toLowerCase();
    const filteredItems = objof.filter(item => item.fn.toLowerCase().includes(search));

    return (
        <section className='pack'>
            {
                filteredItems.map((item, index) => (
                    <Packli item={item} index={index} key={index} />
                ))
            }
        </section>
    );
}
