import { Box, Button, Grid, Stack, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import firstImg from '../../images/step-one.svg';
import secondImg from '../../images/step-two.svg';
import thirdImg from '../../images/step-three.svg';
import fourthImg from '../../images/step-four.svg';
import { useNavigate } from 'react-router-dom';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);

    const [first, setFirst] = useState({
        title: 'Get Leads as call'       
    });

    const [second, setSecond] = useState({
        name: "",
        price: "",
        imgLink: "",
    });

    const [third, setThird] = useState({
        sdate: '',
        edate: '',
        budget: 750,
        location: "",
        radius: 0,
    });

    const showStep = (step) => {
        switch (step) {
            case 1:
                return <StepOne setFirst={setFirst} first={first}></StepOne>;
            case 2:
                return <StepTwo setSecond={setSecond} second={second}></StepTwo>;
            case 3:
                return <StepThree setThird={setThird} third={third}></StepThree>;
            case 4:
                return <StepFour></StepFour>;
            default:
                return <StepOne></StepOne>;
        }
    };

    const steps = [
        { label: 'What you want to do', imgSrc: firstImg },
        { label: 'Choose product', imgSrc: secondImg },
        { label: 'Campaign settings', imgSrc: thirdImg },
        { label: 'Ready to go', imgSrc: fourthImg },
    ];

    const MyCustomConnector = ({activeStep}) => {
        const color = "rgba(255, 185, 99, 1)";
        return (
            <StepConnector style={{ flex: 0.5, borderTop: `1.5px solid ${color}` }} />
        );
    };

    return (
        <Box mx={5} mt={4}>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid>
                    <Typography variant='h5' fontWeight={600}>Your ad campaign</Typography>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>Launch your ad in just 4 easy steps</Typography>
                </Grid>
            </Grid>
            <Box mt={3}>
                <Box sx={{ mt: 2 }}>
                    <Stepper
                        sx={{ width: "100%", marginBottom: 2 }}
                        activeStep={activeStep - 1}
                        orientation="horizontal"
                        connector={<MyCustomConnector activeStep={activeStep} />}
                    >
                        {
                            steps.map((ele, ind) => {
                                return (
                                    <Step key={ind}>
                                        <StepLabel style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }} StepIconComponent={() => null}>
                                            <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
                                            <Box sx={{
                                                width: '50px',
                                                height: '50px',
                                                background: ind<activeStep ? 'rgba(255, 185, 99, 1)' : 'rgba(171, 182, 197, 1)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: '50%',
                                            }}>
                                                <img sx={{
                                                    backgroundColor: ind<activeStep ? "rgba(255, 185, 99, 1)" : "rgba(246, 249, 255, 1)",
                                                }} src={ele.imgSrc} alt={`Step ${1}`} />
                                            </Box>
                                            <Typography fontSize={15} fontWeight={500}>{ele.label}</Typography>
                                            </Box>
                                        </StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>

                    {showStep(activeStep)}

                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                        sx={{ mt: 2, mb:3 }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "rgba(15, 110, 255, 1)",
                                borderRadius: "7px",
                                width: "240px",
                            }}
                            onClick={() => activeStep === 4 ? navigate('/campaign') : setActiveStep(activeStep+1)}
                        >
                            {activeStep <= 3 ? <>Continue</> : <>Submit</>}
                        </Button>
                    </Stack>
                </Box>
            </Box>

        </Box>
    )
}

export default CreateCampaign