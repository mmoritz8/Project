import React from "react";
import { Container, Grid } from "@material-ui/core";
import SimpleExpansionPanel from '../components/SimpleExpansionPanel';
import EnergyTable from '../components/EnergyTable';
import Jumbotron from '../components/Jumbotron';
import CenteredTabs from '../components/CenteredTabs'

const Home = () => {
  return (
    <Grid>
      <Container>
        <Jumbotron>
          <div className="h2">
            <div className="p">CHAKRAS: and your health</div>

          </div>
</Jumbotron>
        <CenteredTabs>

        </CenteredTabs>
        <div>
          <SimpleExpansionPanel>

        </SimpleExpansionPanel>
        </div>
        <div>
          <EnergyTable></EnergyTable>
        </div>
      </Container>
              </Grid>
  );
};

export default Home;
