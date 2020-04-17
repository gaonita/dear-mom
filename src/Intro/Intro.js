import React from "react";

function Intro(props) {

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover, contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require("../assets/images/cake.jpg")})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(250,250,250,0.76)',
                height: '200px',
                width: '70%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                padding:20,
                borderRadius:30,

            }}>
                <p style={{
                    fontSize: 80,
                    fontWeight: 'bold',
                    color: 'rgba(80,207,139,0.93)',
                    margin:0
                }}>HAPPY BIRTHDAY!</p>
                <p style={{fontSize: 20}}>생신축하드려요! 세상에서 제일 아름다운 엄마, 앞으로도 매일 매일 새로운 즐거움을 찾는 행복한 사람이시기를 !</p>
            </div>

            <div>
                <button
                    className={'button'}
                    style={{
                        margin:40,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        width: 130,
                        height: 70,
                        borderRadius: 30,
                        border: 'solid 3px rgba(80,207,139,0.9)',
                        fontSize:20,
                        fontWeight:'bold',
                        color:'rgba(80, 207, 139, 1)',
                        transitionDuration: '0.4s',
                        "&:hover":{background:'#000'}
                    }}
                    onClick={props.onClick}>아래로
                </button>
            </div>


        </div>
    )
}

export default Intro;
