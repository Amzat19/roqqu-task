import "./step1.css";
import useState from "react";
import {ReactComponent as Username} from "../../assets/profile.svg"

const Step1 = () => {
    const [username, setUsername] = useState("")
    const onChange = (e) => {
        const {value} = e.target;
        setUsername(value)
    }
    return (
        <div className="step1">
            <h2>
                <span>Hey 👋🏽</span>
                <br />
                <span>Welcome to Roqqu</span>
            </h2>
            <h3>
                Let’s get to know you!
                <br />
                We’ll need you to choose a really cool name that other users can find you with, choose something cool like superman, or batman 😜
            </h3>
            <label>
                Username
                <div className="usernameandlogo">
                    <Username />
                <input 
                type="text"
                name="username"
                className="username"
                placeholder="Enter your username"
                />
                </div>

            </label>
        </div>
    )
}

export default Step1;