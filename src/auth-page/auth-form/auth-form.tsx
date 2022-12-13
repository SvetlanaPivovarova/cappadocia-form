import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import './auth-form.css';
import { Typography, TextField, Button } from "@mui/material";
import {loginValidation, passwordValidation} from "./validation";

interface IForm {
    login: string;
    password: string;
}

export const AuthForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<IForm>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<IForm> = data => console.log(data);

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Log in
            </Typography>
            <Typography variant="subtitle1" component="div" className="auth-form__subtitle">
                to get access
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="login"
                    rules={ loginValidation }
                    render={({
                                 field: { onChange, onBlur, value, name, ref },
                             }) => (
                        <TextField
                            label="login"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            onChange={(e) => onChange(e)}
                            value={value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />

                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={ passwordValidation }
                    render={({
                                 field: { onChange, onBlur, value, name, ref },
                             }) => (
                        <TextField
                            label="password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            onChange={(e) => onChange(e)}
                            value={value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />

                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Log in
                </Button>
            </form>
        </div>
    )
}
