import "./App.css"
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

export default function App() {
    return (
        <>
            <div style={{padding: '2rem'}}>
                <SignupForm />
            </div>
            <div style={{padding: '2rem'}}>
                <LoginForm />
            </div>
        </>

    )
}