import { useNavigate } from "react-router-dom";

function Home()
{   const navigate = useNavigate();
    function clickHandler()
    {
            navigate('/labs');
    }
    return(
        <div>
            <h1>This Home section</h1>
            <button onClick={clickHandler}>Move to Labs</button>
        </div>
    );
}
export default Home;