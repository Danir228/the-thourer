import React from 'react';
import {Col, Row} from 'reactstrap';
import SectionSixItem from './components/section-6-price-item';
import WhenItem from './components/section-6-when-item';
import block1 from './images/block1.png';
import block2 from './images/block2.png';
import block3 from './images/block3.png';
import block4 from './images/block4.png';

import './section-6.css';

function SectionSix() {
    return (
        <>
            <Row>
                <Col className="section-6_title">
                    <h1 className="section-6_title_item-1">Разные уровни подписок.</h1>
                    <h1 className="section-6_title_item-2">Выберите удобный</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WhenItem
                    month={'Месяц'}
                    quarter={'Квартал'}
                    percent1={'-5%'}
                    year={'Год'}
                    percent2={'-15%'}/>
                </Col>
            </Row>
            <Row className="section-6_price_items">
                <Col>
                    <SectionSixItem
                    image={block1}
                    price={'0.00 ₽'}
                    rate={'Бесплатный тариф'}
                    text1={'1 проект'}
                    text2={'2 комнаты'}
                    text3={'4 панорамы'}
                    text4={'Нельзя делиться туром'}
                    text5={'Аналитика поведения внутри модели'}/>
                </Col>
                <Col>
                    <SectionSixItem
                    image={block2}
                    price={'566 ₽ /мес.'}
                    rate={'Базовый тариф'}
                    text1={'До 3 проектов'}
                    text2={'∞ комнат'}
                    text3={'∞ панорам'}
                    text4={'Можно делиться туром'}
                    text5={'Аналитика поведения внутри модели'}/>
                </Col>
                <Col>
                    <SectionSixItem
                    image={block3}
                    price={'1 900 ₽ /мес.'}
                    rate={'Продвинуый тариф'}
                    text1={'До 15 проектов'}
                    text2={'∞ комнат'}
                    text3={'∞ панорам'}
                    text4={'Можно делиться туром'}
                    text5={'Аналитика поведения внутри модели'}/>
                </Col>
                <Col>
                    <SectionSixItem
                    image={block4}
                    price={'7 100 ₽ /мес.'}
                    rate={'Бизнес тариф'}
                    text1={'До 50 проектов'}
                    text2={'∞ комнат'}
                    text3={'∞ панорам'}
                    text4={'Можно делиться туром'}
                    text5={'Аналитика поведения внутри модели'}/>
                </Col>
            </Row>
        </>
    )
}

export default SectionSix;