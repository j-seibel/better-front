
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";



function hotGames() {
    return(
      <Card>
        <SoftBox display="flex" flexDirection="column" alignItems="center"mb={3}>
          <SoftTypography padding={1} fontWeight="bold">
            Hot Games
          </SoftTypography>
          <Grid container spacing={1} columns={1}>
            <Grid item xs={4}>
              <MiniStatisticsCard
                title={{ text: "Superbowl" }}
                count="2/12/24"
                percentage= {{ color:"error", text:"7pm"}}
                icon={{ color: "error", component: <LocalFireDepartmentIcon/> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "World Series" }}
                count="7/15/24"
                percentage= {{ color:"error", text:"11am"}}
                icon={{ color: "error", component: <LocalFireDepartmentIcon/> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "SPORTS!" }}
                count="2/18/24"
                percentage= {{ color:"error", text:"11am"}}
                icon={{ color: "error", component: <LocalFireDepartmentIcon/> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Olympics" }}
                count="6/24/24"
                percentage= {{ color:"error", text:"3pm"}}
                icon={{ color: "error", component: <LocalFireDepartmentIcon/>,}}
                direction="left"
              />
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
    )
}


export default hotGames;
