import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import userImg from '../../assets/userImage.png';

import './styles.scss';

export function Header() {
    return (
        <>
            <div className="container-menu">
                <div className="content-menu">
                    <Link to="/"><img src={ logoImg } alt="Logo Netflix" /></Link>
                    <section className="menu">
                        <div><Link to = "/series">Series</Link></div>
                        <div><Link to = "/movies">Movies</Link></div>
                        <div>Recently Added</div>
                        <div><Link to = "/mylist">My List</Link></div>
                    </section>
                </div>
                <img src={ userImg } alt="netflix" />
            </div>
        </>
    )
}