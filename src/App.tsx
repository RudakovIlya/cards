import {Link} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <h1>Main Page</h1>
            <Link to={'profile'}>profile &nbsp;</Link>
            <Link to={'login'}>login &nbsp;</Link>
            <Link to={'registration'}>registration&nbsp;</Link>
            <Link to={'recovery-password'}>recovery-password&nbsp;</Link>
            <Link to={'test'}>test</Link>
        </div>
    );
}
