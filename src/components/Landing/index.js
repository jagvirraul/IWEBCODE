import React, { useState } from 'react';
import bird from '../../assets/bird.svg';
import example1 from '../../assets/example1.svg';
import example2 from '../../assets/example2.svg';
import example3 from '../../assets/example3.svg';
import horizontalSVG from '../../assets/horizontal-line.svg';
// import arrowSvg from '../../assets/arrow.svg';
import lineSVG from '../../assets/line.svg';
import turnSVG from '../../assets/turn.svg';
import arow_rotate from '../../assets/arrow_rotate.svg';
import './style.scss';
const initialState = false;

const Landing = () => {
    const [state, setstate] = useState(initialState);
    const [packing, setPacking] = useState(false);
    const [website, setWebsite] = useState(false);
    const onClick = () => {
        setstate((prev) => !prev);
    }
    return (
        <div className="landing">
            <div className="bird">
                <img src={bird} />
            </div>
            <p className="paragraph">
                I’m Arnau Ros, a graphic designer & content creator
                based in Barcelona. Available for freelance
                & collaborations.
            </p>
            <p className="project">Project</p>
            <div>
                <img src={lineSVG} />
            </div>
            <div className="example">
                <div>
                    <span className="example1">01 Example</span>
                    <img src={example1} className="o1example" />
                </div>
                <div>
                    <span className="example1">02 Example</span>
                    <img src={example2} className="o1example" />
                </div>
                <div>
                    <span className="example1">03 Example</span>
                    <img src={example3} className="o1example" />
                </div>
            </div>
            <p className="content">Content Creation</p>
            <div >
                <img src={lineSVG} />
            </div>
            <div className="content-value">
                <div> <p className="video-content">
                    Lorem ipsum YouTube dolor sit amet, consectetur
                    adipiscing elit. A nisi, accumsan, ornare donec
                    risus pharetra mattis in. YouTube elit. A nisi,
                    accumsan, ornare donec risus pharetra mattis in.
                    YouTube elit. A nisi, accumsan, ornare donec risus
                    pharetra mattis in.
                </p>
                    <p className="video-content" >
                        Get in contact about a sponsorship
                        <img src={turnSVG} />
                    </p>
                </div>
                <div>
                    <iframe className="youtube-video"
                        src="https://www.youtube.com/embed/mTAupMv-3t8">
                    </iframe>
                </div>
            </div>
            <p className="about">About Me</p>
            <div >
                <img src={lineSVG} />
            </div>
            <div>
                <p className="p-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Arcu nullam augue dolor libero at in. Egestas in elit
                    vitae tincidunt morbi egestas nec massa. Pretium,
                    placerat quis sem gravida vel quam nisl in semper.
                    Platea enim nunc aliquam volutpat, ut sed morbi. Sit
                    leo aliquam at amet, eu dictumst accumsan eu, quis.
                    Nam ac mattis adipiscing euismod arcu ac laoreet vitae at.
                    Nibh etiam dictumst nibh ut. Vitae massa rhoncus, et massa.
                    Diam fermentum malesuada scelerisque orci massa.
                </p>
            </div>
            <div className="second">
                <div>
                    Your one stop shop for:
                </div>
                <div className="ol-about">
                    <div className={`branding ${state ? 'open' : 'close'}`}>
                        <div className="title"
                            onClick={() => onClick()}>
                            <div>
                                ①   Branding / Logo
                            </div>
                            <div>
                                <img src={arow_rotate} className="arrow" />
                            </div>
                        </div>
                        <img src={horizontalSVG} />
                        <div className="branding-content">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Mi sed pulvinar rutrum
                            tempor. Etiam duis massa elementum, etiam
                            cras tristique. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mi sed pulvinar
                            rutrum tempor. Etiam duis massa elem Starting
                            at € 2,450
                        </div>
                    </div>
                    <div className={`branding ${packing ? 'open' : 'close'}`}>
                        <div className="title"
                            onClick={() => setPacking(prev => !prev)}>
                            <div>
                                ② Packaging
                            </div>
                            <div>
                                <img src={arow_rotate} className="arrow" />
                            </div>
                        </div>
                        <img src={horizontalSVG} />
                        <div className="branding-content">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Mi sed pulvinar rutrum
                            tempor. Etiam duis massa elementum, etiam
                            cras tristique. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mi sed pulvinar
                            rutrum tempor. Etiam duis massa elem Starting
                            at € 2,450
                        </div>
                    </div>
                    <div className={`branding ${website ? 'open' : 'close'}`}>
                        <div className="title"
                            onClick={() => setWebsite(prev => !prev)}>
                            <div>
                                ③ Websites
                            </div>
                            <div>
                                <img src={arow_rotate} />
                            </div>
                        </div>
                        <img src={horizontalSVG} />
                        <div className="branding-content">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Mi sed pulvinar rutrum
                            tempor. Etiam duis massa elementum, etiam
                            cras tristique. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mi sed pulvinar
                            rutrum tempor. Etiam duis massa elem Starting
                            at € 2,450
                        </div>
                    </div>
                </div>
            </div>
            <p className="whatsay">
                What Clients Say
            </p>
            <div >
                <img src={lineSVG} />
            </div>
        </div>
    );
}

export default Landing;