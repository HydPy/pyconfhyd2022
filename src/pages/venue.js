import React from 'react';
import SectionHeading from '../components/section-heading';
import VenueData from '../data/venue.yml';
import '../assets/stylesheets/venue.css'
const Venue = ({data }) => {
    return (
        <div className='center-it-a'>
                <div className='heading'>
                    <SectionHeading>
                    Venue
                    </SectionHeading>
                </div>
                <div className='flex-it-a'>
                {VenueData.map((venue)=>
                    (
                    <div key={venue.id} as='li' className='card'>
                        <div class="layered-card">
                            <div class="layered-card__content">
                            <img className='venue_image' src={venue.image_link} />
                            </div>
                        </div>

                        <div className='container'>
                            <h4><strong>{venue.name}</strong></h4>
                            <h3>{venue.date}</h3>
                            {/* <p>{venue.type}</p> */}
                            <span>{venue.location}</span>
                            <div className='location-button'>
                                <a className='dwd-link' href={venue.map_link}>View Location</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    )
}

export default Venue;