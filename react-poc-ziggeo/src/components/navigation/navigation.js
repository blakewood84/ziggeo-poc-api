import React, { useState } from 'react';
import { ButtonItem, Section } from '@atlaskit/menu';
import Popup from '@atlaskit/popup';
import { borderRadius } from '@atlaskit/theme';
import { AtlassianNavigation, PrimaryDropdownButton, PrimaryButton } from '@atlaskit/atlassian-navigation';

const ProductHomeExample = () => {
    return (
        <div style={{ color: '#0077b6', width: '200px', display: 'inline-block' }}>
            <h2>GoDashing</h2>
        </div>
    )
}

const PopupContents = (props) => {
    
    return (
        <Section>
            <ButtonItem
                description="Record a Video with Ziggeo"
                iconBefore={
                    <i className="fas fa-video" style={{ fontSize: '1.2rem', color: 'red' }}></i>
                }
                onClick={ () => {
                    props.history.push('/record-video');
                    props.setIsOpen(false);
                } }
            >
                Record a Video
            </ButtonItem>
            <ButtonItem
                description="Play a Video from the List"
                iconBefore={
                    <i className="fas fa-play-circle" style={{ fontSize: '1.2rem', color: 'green' }}></i>
                }
                onClick={ () => {
                    props.history.push('/view-videos');
                    props.setIsOpen(false)
                } }
            >
                Video List
            </ButtonItem>
            <ButtonItem
                description="Filter A List of Videos based on Tags"
                iconBefore={
                    <i className="fas fa-user-tag" style={{ fontSize: '1.2rem', color: 'orange' }}></i>
                }
                onClick={ () => {
                    props.history.push('/filter-videos');
                    props.setIsOpen(false)
                } }
            >
                Filter Videos
            </ButtonItem>
        </Section>
    );
    
}
const ExploreDropdown = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <Popup
            content={ () => <PopupContents history={ props.history } setIsOpen={ setIsOpen } /> }
            isOpen={ isOpen }
            placement="bottom-start"
            onClose={ () => setIsOpen(false) }
            trigger={ triggerProps => (
                <PrimaryDropdownButton
                    { ...triggerProps }
                    isSelected={ isOpen }
                    onClick={ () => setIsOpen( prev => !prev )  }
                >
                    Explore
                </PrimaryDropdownButton>
            )}
        >
        </Popup>
    )
}


export default function Navigation(props) {
    return (
        <div style={{ paddingBottom: 8, borderRadius: borderRadius(), height: '90%' }}>
            <AtlassianNavigation
                label="site"
                primaryItems={[
                    <PrimaryButton onClick={ () => props.history.push('/') }>Home</PrimaryButton>,
                    <ExploreDropdown history={ props.history }  />
                ]}
                renderProductHome={ ProductHomeExample}
            ></AtlassianNavigation>
        </div>
    )
}