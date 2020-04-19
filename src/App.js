import React, {useRef} from 'react';
import './App.css';
import Intro from "./Intro/Intro";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
// General scroll to element function
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    return (
        <div className="App">

            <Intro onClick={() => executeScroll()}/>

            <div className={'mainContainer'} ref={myRef}>

                <div className={'titleContainer'}>
                    <img src={require('./assets/images/birthday-cake.gif')} alt={'icon'}/>

                    <p className={'mainTitle'}>무엇을 할까요?</p>
                </div>
                <div className={'container'}>

                    <div className={'mainMenu'}>
                        <div className={'contentContainer'}>

                            <div className={'forOverlay'}>
                                <div className={'contentBox'}
                                     style={{
                                         backgroundImage: `url(${require("./assets/images/meditation.jpg")}`,
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'center',
                                     }}>

                                    <p className={'contentTitle'}>명상</p>
                                    <div className={'overlay'} style={{background: 'rgba(191,113,105,0.89)'}}>

                                        <a href={"https://www.youtube.com/user/allwin7720/videos"} target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>단월드</p>
                                        </a>

                                        <a href={"https://www.youtube.com/channel/UCin2JCbXOju7mjlFvZ1SINQ"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>혜민스님</p>
                                        </a>

                                        <a href={"https://www.youtube.com/channel/UCe2PUQgI9wLdX8OLZZy5BXg"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>마보, 마음챙김명상</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={'forOverlay'}>
                                <div className={'contentBox'}
                                     style={{
                                         backgroundImage: `url(${require("./assets/images/cooking.jpg")}`,
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'center',
                                         opacity: 0.9
                                     }}>
                                    <p className={'contentTitle'} style={{fontWeight: 'bold', color: '#ffffff'}}>요리</p>
                                    <div className={'overlay'} style={{background: 'rgba(74,196,207,0.89)'}}>

                                        <a href={"https://www.youtube.com/channel/UCyn-K7rZLXjGl7VXGweIlcA"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>백종원의 요리비책</p>
                                        </a>
                                        <a href={"https://www.youtube.com/channel/UCKA_6r3CWC76x_EaFO6jsPA/videos"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>만 개의 레시피</p>
                                        </a>
                                        <a href={"https://www.youtube.com/channel/UCPWFxcwPliEBMwJjmeFIDIg"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>하루 한 끼</p>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className={'forOverlay'}>
                                <div className={'contentBox'}
                                     style={{
                                         backgroundImage: `url(${require("./assets/images/walking.jpg")}`,
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'center',
                                     }}>
                                    <p className={'contentTitle'}>운동</p>
                                    <div className={'overlay'} style={{background: 'rgba(80,145,151,0.89)'}}>

                                        <a href={"https://www.youtube.com/watch?v=6_LYz_XxD-g"} target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>아침 스트레칭</p>
                                        </a>

                                        <a href={"https://www.youtube.com/watch?v=H06zAcHqjYU"} target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>척추요가</p>
                                        </a>

                                        <a href={"https://www.youtube.com/channel/UCTAcO7MyXetuvExV7Lo_L6Q/videos?view=0&sort=p&shelf_id=2"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>줌바댄스</p>
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className={'forOverlay'}>

                                <div className={'contentBox'}
                                     style={{
                                         backgroundImage: `url(${require("./assets/images/travel.jpg")}`,
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'center',
                                         opacity: 0.9
                                     }}>
                                    <p className={'contentTitle'}>여행</p>
                                    <div className={'overlay'} style={{background: 'rgba(27,28,127,0.89)'}}>

                                        <a href={"https://artsandculture.google.com/u/1/streetview/tour-eiffel/sAHt5Gv4YGH84Q?sv_lng=2.294697006132574&sv_lat=48.85816565109427&sv_h=133.82836527019273&sv_p=-10.210221893030322&sv_pid=Pe03wIAND2EexK9lTcxm0w&sv_z=1.0000000000000002"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>에펠탑</p>
                                        </a>

                                        <a href={"https://www.google.com/maps/@59.3180182,18.0701316,3a,75y,319.25h,96.86t/data=!3m6!1e1!3m4!1srhRk1UeKvDzt_p4W2ydk1A!2e0!7i16384!8i8192"}
                                           target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>스톡홀름 우리집</p>
                                        </a>

                                        <a href={"https://g.co/arts/NPRrEkuTHGxeXVcE9"} target={"blank"}>
                                            <p style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>서대문자연사박물관</p>
                                        </a>

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <p style={{fontSize: '15px', alignSelf: 'center'}}>2020.4 가온 올림</p>

        </div>
    );
}

export default App;
