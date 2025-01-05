import logo from '../../assets/logo.png';
import insta from '../../assets/insta.png';

import './footer.css' 
export function ShowListe({list}){
    return(
        <ul>
        {list.map((e,index)=> <>
        <li key={index}><a href="#">{e}</a></li>
        </>)}
        </ul>
    )
}

function Footer() {
    const list1 = ["Author Profile", "Create Item", "Collection", "Edit Profile"];
    const list2 = ["Help Center", "Partner", "Community", "Activity"];
    const list3 = ["About", "Career", "Ranking", "Contact Us"];
    return (
        <>
            <div className='Footer-container'>
                <div className='first'>
                    <img src={logo} alt="HI LOGO" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel esse assumenda officiis perferendis sit eaque voluptatum, accusantium .</p>
                </div>
                <div>
                    <h3>My account</h3>
                    <ShowListe list={list1} />
                </div>
                <div>
                    <h3>Ressources</h3>
                    <ShowListe list={list2} />
                </div>
                <div>
                    <h3>Company</h3>
                    <ShowListe list={list3} />
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <input type="email" />
                    <div className='social-media'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
