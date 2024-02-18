import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import Icon from "@mui/material/Icon";

import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/billing/components/History/Data/gradientLineChartData";

import typography from "assets/theme/base/typography";


function History() {
    const { size } = typography;
    return(
        <GradientLineChart
            title="Your Balance & Tokens"
            height="20.25rem"
            chart={gradientLineChartData}
        />
    )
}

export default History;