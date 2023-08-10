import { useNavigate } from "react-router-dom";

function Labs()
{
    const navigate = useNavigate();
    function clickHandler(){
            navigate('/about');
    }
    function backHandler()
    {
        navigate(-1);
    }
    return(
        <div>
            <h1>This Labs section</h1>
            <button onClick={clickHandler}>Go to about</button>
            <button onClick={backHandler}>Move to back</button>
        </div>
    );
}
export default Labs;