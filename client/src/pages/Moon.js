import React from "react";
import { Container, Grid } from "@material-ui/core";
import CenteredTabs from '../components/CenteredTabs'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo';
import CardThree from '../components/CardThree';
import Page from '../components/Page'
import Jumbotron from "../components/Jumbotron";


const Moon = () => {
    return (
        <Container fluid>
            <Grid>
                <Jumbotron>
                    <div className="h2">
                        <div className="p">Moons: and your health</div>

                    </div>
                </Jumbotron>
                <CenteredTabs>

                </CenteredTabs>
                <CardOne></CardOne>
                <CardTwo></CardTwo>
                <CardThree></CardThree>
            <Page></Page>
            </Grid>
        </Container>
    );
};

export default Moon;
