import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Link } from "@material-ui/core";
import { useButtonsStyles } from "@styles/globals/ButtonsStyle";
import authService from "@services/auth";

export const BaseLoginModal: React.FC<any> = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const buttonClasses = useButtonsStyles();

    const registerHandler = () => {
        props.closeHandle();
        props.registerHandle();
    }

    const loginUser = () => {
        authService.login({
            email,
            password
        }).then((user) => {
            console.log(user);
        })
    }

    return <Dialog open={props.openModal} onClose={props.closeHandle}>
        <DialogTitle style={{paddingBottom: '0'}}>
            <Typography component="div" variant="h5">Sign in</Typography>
            <Typography variant="caption">{'New user? '}
                <Link style={{cursor: 'pointer'}} onClick={registerHandler} color="textSecondary">Create an account.</Link>
            </Typography>
        </DialogTitle>
        <DialogContent>
            <TextField
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
            />
            <TextField
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                margin="dense"
                id="pass"
                label="Password"
                type="string"
                fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={loginUser} className={buttonClasses.successButton} size='small' variant="contained">
                Submit
            </Button>
            <Button onClick={props.closeHandle} className={buttonClasses.errorButton} size='small' variant="contained">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}