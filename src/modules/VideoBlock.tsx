import React from 'react'
import styled from 'styled-components';
import Filters from '../components/Filters';
import MainCards from './MainCards';

const Title = styled.h2`
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 61px;
`

const VideoFrame = styled.div`
    display: flex;
    justify-content: center;
`

const VideoBlock = () => {
    return (
        <section>
            <Title>Видео о товарах для котов</Title>
            <VideoFrame>
                <iframe 
                    width="100%" 
                    height="663"
                    src="https://www.youtube-nocookie.com/embed/c6x-jIuEX6k" 
                    title="50 Вещей Для Кошек с Aliexpress, От Которых Ты Офигеешь / Безумные Вещи с Алиэкспресс + Конкурс"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen={true}>
                </iframe>
            </VideoFrame>
        </section>
    );
}

export default VideoBlock;