import React from 'react';
import KeynoteData from '../data/keynotes.yml';
import '../static/stylesheets/keynotes.css'
import {GitHub, Linkedin, Twitter} from 'react-feather'
import IconLink from '../components/icon-link'
import SectionHeading from '../components/section-heading';

const Keynotes = () => {
    return (
        <div className='center-it'>
            <div>
                <div className='heading'>
                    <SectionHeading>
                        Keynotes
                    </SectionHeading>
                </div>
            
            <div className='flex-it'>
            {KeynoteData.map((keynote) => (
        <div key={keynote.id} as='li' className='keynote_card' {...keynote}>
            <div class="layered-card">
                <div class="layered-card__content">
                <img className='keynote_image' src={keynote.image} />
                </div>
            </div>
            <div className='keynote_detail'>
                <name className='keynote_name'>{keynote.name}</name>
                <br></br>
                <bio className='keynote_bio'>{keynote.bio}</bio>
                <div className='keynote_social'>
                {keynote.twitter && (
                    <IconLink href={keynote.twitter}>
                        <Twitter />
                    </IconLink>)}
                {keynote.github && (
                    <IconLink href={keynote.github}>
                        <GitHub />
                    </IconLink>)}
                {keynote.linkedin && (
                    <IconLink href={keynote.linkedin}>
                        <Linkedin />
                    </IconLink>)}
                </div>
            </div>
        </div>
        ))}
        </div>
        </div> 
    </div>
    )
}

export default Keynotes;