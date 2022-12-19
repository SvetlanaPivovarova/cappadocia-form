import {useMultistepForm} from "../hook/useMultistepForm";
import {UserForm} from "./UserForm";
import {AddressForm} from "./AddressForm";
import {AccountForm} from "./AccountForm";
import {FormEvent, useState} from "react";

type FormData = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    zip: string
    email: string
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    zip: "",
    email: "",
    password: "",
}


export function Register() {
    const [data, setData] = useState(INITIAL_DATA);
    const {
        steps, currentStepIndex, step, isFirstStep, back, next, isLastPage
    } = useMultistepForm([
        <UserForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields}  />,
        <AccountForm {...data} updateFields={updateFields}  />
    ]);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }
    
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isLastPage) return next()
        alert(JSON.stringify(data));
    }

    return (
        <div
        style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem auto",
            borderRadius: ".5rem",
            maxWidth: "max-content"
        }}
        >
            <form onSubmit={handleSubmit}>
                <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}
                >
                    { currentStepIndex + 1 } / { steps.length }
                </div>
                {step}
                <div style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: ".5rem",
                    justifyContent: "flex-end"
                }}
                >
                    {!isFirstStep && <button type={"button"} onClick={back}>Back</button>}
                    <button type={"submit"}>
                        {isLastPage ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}