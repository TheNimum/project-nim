import {Link} from 'react-router-dom'

function Home(){
    return (
        <div>
            <nav>
            <h1>Welcome to Puppy Date</h1>
            <ul>
            <li>
            <Link to='/'></Link>
            </li><li>
            <Link to='/Login'></Link>
            </li><li>
            <Link to='/Profile'></Link>
            </li>
            </ul>
            </nav>
        </div>

    )

}
export default Home;