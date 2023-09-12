import React, { useState, useContext } from 'react'
import { Dialog, Box, Typography, TextField, Button, styled } from '@mui/material'
// import { AccountContext } from '../../context/Context'

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 82.75%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};

const signupInitialValues = {
    name: '',
    email: '',
    password: '',
};


//funtion starts
//{open, setOpen, setAccountPresent} getting as props
const LoginDialog = (props) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    // const [signup, setSignup] = useState(signupInitialValues);
    // 
    // const { userAccount, setUserAccount } = useContext(AccountContext);

    const handleClose = () => {
        props.setOpen(false);
        toggleAccount(accountInitialValues.login)
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const toggleLogin = () => {
        toggleAccount(accountInitialValues.login);
    }
    
    // const onInputChange = (e) => {
    //     setSignup({ ...signup, [e.target.name]: e.target.value });
    //     // console.log(signup)
    // }

    //================================= for localStorage Login starts =================================

    const [accountPresent, setAccountPresent] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [singupPassword, setSignupPassword] = useState('');
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/


    const localSignUp = localStorage.getItem('signup');
    const localEmail = localStorage.getItem('email');

    const handleSignup = () => {

        //debugger
        if (signupEmail === "" && singupPassword === "" && signupName === "") {
            alert("All  input field are  mandatory ...")
        } else if (signupName === '') {
            alert('Please enter username ...')
        } else if (signupEmail === '') {
            alert('Please enter Email ...')
        } else if (!signupEmail.match(emailPattern)) {
            alert('Please enter valid email ...')
        } else if (singupPassword === "") {
            alert('Please enter Password ...')
        } else if (localStorage.getItem("email") === signupEmail) {
            alert('email  already exists')
        }
        else {
            localStorage.setItem("name", signupName)
            localStorage.setItem("email", signupEmail)
            localStorage.setItem("password", singupPassword)
            localStorage.setItem("signup", signupName)
            alert('Account created Successfully');
            // window.location.reload();
            handleClose();
        }
    }

    const handleLogin = () => {
        let emailPattern = /^\S+@\S+\.\S+$/;

        if (loginEmail === "" && loginPassword === "") {
            alert("All  input field are  mandatory ...");
        } else if (loginEmail === '') {
            alert('Please enter Email ...')
        } else if (!loginEmail.match(emailPattern)) {
            alert('Please enter valid email ...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } else if (loginPassword === "") {
            alert('Please enter Password ...')
        } else if (loginEmail !== localStorage.getItem("email") || loginPassword !== localStorage.getItem("password")) {
            alert("Your email and password do not match Please try again ...");
        } else if (loginEmail === localStorage.getItem('email') && loginPassword === localStorage.getItem('password')) {
            // localStorage.setItem('signup', signupEmail);
            // window.location.reload();  
            alert('Welcome Back😍, LoggIn Successfully')
            localStorage.setItem("signup", localStorage.getItem("name"))
            props.setOpen(false);
            props.setAccountPresent(true);
        } else {
            alert('Enter correct Credentials')
        }

    }


    //================================= for localStorage Login starts =================================


    return (
        <Dialog open={props.open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>

                            <TextField variant="standard" label="Enter Email" onChange={(e) => setLoginEmail(e.target.value)}  />
                            <TextField type="password" variant="standard" label="Enter Password" onChange={(e) => setLoginPassword(e.target.value)}  />
                            <LoginButton onClick={handleLogin}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" name="name" label="Enter Your Name" onChange={(e) => setSignupName(e.target.value)} />
                            <TextField variant="standard" name="email" label="Enter Email" onChange={(e) => setSignupEmail(e.target.value)} />
                            <TextField type="password" variant="standard" name="password" label="Enter Password" onChange={(e) => setSignupPassword(e.target.value)} />
                            <LoginButton onClick={handleSignup}>Continue</LoginButton>
                            {/* onChange={(e) => onInputChange(e)}
                            onChange={(e) => onInputChange(e)}
                            onChange={(e) => onInputChange(e)}  */}
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <CreateAccount onClick={toggleLogin}>Already have an account ? Please Login</CreateAccount>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog