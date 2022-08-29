import style from "./services.module.css"
import serviceImage from "../../../assets/pexels-christina-morillo-1181263.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import TvIcon from '@mui/icons-material/Tv';
import BrushIcon from '@mui/icons-material/Brush';


const Services = () => {
    return <div className={style["serviceSection"]}>
            <div className={style["align"]}>
            <div className={style["textAlign"]}>
            <h1 className={style["h1Style"]}>Services</h1>
            <div className={style["text2Align"]}>
            <h2 className={style["whtStyle"]}>WE HAVE THE </h2>
            <h2></h2>
            <h2 className={style["expStyle"]}>EXPERIENCE</h2>
            </div>
            <p className={style["infoStyle"]}>
            Custom web application development by our expert web-app developers. Front-end & design, backend, database, and server scale designed to fit your business. We aim to create a consistent, safe and sustainable website or app that reflects your brand strategy and visual identity of the brand that helps your business establish a prominent position on the market.
            </p>
            
            </div>
            <div className={style["imgAlign"]}>
            <div className={style["box"]}></div>
            <img className={style["image"]} src={serviceImage}></img>
            </div>
            </div>

            <div className={style["boxesAlign"]}>
                <div className={style["firstBox"]}>
                    <LayersIcon className={style["layersIcon"]}/>
                    <div className={style["backEndAlign"]}>
                    <h1 className={style["backEnd"]}>BACK-END SERVICES</h1>
                   
                    <p className={style["firstTextAlign"]}>As part of our backend services, we build applications from the ground up. We have experienced developers who work closely with you to determine the best approach when developing your application.</p>
                    <div className={style["iconAlign"]}>
                    <button className={style["learn"]}>learn more</button>
                    <ArrowForwardIcon className={style["icon"]}/>
                    </div>
                    </div>
                </div>
                <div className={style["firstBox"]}>
                    <TvIcon className={style["tvIcon"]}/>
                    <div className={style["frontAlign"]}>
                    <h1 className={style["backEnd"]}>FRONT-END DEVELOPMENT</h1>
                    <p className={style["secondTextAlign"]}>Webly brings a wealth of experience with HTML, CSS and JavaScript to any project We are run by engineers who have been working with frontend libraries such as React and Svelte since the early days. </p>
                    <div className={style["iconAlign"]}>
                    <button className={style["learn"]}>learn more</button>
                    <ArrowForwardIcon className={style["icon"]}/>
                    </div>
                    </div>
                </div>
                <div className={style["firstBox"]}>
                    <BrushIcon className={style["brushIcon"]}/>
                    <div className={style["digitalAlign"]}>
                    <h1 className={style["backEnd"]}>DIGITAL DESIGN</h1>
                    <p className={style["firstTextAlign"]}>We create custom design that strengthens your brand identity, helps you reach new customers as well as fueling up the user experience and expand potential business.</p>
                    <div className={style["iconAlign"]}>
                    <button className={style["learn"]}>learn more</button>
                    <ArrowForwardIcon className={style["icon"]}/>
                    </div>
                    </div>
                </div>
            </div>

    </div>;
  };
  export default Services;