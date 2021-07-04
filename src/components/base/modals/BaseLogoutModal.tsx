import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Link } from "@material-ui/core";
import { useButtonsStyles } from "@styles/globals/ButtonsStyle";
import AuthUtils from "@utils/auth";
import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "@store/types/user";


export const BaseLogoutModal: React.FC<any> = (props: any) => {
    const buttonClasses = useButtonsStyles();
    const dispatch = useDispatch();

    const logoutHandle= () => {
        dispatch({
            type: USER_LOGOUT
        });
        AuthUtils.clearAuthDataFromClient();
        props.closeHandle();
    }

    return <Dialog open={props.openModal} onClose={props.closeHandle}>
        <DialogTitle style={{paddingBottom: '0'}}>
            <Typography component="div" variant="h5">Are you sure you want to log out ?</Typography>
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
            <Button onClick={logoutHandle} className={buttonClasses.successButton} size='small' variant="contained">
                Yes
            </Button>
            <Button onClick={props.closeHandle} className={buttonClasses.errorButton} size='small' variant="contained">
                No
            </Button>
        </DialogActions>
    </Dialog>
}