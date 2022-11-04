/** @jsx jsx */
import { useMediaQuery } from 'react-responsive'
import { Box, Flex, jsx } from 'theme-ui'

export const MobileWorkshopSchedule = ({time,title,speaker}) => {
    return (<Flex
        sx={{
            p:2,
            m:2,
            backgroundColor:'#2f2762',
            color: 'white',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center'
            }}>
                <div>
                    <Box sx={{p:2}}>{time}</Box>
                </div>
                <div style={{alignItems:'center'}}>
                    <Box>{title}</Box>
                    <Box>{speaker}</Box>
                    </div>
            </Flex>)
}

export const DesktopWorkshopSchedule = ({time,workList}) => {
    return (  
    <Flex
        sx={{
        m:2,
        p:2,
        backgroundColor:'#2f2762',
        flexWrap: ['wrap','nowrap'],
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        // borderColor:'#D46C76',
        borderStyle: 'solid',
        borderWidth: 'light',
        borderRadius: 10,
          // boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
        }}>
        <div sx={{
            flex:'none',
            fontSize:2,
            fontWeight: 'bold',
            p:2,
            m:2,
            }}>
            {time}
        </div>
        <Flex sx={{
            p:2,
            m:2,
            flexWrap: 'wrap',
            flexGrow: 3,
            justifyContent:'center',
            borderColor:'while',
            borderStyle: 'solid',
            borderWidth: 'light'
            }}>
        {workList.map(item =>
            <div sx={{
                p:2,
                m:2,
                textAlign:'center',
                borderColor:'#FFD580',
                borderStyle: 'solid',
                borderWidth: 'light',
                fontSize: 2
            }}>
            <Box sx={{fontWeight: 'bold',}}>{item.title}</Box>
            <Box>{item.speaker}</Box>
            <Box>{item.room}</Box>
            </div>
        )}</Flex>
    </Flex>
)}

export default ({
    time,
    workList
  }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (<DesktopWorkshopSchedule time={time} workList={workList}/>)
    // return(isDesktopOrLaptop?<DesktopWorkshopSchedule time={time} speaker={speaker} title={title}/>:
    //                         <MobileWorkshopSchedule time={time} speaker={speaker} title={title}/>)
}