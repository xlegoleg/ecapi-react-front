import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Link } from "@material-ui/core";
import { useButtonsStyles } from "@styles/globals/ButtonsStyle";

export const BaseRegisterModal: React.FC<any> = (props: any) => {
    const buttonClasses = useButtonsStyles();

    return <Dialog open={props.openModal} onClose={props.closeHandle}>
        <DialogTitle style={{paddingBottom: '0'}}>
            <Typography component="div" variant="h5">Sign up</Typography>
            <Typography variant="caption" color="textSecondary">Fill the form with profile data</Typography>
        </DialogTitle>
        <DialogContent>
            <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="string"
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="dense"
                id="repeatedPass"
                label="Repeat password"
                type="password"
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="dense"
                id="repeatedPass"
                label="Location (optional)"
                type="string"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button className={buttonClasses.successButton} size='small' variant="contained">
                Submit
            </Button>
            <Button className={buttonClasses.errorButton} onClick={props.closeHandle} size='small' variant="contained">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}